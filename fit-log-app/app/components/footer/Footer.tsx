import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/logo.png'

export default function Footer() {
    return (
        <div className='flex justify-between container mx-auto py-5 '>
            <Image src={logo} width={50} height={40} alt='logo'></Image>
            <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    )
}
