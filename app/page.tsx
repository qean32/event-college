'use client'
import { MainUpperPart } from '@/components/shared';
import { AllStudentEventTable } from '@/components/shared/table';
import { CustomButton, TextBold } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib'
import React from 'react';

interface Props {
    className?: string
}

export default function Main({ className }: Props) {

    return (
        <div className={cn('flex-1 px-15 pt-25 gap-10 flex flex-col', className)}>
            <MainUpperPart />
            <div className='w-full min-h-[400px]'>
                <div className="flex justify-between">
                    <div className="flex gap-5 items-center">
                        <TextBold title='Выбранный фильтр' size='text-2xl' />
                        <Button className='h-[40px]'><p>Список всех студентов за все время</p></Button>
                    </div>
                    <div className='flex gap-2 pb-10'>
                        <CustomButton className=''><p>Фильтр</p></CustomButton>
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