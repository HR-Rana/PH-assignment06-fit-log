"use client"
import React from 'react'
import { FaRegBookmark } from "react-icons/fa";

export default function SaveforLater() {
    return (
        <div>
            <button className='btn border-2 py-2 border-gray-700'> <span><FaRegBookmark /></span> Save For Later</button>
        </div>
    )
}
