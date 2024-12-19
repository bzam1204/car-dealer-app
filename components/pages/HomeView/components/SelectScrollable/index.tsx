import * as React from "react"

import { SelectGroup } from "@radix-ui/react-select";

import {
    Select,
    SelectItem,
    SelectLabel,
    SelectValue,
    SelectContent,
    SelectTrigger,
} from "@/components/ui/select"

interface SelectScrollableProps {
    value: string;
    options: string[];
    onChange?: () => void;
    className?: string;
    selectLabel: string;
    placeholder: string;
}

export function SelectScrollable({
    value,
    options,
    onChange,
    className,
    selectLabel,
    placeholder,
}: Readonly<SelectScrollableProps>) {
    return (
        <Select defaultValue={value} onValueChange={onChange} >
            <SelectTrigger className={className} >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{selectLabel}</SelectLabel>
                    {options.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}