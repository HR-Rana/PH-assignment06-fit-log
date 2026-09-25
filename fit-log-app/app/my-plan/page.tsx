import React from 'react'

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
            <div className="plan-teb-bar flex justify-between">
                <div className="left-tabs">
                    <button className='btn'>Today's Plan</button>
                    <button className='btn'>Saved</button>
                </div>
                <div className="right-site-sorting flex gap-3 ">
                    <p className='mt-2'>Sort by</p>
                    <details className='[&>option]:my-2 '>
                        <summary className='px-4 py-2 border-2 border-gray-700 rounded-lg '>Duration</summary>
                        <option className="cursor-pointer py-2" value="">Minutes</option>
                        <option className="cursor-pointer py-2" value="">Chalories</option>
                        <option className="cursor-pointer py-2" value="">Rating</option>
                    </details>
                </div>
            </div>
        </div>
    )
}
