import { VehicleModel } from "../types/VehicleModel";

const fetchVehicleModels = async (
    year: string,
    makeId: string
): Promise<VehicleModel[]> => {
    try {
        const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId.trim()}/modelyear/${year.trim()}?format=json`;

        const response = await fetch(url);

        return (await response.json()).Results;
    } catch (error) {
        throw new Error("Failed to fetch vehicle models", error as Error);
    }
};

export { fetchVehicleModels };
