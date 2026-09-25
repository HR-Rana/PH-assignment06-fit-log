import Image from 'next/image'
import React from 'react'
import { IoTimeSharp } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import ActionButtons from '../actionButtons/ActionButtons';



export default function PlanCardItems({ data }: { data: IDatatype }) {



    return (
        <div className='py-3'>
            <div className="left-content flex n">
                <div>
                    <Image src={data.image} width={100} height={30} alt={data.name} />
                </div>
                <div>
                    <h4 className='text-2xl uppercase font-semibold'>{data.name}</h4>
                    <p>{data.equipment}</p>

                    <div className="card-footer border-t-[{1}px] text-gray-500 border-gray-800 py-5 flex justify-between">
                        <p className='flex gap-2 items-center'><span><IoTimeSharp /></span> {data.duration}</p>
                        <p className='flex gap-2 items-center'><span><FaFireAlt /></span> {data.caloriesBurned}</p>
                        <p className='flex gap-2 items-center'><span><FaStar /></span> {data.rating}</p>
                    </div>
                </div>
            </div>
            <div className="right-content">
                <ActionButtons data={data} />
            </div>
        </div>
    )
}
