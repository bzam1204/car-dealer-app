'use client';

import { RotateCwIcon } from 'lucide-react';
import { Control, Controller } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { LoadingIcon } from '@/components/ui/LoadingButton';
import { useGetVehicleMakes } from '@/hooks/useGetVehicleMakes';

import { SelectScrollable } from '../SelectScrollable';
import { Inputs } from '../VehicleSearchForm';

interface SelectModelYearProps {
    control: Control<Inputs, unknown>;
    className?: string;
}

export function SelectVehicleMakes({ control, className }: Readonly<SelectModelYearProps>) {
    const { makes, optionsMakes, isErrorMakes, refetchMakes, isLoadingMakes, isRefetchingMakes } =
        useGetVehicleMakes();

    if (isLoadingMakes) {
        return <LoadingIcon size="22" className="text-blue-500" />;
    }

    if (!makes || isErrorMakes || !optionsMakes) {
        return (
            <div className="flex gap-2 items-center">
                <Button className="bg-red-500" size="sm" onClick={() => refetchMakes()}>
                    {isRefetchingMakes ? <LoadingIcon /> : <RotateCwIcon />}
                    Retry
                </Button>
            </div>
        );
    }

    return (
        <Controller
            control={control}
            name="make"
            render={({ field }) => (
                <SelectScrollable
                    value={field.value}
                    options={optionsMakes}
                    onChange={field.onChange}
                    className={className}
                    selectLabel="Makes"
                    placeholder="Select a vehicle make"
                />
            )}
        />
    );
}
