'use client'
import { cn } from '@/lib'
import React from 'react';
interface Props {
    className?: string
}

export default function Page({ className }: Props) {

    return (
        <div className={cn('flex-1 flex justify-center items-center', className)}>
        </div>
    );
}