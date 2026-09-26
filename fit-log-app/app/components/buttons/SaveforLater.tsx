"use client"
import { DataContextProvider } from '@/app/Context/DataContext';
import React, { useContext } from 'react'
import { FaRegBookmark } from "react-icons/fa";
import { toast } from 'react-toastify';

export default function SaveforLater({
    data,

}: {
    data: IDatatype;

}) {
    const { save, setSave } = useContext(DataContextProvider);


    const handleSaveData = () => {
        const allReadyAdded = save.length > 0 ? save.find((items: IDatatype) => items.id === data.id) : null;

        if (allReadyAdded) {

            toast.warning(`${data.name} is already added`)
            return
        }

        toast.success(`${data.name} save successfullly`)
        setSave([...save, data])
    }



    return (
        <div>
            <button
                onClick={() => handleSaveData(data)}
                className='btn border-2 py-2 border-gray-700'> <span><FaRegBookmark /></span> Save For Later</button>
        </div>
    )
}
