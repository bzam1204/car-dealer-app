import { VehicleMake } from '../types/VehicleMake';

export async function fetchVehicleMakes(): Promise<VehicleMake[]> {
    try {
        const baseUrl = process.env.API_BASE_URL;
        const url = `${baseUrl}/vehicles/GetMakesForVehicleType/car?format=json`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return (await response.json()).Results;
    } catch (error) {
        throw new Error('Failed to fetch vehicle makes', error as Error);
    }
}
