"use client";

import React, { useContext, useState } from "react";
import TodaysPlanTabs from "./planTabs/todaysPlan";
import PlanCardItems from "./planCardsItems/PlanCardItems";
import { DataContextProvider } from "@/app/Context/DataContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";



export default function PlanCardDisplayContainer({ tabs, setTabs }) {
    const context = useContext(DataContextProvider);

    if (!context) {
        throw new Error("DataContextProvider is missing");
    }

    const { todaysPlan, save } = context;




    const [sortBy, setSortBy] = useState<
        "rating" | "duration" | "calories"
    >("rating");

    // Active tab-এর data
    const displayData = tabs ? todaysPlan : save;

    // Active tab-এর data sort করা হচ্ছে
    const sortedData = [...displayData].sort((a, b) => {
        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        if (sortBy === "duration") {
            return b.duration - a.duration;
        }

        if (sortBy === "calories") {
            return b.caloriesBurned - a.caloriesBurned;
        }

        return 0;
    });

    return (
        <div>


            <div className="plan-teb-bar flex justify-between items-center">

                {/* Today's Plan / Saved */}
                <div className="left-tabs">
                    <TodaysPlanTabs
                        tabs={tabs}
                        setTabs={setTabs}
                    />
                </div>

                {/* Sorting */}
                <div className="right-site-sorting flex items-center gap-3">

                    <p className="mt-2">
                        Sort by
                    </p>

                    <details className="relative group">

                        <summary
                            className="
                list-none
                cursor-pointer
                flex
                items-center
                gap-1
                px-4
                py-2
                border-2
                border-gray-600
                rounded-lg
                transition-all
                duration-200
                hover:border-lime-400
                hover:text-lime-400
                select-none
              "
                        >
                            <span>
                                {sortBy === "rating" && "Rating"}
                                {sortBy === "duration" && "Duration"}
                                {sortBy === "calories" && "Calories"}
                            </span>

                            <RiArrowDropDownLine
                                className="
                  text-2xl
                  transition-transform
                  duration-200
                  group-open:rotate-180
                "
                            />
                        </summary>

                        {/* Dropdown */}
                        <div
                            className="
                absolute
                right-0
                top-full
                z-50
                mt-2
                min-w-[180px]
                overflow-hidden
                rounded-xl
                border-2
                border-gray-600
                bg-gray-800
                shadow-xl
              "
                        >

                            {/* Rating */}
                            <button
                                onClick={() => setSortBy("rating")}
                                className={`
                  block
                  w-full
                  px-4
                  py-3
                  text-left
                  transition-all
                  hover:bg-gray-700
                  hover:text-lime-400
                  ${sortBy === "rating"
                                        ? "bg-gray-700 text-lime-400"
                                        : ""
                                    }
                `}
                            >
                                Rating
                            </button>

                            {/* Duration */}
                            <button
                                onClick={() => setSortBy("duration")}
                                className={`
                  block
                  w-full
                  px-4
                  py-3
                  text-left
                  transition-all
                  hover:bg-gray-700
                  hover:text-lime-400
                  ${sortBy === "duration"
                                        ? "bg-gray-700 text-lime-400"
                                        : ""
                                    }
                `}
                            >
                                Duration
                            </button>

                            {/* Calories */}
                            <button
                                onClick={() => setSortBy("calories")}
                                className={`
                  block
                  w-full
                  px-4
                  py-3
                  text-left
                  transition-all
                  hover:bg-gray-700
                  hover:text-lime-400
                  ${sortBy === "calories"
                                        ? "bg-gray-700 text-lime-400"
                                        : ""
                                    }
                `}
                            >
                                Calories
                            </button>

                        </div>
                    </details>
                </div>
            </div>


            {/* ================= CARDS ================= */}
            <div className="cards-displays transition-all">

                {sortedData.length > 0 ? (

                    sortedData.map((items: IDatatype) => (
                        <div
                            className="
                card-container
                border-2
                border-gray-600
                rounded-xl
                py-2
                my-5
              "
                            key={items.id}
                        >
                            <PlanCardItems
                                data={items}
                                removeFrom={
                                    tabs
                                        ? "todaysPlan"
                                        : "save"
                                }
                            />
                        </div>
                    ))

                ) : (

                    <div
                        className="
              border-2
              border-gray-700
              rounded-2xl
              py-15
              px-5
              my-10
            "
                    >
                        <div className="flex flex-col items-center text-center">

                            <h4 className="text-4xl mb-3 uppercase font-semibold">
                                NOTHING HERE YET
                            </h4>

                            <p>
                                Browse the library and add a lift to get today moving.
                            </p>

                            <button
                                className="
                  bg-lime-400
                  text-black
                  font-semibold
                  rounded-xl
                  mt-8
                  py-4
                  px-7
                  hover:bg-lime-300
                "
                            >
                                <Link href="/">
                                    Go to workouts
                                </Link>
                            </button>

                        </div>
                    </div>

                )}

            </div>
        </div>
    );
}