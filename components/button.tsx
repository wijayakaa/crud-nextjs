'use client';
import React from 'react';
import Link from 'next/link';
import { IoAddSharp,IoPencil, IoTrashOutline } from 'react-icons/io5';
import { useFormStatus } from 'react-dom';

export const CreateButton =()=> {
    return (
        <Link href="/contacts/create" className='inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm'>
            <IoAddSharp size={20}/>
            Create
        </Link>
    )
};

export const EditButton =()=> {
    return (
        <Link href="/contacts/edit" className='rounded-sm border p-1 hover:bg-gray-100'>
            <IoPencil size={20}/>
        </Link>
    )
};

export const DeleteButton =()=> {
    return (
        <button className="rounded-sm border p-1 hover:bg-gray-100">
            <IoTrashOutline size={20}/>
        </button>
    )
};

export const SubmitButton =({label}:{label:string})=> {
    const {pending} = useFormStatus(); 
    return (
        <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center' disabled={pending      }>
            {label === 'Save' ? (
                <span>{pending ? "Saving...": "Save"}</span>
            ):(
                <span>{pending ? "Updating...": "Update"}</span>
            )}
        </button>
    )
}