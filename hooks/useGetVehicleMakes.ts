import { useQuery } from "@tanstack/react-query";

import { fetchVehicleMakes } from "@/lib/api/fetchVehicleMakes";

export function useGetVehicleMakes() {
    const { data, isLoading, isError, refetch, isRefetching } = useQuery({
        queryKey: ["vehicleMakes"],
        queryFn: fetchVehicleMakes,
    });

    return {
        makes: data,
        isErrorMakes: isError,
        refetchMakes: refetch,
        isLoadingMakes: isLoading,
        isRefetchingMakes: isRefetching,
    };
}
