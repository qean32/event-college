'use client'

import { ArrowBigLeftDash } from 'lucide-react';
import React from 'react';
import Router from 'next/router'


interface Props {
    title: string
}

export const PersonalAccountTitle: React.FC<Props> = ({ title }: Props) => {

    return (
        <div className='flex h-[200px] items-center justify-around'>
            <div onClick={() => Router.back()} className="rounded-full w-[30px] aspect-square ml-20 cursor-pointer">
                <ArrowBigLeftDash />
            </div>
            <p className='w-full text-center text-4xl font-bold text-blue-600'>
                {title}
            </p>
        </div>
    );
}