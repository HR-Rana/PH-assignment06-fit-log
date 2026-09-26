"use client"

import React, { useContext, useState } from 'react'
import TodaysPlanTabs from '../components/planCardContainer/planTabs/todaysPlan'
import PlanCardDisplayContainer from '../components/planCardContainer/PlanCardDisplayContainer'
import { DataPromise } from '../page'
import { DataContextProvider } from '../Context/DataContext';

export default function MyPlanPage() {

    const { save, setSave, todaysPlan, setTodaysPlan } = useContext(DataContextProvider)!;

    // const allPlanData = [...todaysPlan, ...save]


    const [tabs, setTabs] = useState(true);

    const displayData = tabs ? todaysPlan : save;
    const TotalMinutes = displayData.reduce((total: number, items: IDatatype) => total + items.duration, 0)
    const totalChalories = displayData.reduce((total: number, data: IDatatype) => total + data.caloriesBurned, 0)






    return (
        <div className='container mx-auto'>
            <div className="title mt-10 leading-7 font-bold">
                <h3 className='text-[18px] md:text-3xl text-white uppercase '>MY PLAN</h3>
                <p className='text-gray-500 mt-2'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className="plan-heading [&>div>h4]:text-lime-300 [&>div>h4]:text-3xl [&>div>h4]:font-semibold [&>div>h4]:mt-2  [&>h4]:p-1 flex justify-between my-7 bg-gray-900 py-10 rounded-3xl px-10">
                <div className="">
                    <p>Exercises</p>
                    <h4 >{displayData.length}</h4>
                </div>
                <div>
                    <p>Minutes</p>
                    <h4 >{TotalMinutes}</h4>
                </div>
                <div>
                    <p>Calories</p>
                    <h4 >{totalChalories}</h4>
                </div>
            </div>
            <div className="plan-tabs-container">
                <PlanCardDisplayContainer tabs={tabs}
                    setTabs={setTabs} />
            </div>
        </div>
    )
}
