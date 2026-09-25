"use client"

import React, { useContext } from 'react'
import TodaysPlanTabs from './planTabs/todaysPlan'
import PlanCardItems from './planCardsItems/PlanCardItems'
import { DataContextProvider } from '@/app/Context/DataContext'
import { RiArrowDropDownLine } from "react-icons/ri";


export default function PlanCardDisplayContainer() {
    const { todaysPlan } = useContext(DataContextProvider)

    console.log(todaysPlan)
    return (
        <div>
            <div className="plan-teb-bar flex justify-between">
                <div className="left-tabs">
                    <TodaysPlanTabs />
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
            <div className="cards-displays">
                {
                    todaysPlan.map((items: IDatatype) => {
                        return (
                            <div className="card-container border-2 border-gray-800 rounded-xl py-5" key={items.id}>
                                <PlanCardItems data={items} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
