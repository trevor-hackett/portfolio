'use client'

import { useToast } from '@/hooks/use-toast'

import { Button } from '@/components/ui/button'

export function RootPageButton() {
  const { toast } = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          title: 'Just testing',
          description: 'this is the toast description',
        })
      }
    >
      Testing
    </Button>
  )
}
