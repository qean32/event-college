'use client'

import { fakeGroup, fakeSuperviser } from '@/export';
import React from 'react';
import { Title } from '../ui';


interface Props {
    className?: string
}

export const MainUpperPart: React.FC<Props> = ({ className }: Props) => {

    return (
        <div className='w-full flex max-h-[400px] gap-5'>
            <div className='flex justify-center items-center w-1/3'>
                <div className="bg-black aspect-square rounded-full w-6/12"></div>
            </div>
            <div className='flex w-2/3 justify-around gap-5'>
                <div className='flex flex-col w-2/4'>
                    <Title>Список лучших групп</Title>
                    <ol className='pt-5'>
                        {fakeGroup.map((item, _) => {
                            return <div className='grid' style={{ gridTemplateColumns: '1fr 2fr' }}><Title size='' className='w-[100px]'>{item}</Title> <p>200 Баллов</p></div>
                        })}
                    </ol>
                </div>
                <div className='flex flex-col w-3/4'>
                    <Title>Список лучших организаторов</Title>
                    <ol className='pt-5'>
                        {fakeSuperviser.map((item, _) => {
                            return <div className='grid' style={{ gridTemplateColumns: '1fr 1fr' }}><Title size='' className='w-[300px]'>{item}</Title> <p>2 Мероприятия</p></div>
                        })}
                    </ol>
                </div>
            </div>
        </div>
    );
}