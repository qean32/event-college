'use client'
import { Info, StudentInfo } from '@/components/shared';
import { TextBold } from '@/components/ui';
import { cn } from '@/lib'
import { Separator } from '@radix-ui/themes';
import React from 'react';
interface Props {
    className?: string
}

export default function Page({ className }: Props) {

    return (
        <div className={cn('flex-1', className)}>
            <div className='flex h-[200px] items-center justify-around bg-gray-200'>
                <div className="bg-gray-700 rounded-full w-[40px] h-[40px] ml-20"></div>
                <p className='w-full text-center text-6xl font-bold text-blue-600'>
                    Личная карточка студента
                </p>
            </div>
            <div className="flex justify-center">
                <div className="flex gap-6 w-11/12 pt-10">
                    <StudentInfo />
                    <div className="flex flex-col px-5 py-5 rounded-md w-3/4 border border-gray-200">
                        <TextBold title='Мероприятия' />
                    </div>
                </div>
            </div>
        </div>
    );
}