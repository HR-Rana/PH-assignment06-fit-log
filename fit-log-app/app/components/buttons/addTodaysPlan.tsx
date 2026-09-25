"use client"

import { DataContextProvider } from '@/app/Context/DataContext';
import React, { useContext } from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";

export default function AddTodaysPlan({ data }: { data: IDatatype }) {

    const { todaysPlan, setTodaysPlan } = useContext(DataContextProvider);
    console.log(todaysPlan)
    if (!todaysPlan) {
        throw new Error(
            "AddTodaysPlan must be used inside DataContextProvider"
        );
    }

    const handleTodaysPlan = () => {

        const allReadyAdded = todaysPlan.length > 0 ? todaysPlan.find((items: IDatatype) => items.id === data.id) : null;

        if (allReadyAdded) {

            alert("this data is already added")
            return
        }


        setTodaysPlan([...todaysPlan, data])
    }


    return (
        <div className='text-black'>
            <button

                onClick={handleTodaysPlan}
                className='btn bg-lime-400 font-semibold text-black'><span><FaRegCalendarAlt /></span> Add Today's Plan</button>
        </div>
    )
}
