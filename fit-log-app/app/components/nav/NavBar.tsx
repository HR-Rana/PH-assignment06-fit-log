
"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import logo from '@/public/assets/logo.png'
import { DataContextProvider } from '@/app/Context/DataContext'
import { FaBars } from "react-icons/fa";

export default function NavBar() {
    const { save, todaysPlan } = useContext(DataContextProvider);




    const NavItems = [
        {

            name: "workout",
            path: "/"
        },
        {
            name: "my plan",
            path: "/my-plan"
        }
    ]

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FaBars className='text-xl' />
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                NavItems.map((items) => {
                                    return (
                                        <li key={items.name} className='text-md leading-6'>
                                            <Link href={items.path} >{items.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <Link href={'/'} className="btn btn-ghost flex items-center gap-6 text-xl max-w-full">
                        <Image src={logo} width={35} height={30} alt='fit-log' />
                        <h3 className='text-white uppercase font-semibold'>FitLog</h3>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            NavItems.map((items) => {
                                return (
                                    <li key={items.name}>
                                        <Link href={items.path} >{items.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <Link href={"/my-plan"} className="cursor-pointer">
                        Plan <div className="badge badge-sm p-2 rounded-full border-[{1px}] bg-lime-400 font-bold text-black  border-gray-700">{todaysPlan.length}</div>
                    </Link>

                    <Link href={'/my-plan'} className="cursor-pointer">
                        Sved <div className="badge badge-sm p-2 rounded-full border-[{1px}]  border-gray-700 ">{save.length}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
