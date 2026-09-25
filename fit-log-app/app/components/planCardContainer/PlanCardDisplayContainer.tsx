"use client"

import React, { useContext, useEffect, useState } from 'react'
import TodaysPlanTabs from './planTabs/todaysPlan'
import PlanCardItems from './planCardsItems/PlanCardItems'
import { DataContextProvider } from '@/app/Context/DataContext'
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link'

type RemoveFrom = "todaysPlan" | "save";

export default function PlanCardDisplayContainer() {
    const { todaysPlan, setTodaysPlan, save } = useContext(DataContextProvider)
    const [filter, setFilter] = useState("duration");
    const [tabs, setTabs] = useState(true)
    const displayData = tabs ? todaysPlan : save;




    return (
        <div>
            <div className="plan-teb-bar flex justify-between">
                <div className="left-tabs">
                    <TodaysPlanTabs tabs={tabs} setTabs={setTabs} />
                </div>
                <div className="right-site-sorting flex gap-3 ">
                    <p className='mt-2'>Sort by</p>
                    <div className="relative">
                        <details className="relative">
                            <summary className="px-4 py-2 border-2 flex justify-between border-gray-700 rounded-lg cursor-pointer list-none ">
                                <span>Duration</span> <RiArrowDropDownLine className='text-2xl' />
                            </summary>

                            <div className="absolute top-full left-0 z-50 mt-2 w-full min-w-[150px] bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                                <div className="cursor-pointer px-4 py-2 hover:bg-gray-600">
                                    Minutes
                                </div>

                                <div className="cursor-pointer px-4 py-2 hover:bg-gray-600">
                                    Calories
                                </div>

                                <div className="cursor-pointer px-4 py-2 hover:bg-gray-600">
                                    Rating
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
            <div className="cards-displays transition-all ">
                {displayData.length > 0 ?
                    displayData.map((items: IDatatype, i: number) => {
                        return (
                            <div
                                className="card-container border-2 border-gray-600 rounded-xl py-2 my-5"
                                key={i}
                            >
                                <PlanCardItems data={items} removeFrom={tabs ? "todaysPlan" : "save"} />
                            </div>
                        );
                    }) :
                    <div className='border-2 border-gray-700 rounded-2xl py-15 px-5 my-10'>
                        <div className="flex flex-col items-center">
                            <h4 className='text-4xl mb-3 uppercase font-semibold'>NOTHING HERE YET</h4>
                            <p>Browse the library and add a lift to get today moving.</p>
                            <button className='bg-lime-400 text-black font-semibold rounded-xl mt-8 py-4 px-7'><Link href={'/workout'} > Go to workouts</Link></button>
                        </div>
                    </div>

                }
            </div>
        </div>
    )
}
//  <div>
//                             <h4>NOTHING HERE YET</h4>
//                             <p>Browse the library and add a lift to get today moving.</p>
//                             <button>Go to workouts</button>
//                         </div>
