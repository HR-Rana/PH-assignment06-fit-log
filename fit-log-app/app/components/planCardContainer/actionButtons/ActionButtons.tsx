"use client"
import DataContext from '@/app/Context/DataContext';
import Link from 'next/link'
import React, { useContext } from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import { MdDone } from "react-icons/md"; // ✓
import { toast } from 'react-toastify';


export default function ActionButtons({
    data,
    handleRemoveItems,
}: {
    data: IDatatype;
    handleRemoveItems: (data: IDatatype) => void;
}) {




    return (
        <div className='buttons w-full flex gap-5 [&>button]:cursor-pointer  [&>button]:px-3 [&>button]:font-semibold [&>button]:rounded-xl'>
            <Link href={`/fit-log/${data.id}`} className='cursor-pointer'>
                <button className="btn px-4 py-2 border-2 border-bg-gray-400!">
                    View Details
                </button>
            </Link>
            <button className='bg-lime-400 text-black flex items-center gap-2' > <MdDone className='text-xl' /> Mark as Done</button>
            <button onClick={() => handleRemoveItems(data)}><LiaTimesSolid /></button>
        </div>
    )
}
