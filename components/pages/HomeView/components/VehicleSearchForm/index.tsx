'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';

import { SelectModelYear } from '../SelectModelYear';
import { SelectVehicleMakes } from '../SelectVehicleMakes';

export interface Inputs {
    make: string;
    year: string;
}

export function VehicleSearchForm() {
    const { getFieldState, watch, control } = useForm<Inputs>({
        defaultValues: {
            make: '',
            year: '',
        },
    });

    const selectedMake = watch('make');
    const selectedYear = watch('year');

    const disable = !(getFieldState('make').isDirty && getFieldState('year').isDirty);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
                <p className="flex-[1]">Select a Maker: </p>
                <SelectVehicleMakes control={control} className="flex-[2] md:flex-[4]" />
            </div>
            <div className="flex gap-2 items-center">
                <p className="flex-[1]">Select the Year:</p>
                <SelectModelYear control={control} className="flex-[2] md:flex-[4]" />
            </div>
            <div className={`flex-1 ${disable && 'pointer-events-none'}`}>
                <Link target="_blank" href={`/results/${selectedMake}/${selectedYear}`}>
                    <Button className="w-full" disabled={disable} type="submit">
                        Next
                    </Button>
                </Link>
            </div>
        </div>
    );
}
