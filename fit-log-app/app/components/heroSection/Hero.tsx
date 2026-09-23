import React from 'react'
import heroImg from '@/public/assets/banner.png'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className='w-full py-10! px-15 bg-gray-900 rounded-4xl'>
            <div className="flex justify-between items-center">
                <div className="left-text flex flex-col text-left! justify-start! w-[55%] ">
                    <p className='text-lime-400'>WORKOUT LIBRARY</p>
                    <h2 className='text-6xl my-4 font-bold'>TRAIN WITH INTENT. LOG
                        EVERY SET.</h2>
                    <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.</p>
                    <div className="button flex justify-start bg-lime-400 text-black font-bold w-1/3 mt-8 rounded-2xl">

                        <button className='py-3 cursor-pointer px-5 w-3xl '>Browse workout</button>
                    </div>
                </div>
                <div className="right-image">
                    <Image src={heroImg} width={450} height={150} alt="logo"></Image>
                </div>
            </div>
        </div>
    )
}
