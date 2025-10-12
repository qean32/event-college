'use client'

import { cn } from '@/lib'
import React from 'react';
import { Avatar, Box, Card, Flex, Theme } from "@radix-ui/themes";


interface Props {
    className?: string
}

export const HeaderUser: React.FC<Props> = ({ className }: Props) => {

    return (
        <div className={cn('', className)}>
            <Box maxWidth="240px" className='cursor-pointer'>
                <Flex gap="3" gapX={'20px'} align="center">
                    <Box>
                        <p className='font-bold'>Teodros Girmay</p>
                        <p className='text-sm'>Engineering </p>
                    </Box>
                    <Avatar
                        size="3"
                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        radius="medium"
                        fallback="T"
                    />
                </Flex>
            </Box>
        </div>
    );
}