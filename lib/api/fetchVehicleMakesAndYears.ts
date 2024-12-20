import { VehicleMake } from "../types/VehicleMake";
import { fetchVehicleMakes } from "./fetchVehicleMakes";

export async function fetchVehicleMakesAndYears(): Promise<{
    years: string[];
    makes: VehicleMake[];
   
}> {
    const makes = await fetchVehicleMakes();

    const years = generateYears(2014, new Date().getFullYear());

    return { years, makes };
}

const generateYears = (startYear: number, endYear: number) =>
    Array.from({ length: endYear - startYear }, (_, i) =>
        (endYear - i).toString()
    );