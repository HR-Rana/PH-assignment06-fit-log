import AddTodaysPlan from '@/app/components/buttons/addTodaysPlan';
import SaveforLater from '@/app/components/buttons/SaveforLater';
import { DataPromise } from '@/app/page';
import Image from 'next/image';
import React from 'react'

interface ParamsProms {
    params: Promise<{ id: String }>
}

export default async function FitlogDetailsPage({ params }: ParamsProms) {
    const { id } = await params;

    const data = await DataPromise();
    const details = data.find((items: IDatatype) => items.id === Number(id))
    console.log(details)

    return (
        <div className='container mx-auto py-15'>
            <div className="flex justify-between gap-10">
                <div className="left-image w-full ">
                    <Image
                        className='w-full md:flex-1 h-auto rounded-4xl'
                        src={details.image} width={350} height={700} alt='image' />
                </div>
                <div className="right-content w-[{45}%]">
                    <div className="">
                        <h4 className='text-4xl uppercase font-bold'>{details.name}</h4>
                        <p className='text-gray-400 py-3 w-2/3'>{details.description}</p>
                        <ul className='flex  w-1/3 gap-2 justify-start'>
                            {
                                details.muscleGroups.map((data: string[], i: number) => {
                                    return (
                                        <div className=' gap-2 w-full' key={i}>
                                            <p className='flex gap-3 w-fit px-3 py-1 text-sm font-semibold bg-lime-400 rounded-full text-black' key={i}>{data}</p>

                                        </div>
                                    )
                                })
                            }
                        </ul>
                        <div className="bg-gray-900 rounded-4xl border border-gray-500 my-15 ">
                            <ul className='leading-12  [&>li]:flex
                                [&>li]:justify-between
                                [&>li]:border-b-2
                                [&>li]:border-gray-800
                                [&>li]:px-10
                                [&>li]:uppercase
                                [&>li]n [&>li:last-child]:border-0'>
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
                        <h5 className='uppercase font-bold mb-3'>Instructions :</h5>
                        <ul className='leading-8 text-gray-400 pl-3 pt-2'>
                            {
                                details.instructions.map((data: string[], i: number) => {
                                    return (
                                        <li className='list-decimal px-2' key={i}>{data}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="buttons flex gap-5 pt-10 [&>div>button]:rounded-xl w-3xl">
                        <AddTodaysPlan />
                        <SaveforLater />
                    </div>
                </div>
            </div>

        </div>
    )
}
