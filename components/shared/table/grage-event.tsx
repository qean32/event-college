'use client'

import { fakeEvent } from '@/export'
import React from 'react'
import { GradeColumn, GradeItem } from './item-column'


export function GradeEventTable() {


    return (
        <>
            <GradeColumn />
            {fakeEvent.map((item, _) => {
                return <GradeItem event={item} index={_ + 1} value={12} />
            })}
        </>
    )
}