import { VehicleModel } from '../types/VehicleModel';

const fetchVehicleModels = async (year: string, makeId: string): Promise<VehicleModel[]> => {
    try {
        const baseUrl = process.env.API_URL;

        const url = `${baseUrl}/vehicles/GetModelsForMakeIdYear/makeId/${makeId.trim()}/modelyear/${year.trim()}?format=json`;

        const response = await fetch(url);

        return (await response.json()).Results;
    } catch (error) {
        throw new Error('Failed to fetch vehicle models', error as Error);
    }
};

export { fetchVehicleModels };
