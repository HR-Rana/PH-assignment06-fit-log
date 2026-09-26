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





    return (
        <div className="container mx-auto py-15">
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">

                {/* Left Image */}
                <div className="left-image w-full lg:w-[45%] xl:w-[48%] h-fit shrink-0">
                    <Image
                        className="w-full h-auto rounded-4xl object-contain"
                        src={details.image}
                        alt={details.name}
                        width={1000}
                        height={1000}
                    />
                </div>

                {/* Right Content */}
                <div className="right-content w-full lg:flex-1 min-w-0">

                    <h4 className="text-3xl sm:text-4xl uppercase font-bold">
                        {details.name}
                    </h4>

                    <p className="text-gray-400 py-3 w-full lg:w-4/5">
                        {details.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="flex flex-wrap gap-2">
                        {details.muscleGroups.map((data: string, i: number) => (
                            <p
                                className="px-3 py-1 text-sm font-semibold bg-lime-400 rounded-full text-black"
                                key={i}
                            >
                                {data}
                            </p>
                        ))}
                    </div>

                    {/* Details */}
                    <div className="bg-gray-900 rounded-4xl border border-gray-500 my-10 lg:my-15 overflow-hidden">
                        <ul
                            className="
                        leading-12
                        [&>li]:flex
                        [&>li]:justify-between
                        [&>li]:gap-5
                        [&>li]:border-b-2
                        [&>li]:border-gray-800
                        [&>li]:px-5
                        sm:[&>li]:px-10
                        [&>li]:uppercase
                        [&>li:last-child]:border-0
                    "
                        >
                            <li>
                                <span>Equipment</span>
                                <span>{details.equipment}</span>
                            </li>

                            <li>
                                <span>Difficulty</span>
                                <span>{details.difficulty}</span>
                            </li>

                            <li>
                                <span>Duration</span>
                                <span>{details.duration}</span>
                            </li>

                            <li>
                                <span>Calories Burned</span>
                                <span>{details.caloriesBurned}</span>
                            </li>

                            <li>
                                <span>Sets</span>
                                <span>{details.sets}</span>
                            </li>

                            <li>
                                <span>Reps</span>
                                <span>{details.reps}</span>
                            </li>

                            <li>
                                <span>Rating</span>
                                <span>{details.rating}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Instructions */}
                    <h5 className="uppercase font-bold mb-3">
                        Instructions:
                    </h5>

                    <ol className="list-decimal leading-8 text-gray-400 pl-6 pt-2">
                        {details.instructions.map((data: string, i: number) => (
                            <li className="px-2" key={i}>
                                {data}
                            </li>
                        ))}
                    </ol>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5 pt-10">
                        <AddTodaysPlan data={details} />
                        <SaveforLater data={details} />
                    </div>
                </div>
            </div>
        </div>


    )
}
