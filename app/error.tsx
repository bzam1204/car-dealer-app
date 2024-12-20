'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function ErrorBoundary({
    error,
    reset,
}: Readonly<{
    error: Error & { digest?: string }
    reset: () => void
}>) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <Card className=' min-w-96 flex p-4 flex-col items-center justify-center'>
                <CardHeader>
                    <h2>Something went wrong!</h2>
                </CardHeader>
                <CardContent>
                    <Button
                        className='bg-red-400'
                        onClick={() => reset()}
                    >
                        Try again
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}