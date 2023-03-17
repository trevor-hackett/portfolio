import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { AnalyticsWrapper } from '@/components/analytics'
import { Navbar } from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    absolute: 'Trevor Hackett | Software Engineer',
    default: '#s | Trevor Hackett',
  },
  description:
    'Trevor Hackett is a software engineer based in the United States.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head />
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
        <div className="mx-auto flex min-h-screen w-11/12 max-w-6xl flex-col">
          <Navbar />
          <div className="flex grow flex-col justify-center">{children}</div>
        </div>
        <AnalyticsWrapper />
        <Toaster />
      </body>
    </html>
  )
}
