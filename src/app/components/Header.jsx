'use client'
import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='fixed w-full z-50 bg-white/20 backdrop-blur-0'>
            <nav className='flex justify-between items-center px-8 h-[8vh] '>
                <div className=" flex ">
                    <h1 className='text-xl font-semibold'>Deelolade</h1>
                </div>
                <div className=" flex gap-8 items-center">
                    <ul className='flex gap-8 text-sm font-medium'>
                        <li>Overview</li>
                        <li>Amenities</li>
                        <li>Location</li>
                    </ul>
                    <div className=" flex gap-6">
                        <button className='text-lg text-blue-950 bg-white border border-blue-950 font-normal px-3 py-2 rounded-md'>Set up your business</button>
                        <button className='text-lg bg-blue-950 text-white font-normal px-3 py-2 rounded-md'>Request Call back</button>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header
