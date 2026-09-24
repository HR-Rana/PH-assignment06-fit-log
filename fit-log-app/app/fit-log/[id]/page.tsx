import { DataPromise } from '@/app/page';
import Image from 'next/image';
import React from 'react'

export default async function FitlogDetailsPage({ params }) {
    const { id } = await params;

    const data = await DataPromise();
    const details = data.find((items: IDatatype) => items.id === Number(id))
    console.log(details)

    return (
        <div className='container mx-auto'>
            <div className="flex justify-between">
                <div className="left-image w-full">
                    <Image
                        className='w-fit'
                        src={details.image} width={350} height={600} alt='image' />
                </div>
                <div className="right-content w-full">
                    <div className="">
                        <h4>{details.name}</h4>
                        <p>{details.description}</p>
                        <ul>
                            {
                                details.muscleGroups.map((data: string[], i: number) => {
                                    return (
                                        <div className='flex gap-2 '>
                                            <p className='flex gap-3 w-fit' key={i}>{data}</p>

                                        </div>
                                    )
                                })
                            }
                        </ul>
                        <div className="bg-gray-800 py-15 rounded-4xl border border-gray-500 my-15 ">
                            <ul className='leading-15  [&>li]:flex
                                [&>li]:justify-between
                                [&>li]:border-b-2
                                [&>li]:border-gray-700
                                [&>li]:px-10
                                [&>li]:uppercase'>
                                <li className=''><span>Equipment</span> <span>{details.equipment}</span></li>
                                <li className=''><span>Difficulty </span> <span>{details.difficulty}</span></li>
                                <li className=''><span>duration </span> <span>{details.duration}</span></li>
                                <li className=''><span>caloriesBurned </span> <span>{details.caloriesBurned}</span></li>
                                <li className=''><span>sets </span> <span>{details.sets}</span></li>
                                <li className=''><span>reps </span> <span>{details.reps}</span></li>
                                <li className=''><span>rating </span> <span>{details.rating}</span></li>
                                {/* <li className='flex justify-between'><span>rating </span> <span>{details.rating}</span></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
