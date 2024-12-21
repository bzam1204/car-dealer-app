import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { VehicleSearchForm } from './components/VehicleSearchForm';

export function HomePage() {
    return (
        <main className="w-screen h-screen flex items-center justify-center p-8 bg-gray-100">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <h1 className="text-2xl font-bold">Find the car that best serves you...</h1>
                </CardHeader>
                <CardContent>
                    <VehicleSearchForm />
                </CardContent>
            </Card>
        </main>
    );
}
