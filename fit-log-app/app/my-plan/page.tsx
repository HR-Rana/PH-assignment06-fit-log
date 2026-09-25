import React from 'react'
import TodaysPlanTabs from '../components/planCardContainer/planTabs/todaysPlan'
import PlanCardDisplayContainer from '../components/planCardContainer/PlanCardDisplayContainer'

export default function MyPlanPage() {
    return (
        <div className='container mx-auto'>
            <div className="title">
                <h3 className='text-3xl text-white uppercase '>MY PLAN</h3>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className="plan-heading [&>div>h4]:text-lime-300 [&>div>h4]:text-3xl [&>div>h4]:font-semibold [&>div>h4]:mt-2  [&>h4]:p-1 flex justify-between my-7 bg-gray-900 py-10 rounded-3xl px-10">
                <div className="">
                    <p>Exercises</p>
                    <h4 >02</h4>
                </div>
                <div>
                    <p>Minutes</p>
                    <h4 >23</h4>
                </div>
                <div>
                    <p>Calories</p>
                    <h4 >190</h4>
                </div>
            </div>
            <div className="plan-tabs-container">
                <PlanCardDisplayContainer />
            </div>
        </div>
    )
}
