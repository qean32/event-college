'use client'

import Link from 'next/link';
import React from 'react';
import { HeaderUser } from '../ui';


interface Props {
}

export const Header: React.FC<Props> = ({ }: Props) => {

    return (
        <header className="flex justify-around bg-gray-100 items-center py-2">
            <h2 className="font-bold text-xl">LOGO</h2>
            <div className="flex gap-4">
                <Link href={''}><p className='font-bold text-lg text-blue-600'>Основная таблица</p></Link>
                <Link href={''}><p className='font-bold text-lg'>Основные мероприятия</p></Link>
            </div>
            <HeaderUser />
        </header>
    );
}