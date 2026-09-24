import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/assets/logo.png'


export default function NavBar() {


    const NavItems = [
        {

            name: "workout",
            path: "/workout"
        },
        {
            name: "my plan",
            path: "my-Plan"
        }
    ]

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <Image src={logo} width={80} height={40} alt='logo'></Image>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
                <div className="navbar-end">
                    <button className="btn">
                        Inbox <div className="badge badge-sm">+99</div>
                    </button>

                    <button className="btn">
                        Inbox <div className="badge badge-sm badge-secondary">+99</div>
                    </button>
                </div>
            </div>
        </div>
    )
}
