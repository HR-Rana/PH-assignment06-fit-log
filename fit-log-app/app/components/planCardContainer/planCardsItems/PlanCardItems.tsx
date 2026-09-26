import Image from 'next/image'
import React, { useContext } from 'react'
import { IoTimeSharp } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import ActionButtons from '../actionButtons/ActionButtons';
import { DataContextProvider } from '@/app/Context/DataContext';
import { toast } from 'react-toastify';

import { Dispatch, SetStateAction } from "react";

interface IDataContext {
    setTodaysPlan: Dispatch<SetStateAction<IDatatype[]>>;
    setSave: Dispatch<SetStateAction<IDatatype[]>>;
}
interface Props {
    data: IDatatype;
    removeFrom: "todaysPlan" | "save";
}


export default function PlanCardItems({ data, removeFrom }: Props) {

    const { setTodaysPlan, setSave } = useContext(DataContextProvider)!

    const handleRemoveItems = (data: IDatatype) => {
        if (removeFrom === "todaysPlan") {
            setTodaysPlan((prev) =>
                prev.filter((item: IDatatype) => item.id !== data.id)

            );
        } else {
            setSave((prev) =>
                prev.filter((item: IDatatype) => item.id !== data.id)
            );
        }
        toast.success(`${data.name} is Removed`)
    };

    return (
        <div className='py-3 px-5 flex justify-between items-center '>
            <div className="left-content flex gap-5 w-[{40}%]">
                <div className='flex items-center'>
                    <Image src={data.image} width={150} height={50} alt={data.name} className='object-contain w-[{120px}px] md:w-fit lg:w-fit' />
                </div>
                <div className='w-full!'>
                    <h4 className='text-2xl uppercase font-semibold'>{data.name}</h4>
                    <p>{data.equipment}</p>

                    <div className="card-footer w-[{50}%] border-t-[{1}px] text-gray-500 gap-5 [&>p>span>svg]:text-lime-400 border-gray-800 py-5 flex justify-between">
                        <p className='flex gap-2 items-center'><span><IoTimeSharp /></span> {data.duration}</p>
                        <p className='flex gap-2 items-center'><span><FaFireAlt /></span> {data.caloriesBurned}</p>
                        <p className='flex gap-2 items-center'><span><FaStar /></span> {data.rating}</p>
                    </div>
                </div>
            </div>
            <div className="right-content flex justify-between w-[{45}%]">
                <ActionButtons data={data} handleRemoveItems={handleRemoveItems} />
            </div>
        </div>
    )
}
