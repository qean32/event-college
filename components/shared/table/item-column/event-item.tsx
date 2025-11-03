'use client'

import { eventDto } from '@/@types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib';
import React from 'react';


interface Props {
    event: eventDto
    value: number
    index: number
}

export const EventItem: React.FC<Props> = ({ event: { date, name }, value, index }: Props) => {

    return (
        <div className={cn("text-sm font-medium grid py-3 pl-7", ((index % 2 == 0) ? 'bg-gray-200' : 'bg-gray-100'))} style={{ gridTemplateColumns: '9fr 1fr 1fr 1fr' }} >
            <p>{name}</p>
            <p className='pl-1'>{value}</p>
            <p>{date}</p>
            <Button size={'lg'} className='bg-red-700 hover:bg-red-800 mx-2 cursor-pointer'><p>Удалить</p></Button>
        </div>
    );
}