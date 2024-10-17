"use client"

import {saveContact} from '@/lib/actions';
import {useFormState} from 'react-dom';
import {SubmitButton} from '@/components/button';

const CreateForm = () => {
    const [state,formActions] = useFormState(saveContact, null);
    
    return (
        <div>
            <form action={formActions}>
                <div className="mb-5">
                    <label htmlFor="name" className='block text-sm font-medium text-gray-900'>Full Name</label>
                    <input  type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Full Name..."/>
                    <div id='name-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500' id='name-error-message'>{state?.Error?.name}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="phone" className='block text-sm font-medium text-gray-900'>Phone Number</label>
                    <input  type="text" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Phone Number..."/>
                    <div id='phone-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500' id='name-error-message'>{state?.Error?.phone}</p>
                    </div>
                </div>
                    <div id='message-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500' id='name-error-message'>{state?.message}</p>
                    </div>
                <SubmitButton label='Save'/>
            </form>
        </div>
    )
}

export default CreateForm;