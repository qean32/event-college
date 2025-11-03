'use client'

import { cn } from '@/lib'
import React from 'react';


interface Props {
    className?: string
    title: string
    size?: 'text-md' | 'text-lg' | 'text-2xl'
}

export const TextBold: React.FC<Props> = ({ className, title, size = 'text-md' }: Props) => {

    return (
        <p className={cn('font-bold', className, size)}>{title}</p>
    );
}