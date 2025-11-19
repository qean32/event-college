'use client'
import { MainUpperPart } from '@/components/shared';
import { FilterEvent } from '@/components/case/modal'
import { AllStudentEventTable } from '@/components/case/table';
import { CustomButton } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils"
import React from 'react';

interface Props {
    className?: string
}

export default function Main({ className }: Props) {

    return (
        <div className={cn('flex-1 gap-15 flex flex-col', className)}>
            <MainUpperPart />
            <div className='w-full min-h-[400px] px-15'>
                <div className="flex justify-between">
                    <div className="flex gap-5 items-center">
                        <p className='text-2xl'>Выбранный фильтр</p>
                        <Button className='h-[40px]'><p>Список всех студентов за все время</p></Button>
                    </div>
                    <div className='flex gap-2 pb-10'>
                        <FilterEvent />
                        <CustomButton className=''><p>Экспорт в Exel</p></CustomButton>
                    </div>
                </div>
                <div className="">
                    <AllStudentEventTable />
                </div>
            </div>
        </div>
    );
}