import { VehicleMake } from "../types/VehicleMake";

export async function fetchVehicleMakes(): Promise<VehicleMake[]> {
    try {
        const res = await fetch(
            "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
        );

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return (await res.json()).Results;
    } catch (error) {
        throw new Error("Failed to fetch vehicle makes", error as Error);
    }
}
