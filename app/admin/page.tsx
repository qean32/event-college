'use client'


import { Info } from '@/components/shared';
import { AddEvent } from '@/components/shared';
import { AdminEventTable } from '@/components/shared/table';
import { PersonalAccountTitle, TextBold } from '@/components/ui';
import { cn } from '@/lib'
import React from 'react';

interface Props {
    className?: string
}

export default function Page({ className }: Props) {

    return (
        <div className={cn('flex-1', className)}>
            <PersonalAccountTitle title='Кабинет администратора' />
            <div className="flex justify-center gap-7">
                <Info.Admin />

                <div className="flex flex-col px-5 rounded-md w-3/4">
                    <div className='pb-6 flex justify-between'>
                        <TextBold size='text-lg' title='Мероприятия' />
                        <AddEvent />
                    </div>
                    <AdminEventTable />
                </div>
            </div>
        </div>
    );
}