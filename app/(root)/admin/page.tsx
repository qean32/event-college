'use client'


import { Admin } from '@/components/case/info';
import { AddEvent } from '@/components/case/modal';
import { AdminEventTable } from '@/components/case/table';
import { PersonalAccountTitle } from '@/components/ui';
import { cn } from "@/lib/utils"
import React from 'react';

interface Props {
    className?: string
}

export default function Page({ className }: Props) {

    return (
        <div className={cn('flex-1', className)}>
            <PersonalAccountTitle title='Кабинет администратора' />
            <div className="flex justify-center gap-7">
                <Admin />

                <div className="flex flex-col px-5 rounded-md w-3/4">
                    <div className='pb-6 flex justify-between'>
                        <p className='text-lg font-medium'>Мероприятия</p>
                        <AddEvent />
                    </div>
                    <AdminEventTable />
                </div>
            </div>
        </div>
    );
}