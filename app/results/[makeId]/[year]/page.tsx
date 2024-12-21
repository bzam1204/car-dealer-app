import { ResultsView } from '@/components/pages/Results';
import { fetchVehicleMakesAndYears } from '@/lib/api/fetchVehicleMakesAndYears';

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

export default async function VehicleModelsPage({
    params,
}: Readonly<{ params: { makeId: string; year: string } }>) {
    const { makeId, year } = params;

    return <ResultsView year={year} makeId={makeId} />;
}
