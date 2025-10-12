'use client'

import { cn } from '@/lib'
import React from 'react';
import { TextBold } from '../ui';


interface Props {
    className?: string
    title: string
    value: string
}

export const Info: React.FC<Props> = ({ className, title, value }: Props) => {

    return (
        <div className={cn('pb-4', className)}>
            <TextBold title={title} />
            <p className='font-medium'>{value}</p>
        </div>
    );
}