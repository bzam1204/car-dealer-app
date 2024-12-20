import React from "react";

import { Control, Controller } from "react-hook-form";

import { SelectScrollable } from "../SelectScrollable";

import { Inputs } from "../VehicleSearchForm";

interface SelectModelYearProps {
    control: Control<Inputs, unknown>;
    className?: string;
}
const generateYears = (startYear: number, endYear: number) =>
    Array.from({ length: endYear - startYear }, (_, i) => (endYear - i).toString());

export function SelectModelYear({ className, control }: Readonly<SelectModelYearProps>) {
    const currentYear = new Date().getFullYear();
    const years = generateYears(2014, currentYear).map((year) => ({ label: year, value: year }));

    return (
        <Controller control={control} name="year" render={({ field }) => (
            <SelectScrollable
                value={field.value}
                options={years}
                onChange={field.onChange}
                className={className}
                selectLabel="Model Year"
                placeholder="Select a year..."
            />
        )} />

    );
}