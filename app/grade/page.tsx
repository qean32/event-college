'use client'


import { GradeEventTable } from '@/components/shared/table';
import { cn } from "@/lib/utils"
import React from 'react';

interface Props {
    className?: string
}

export default function Main({ className }: Props) {

    return (
        <div className={cn('flex-1 px-15 pt-15', className)}>
            <div className='w-full min-h-[400px]'>
                <GradeEventTable />
            </div>
        </div>
    );
}