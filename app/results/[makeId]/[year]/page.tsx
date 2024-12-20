import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableCaption,
} from "@/components/ui/table";

import { fetchVehicleModels } from "@/lib/api/fetchVehicleModel";
import { fetchVehicleMakesAndYears } from "@/lib/api/fetchVehicleMakesAndYears";

export async function generateStaticParams() {
  const { makes, years } = await fetchVehicleMakesAndYears();

  const paths = [];

  for (const make of makes) {
    for (const year of years) {
      paths.push({ makeId: make.MakeId.toString(), year });
    }
  }

  return paths; 
}

export default async function VehicleModelsPage({ params }: Readonly<{ params: { makeId: string, year: string } }>) {
  const { makeId, year } = params;
  
  const models = await fetchVehicleModels(year, makeId);

  if (!models) {
    return <div>Error loading vehicle models. Please try again later.</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
      <h1 className="text-3xl text-gray-900 leading-tight">Vehicle Models for {models[0].Make_Name} in {year}</h1>
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