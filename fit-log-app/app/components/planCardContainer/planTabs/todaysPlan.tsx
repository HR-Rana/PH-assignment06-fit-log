
"use client"
import React from 'react'

export default function TodaysPlanTabs({ tabs, setTabs }) {

    return (
        <div className="flex gap-2 px-3 py-3 bg-gray-800">
            <button
                onClick={() => setTabs(true)}
                className={`px-3 py-3 ${tabs
                    ? "bg-lime-400 rounded-xl text-black"
                    : "bg-gray-800 text-white"
                    }`}
            >
                Today's Plan
            </button>

            <button
                onClick={() => setTabs(false)}
                className={`px-3 py-3 ${!tabs
                    ? "bg-lime-400 rounded-xl text-black"
                    : "bg-gray-800 text-white"
                    }`}
            >
                Saved
            </button>
        </div>

    )
}
