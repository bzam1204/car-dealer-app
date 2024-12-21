import { RotateCwIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { fetchVehicleModels } from '@/lib/api/fetchVehicleModel';

interface ResultsViewProps {
    year: string;
    makeId: string;
}

export async function ResultsView({ year, makeId }: Readonly<ResultsViewProps>) {
    const models = await fetchVehicleModels(year, makeId);

    if (!models || models.length === 0) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <Card className=" min-w-96 flex p-4 flex-col items-center justify-center">
                    <CardHeader>
                        <h2>
                            Error loading vehicle models. No models found for the selected make and
                            year
                        </h2>
                    </CardHeader>
                    <CardContent>
                        <Button className="bg-red-500" size="sm">
                            {<RotateCwIcon />}
                            Retry
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
            <h1 className="text-3xl text-gray-900 leading-tight">
                Vehicle Models for {models[0].Make_Name} in {year}
            </h1>
            <Table>
                <TableCaption>Models Found: {models.length}</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {models.map((model) => (
                        <TableRow key={model.Model_ID}>
                            <TableCell className="font-medium">{model.Model_ID}</TableCell>
                            <TableCell>{model.Model_Name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
