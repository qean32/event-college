'use client'

import { cn } from '@/lib'
import React from 'react';


interface Props {
    className?: string
    title: string
}

export const TextBold: React.FC<Props> = ({ className, title }: Props) => {

    return (
        <p className={cn('text-md font-bold', className)}>{title}</p>
    );
}