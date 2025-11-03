'use client'


import { eventDto } from '@/@types';
import { Info } from '@/components/shared';
import { StudentEventTable } from '@/components/shared/table';
import { EventColumn, EventItem, PersonalAccountTitle, SelectMounth, TextBold } from '@/components/ui';
import { fakeEvent } from '@/export';
import { cn } from '@/lib'
import React from 'react';

interface Props {
    className?: string
}

export default function Page({ className }: Props) {

    return (
        <div className={cn('flex-1', className)}>
            <PersonalAccountTitle title='Личная карточка студента' />

            <div className="flex justify-center gap-7">
                <Info.Student />
                <div className="flex flex-col px-5 rounded-md w-3/4">
                    <TextBold title='Мероприятия' />
                    <div className='flex gap-4 py-4'>
                        <p>Разделы</p>
                        <SelectMounth />
                    </div>
                    <StudentEventTable />
                </div>
            </div>
        </div>
    );
}