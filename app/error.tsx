'use client';

import { RotateCwIcon } from 'lucide-react';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function ErrorBoundary({
    error,
    reset,
}: Readonly<{
    error: Error & { digest?: string };
    reset: () => void;
}>) {
    useEffect(() => {
        // to be replaced with a logging service
        // eslint-disable-next-line no-console
        console.error(error);
    }, [error]);

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card className=" min-w-96 flex p-4 flex-col items-center justify-center">
                <CardHeader>
                    <h2>Something went wrong!</h2>
                </CardHeader>
                <CardContent>
                    <Button className="bg-red-500" size="sm" onClick={() => reset()}>
                        {<RotateCwIcon />}
                        Retry
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
