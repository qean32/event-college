'use client'

import { cn } from '@/lib'
import React from 'react';
import { TextBold } from '../ui';
import { Info } from './info';


interface Props {
    className?: string
}

export const StudentInfo: React.FC<Props> = ({ className }: Props) => {

    return (
        <div className={cn("flex flex-col px-5 py-5 rounded-md w-1/6 border border-gray-200", className)}>
            <TextBold title='Информация о студенте' className='pb-5' />
            <Info title='ФИО' value='Адрей Евгеньевич Шарапин' />
            <Info title='Группа' value='22адс-2' />
            <Info title='Отделение' value='Информационные сети' />
            <Info title='Курс' value='3' />
            <Info title='Пол' value='муж' />
            <Info title='Дата рождения' value='20.06.2006' />
        </div>
    );
}