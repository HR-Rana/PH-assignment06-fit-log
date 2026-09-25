"use client"
import DataContext from '@/app/Context/DataContext';
import Link from 'next/link'
import React, { useContext } from 'react'
import { LiaTimesSolid } from "react-icons/lia";


export default function ActionButtons({ data }: { data: IDatatype }) {



    const handleRemoveItems = ({ data }: { data: IDatatype }) => {
        alert(data.name)
    }

    return (
        <div className='buttons'>
            <Link href={`/fit-log/${data.id}`}>
                <button className="btn px-3 py-2 border-2 border-bg-gray-700">
                    View Details
                </button>
            </Link>
            <button  >Mark as Done</button>
            <button onClick={() => handleRemoveItems(data)}><LiaTimesSolid /></button>
        </div>
    )
}
