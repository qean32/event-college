'use client'
import { cn } from '@/lib'
import { Button, Card, Text, TextField } from '@radix-ui/themes';
import React from 'react';
interface Props {
    className?: string
}

export default function Page({ className }: Props) {

    return (
        <div className={cn('flex-1 flex justify-center items-center', className)}>
            <div className="flex flex-col gap-2 -translate-y-1/2 bg-gray-200 py-5 px-5 rounded-lg w-[350px]">
                <p className='text-xl'>Авторизация</p>
                <TextField.Root placeholder="Login" className='w-full' size='3' />
                <TextField.Root placeholder="Password" className='w-full' size='3' />
                <Button asChild size='3' className='cursor-pointer'><p>Авторизация</p></Button>
            </div>
        </div>
    );
}