import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { fetchVehicleMakes } from '@/lib/api/fetchVehicleMakes';

export function useGetVehicleMakes() {
    const { data, isLoading, isError, refetch, isRefetching } = useQuery({
        queryKey: ['vehicleMakes'],
        queryFn: fetchVehicleMakes,
        staleTime: 1000 * 60 * 24,
        gcTime: Infinity,
    });

    const options = useMemo(
        () =>
            data
                ?.map((m) => ({
                    label: m.MakeName,
                    value: m.MakeId.toString(),
                }))
                .sort((a, b) => a.label.localeCompare(b.label)),
        [data]
    );

    return {
        makes: data,
        optionsMakes: options,
        isErrorMakes: isError,
        refetchMakes: refetch,
        isLoadingMakes: isLoading,
        isRefetchingMakes: isRefetching,
    };
}
