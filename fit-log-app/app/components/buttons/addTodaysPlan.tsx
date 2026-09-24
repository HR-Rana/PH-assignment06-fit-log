"use client"

import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";

export default function AddTodaysPlan() {
    return (
        <div className='text-black'>
            <button className='btn bg-lime-400 font-semibold text-black'><span><FaRegCalendarAlt /></span> Add Today's Plan</button>
        </div>
    )
}
