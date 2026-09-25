import Image from 'next/image'
import React from 'react'
import { IoTimeSharp } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


export default function WorkoutCard({ data }: { data: IDatatype }) {
    return (
        <div className='bg-gray-950 rounded-3xl border-2 border-gray-900'>
            <div className="card-header relative  rounded-t-3xl overflow-hidden w-full">
                <Image src={data.image} width={350} className='object-cover w-full h-70 overflow-hidden' height={100} alt={data.name} />

            </div>

            <div className="card-body py-7 px-7">
                <div className='leading-7'>
                    <div className="flex flex-wrap gap-4 w-fit max-w-full py-3">
                        {data.muscleGroups.map((items: string, i: number) => (
                            <p
                                key={i}
                                className="bg-lime-400 text-black w-fit! rounded-full px-3! py-1 text-sm"
                            >
                                {items}
                            </p>
                        ))}
                    </div>

                    <h3 className='text-xl font-bold uppercase py-2'>{data.name}</h3>

                    {/* {data.equipment.map((items: string, i: number) => (
                    <p key={i}>{items}</p>
                ))} */}
                    <p className='pb-3 text-gray-400'>{data.equipment}</p>
                </div>
                <div className="card-footer border-t-[{1}px] text-gray-500 border-gray-800 py-5 flex justify-between">
                    <p className='flex gap-2 items-center'><span><IoTimeSharp /></span> {data.duration}</p>
                    <p className='flex gap-2 items-center'><span><FaFireAlt /></span> {data.caloriesBurned}</p>
                    <p className='flex gap-2 items-center'><span><FaStar /></span> {data.rating}</p>
                </div>
            </div>

        </div>
    )
}
