import { VehicleMake } from "../types/VehicleMake";

export async function fetchVehicleMakes(): Promise<VehicleMake[]> {
    const res = await fetch(
        "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return (await res.json()).Results;
}
