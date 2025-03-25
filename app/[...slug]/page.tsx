import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPages } from 'contentlayer/generated'

import { Mdx } from '@/components/mdx-components'

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPageFromParams(params: Awaited<PageProps['params']>) {
  const slug = params.slug?.join('/')
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    return null
  }

  return page
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split('/'),
  }))
}

export default async function PagePage(props: PageProps) {
  const params = await props.params
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1>{page.title}</h1>
      {page.description && <p className="text-xl">{page.description}</p>}
      <hr className="my-6" />
      <Mdx code={page.body.code} />
    </article>
  )
}
