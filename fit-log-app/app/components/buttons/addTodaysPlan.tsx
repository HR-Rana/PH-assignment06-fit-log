"use client"

import { DataContextProvider } from '@/app/Context/DataContext';
import React, { useContext } from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { toast } from 'react-toastify';

export default function AddTodaysPlan({ data }: { data: IDatatype }) {

    const { todaysPlan, setTodaysPlan } = useContext(DataContextProvider)!;



    const handleTodaysPlan = () => {
        const alreadyAdded = todaysPlan.some(
            (items: IDatatype) => items.id === data.id
        );

        if (alreadyAdded) {
            toast.warning(`${data.name} is already added`);
            return;
        }

        setTodaysPlan((prev) => [...prev, data]);

        toast.success(`${data.name} is added to Today's Plan`);
    };


    return (
        <div className='text-black'>
            <button

                onClick={handleTodaysPlan}
                className='btn bg-lime-400 font-semibold text-black'><span><FaRegCalendarAlt /></span> Add Today's Plan</button>
        </div>
    )
}
