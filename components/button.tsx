import React from 'react';
import Link from 'next/link';

export const CreateButton =()=> {
    return (
        <Link href="/contacts/create" className='inline-flex items-center'>Create</Link>
    )
}