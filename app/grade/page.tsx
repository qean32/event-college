'use client'


import { GradeEventTable } from '@/components/shared/table';
import { cn } from '@/lib'
import React from 'react';

interface Props {
    className?: string
}

export default function Main({ className }: Props) {

    return (
        <div className={cn('flex-1 px-15 pt-25 gap-10 flex flex-col', className)}>
            <div className='w-full min-h-[400px]'>
                <GradeEventTable />
            </div>
        </div>
    );
}