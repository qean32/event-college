import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { fakeSuperviser } from "@/export"

export function SelectSupervisor() {
    return (
        <Select>
            <SelectTrigger className="w-full h-[40px]">
                <SelectValue placeholder="Выберите организатора" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Организаторы</SelectLabel>
                    {fakeSuperviser.map(item => <SelectItem value={item}>{item}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
