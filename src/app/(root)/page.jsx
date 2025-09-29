'use client'
import React from 'react'
import Header from '../components/Header'
import Herosection from '../components/Herosection'
import SmoothScroll from '../components/SmoothScroll'

const page = () => {
  return (
    <div>
      <SmoothScroll>
        <Header />
        <Herosection />
      </SmoothScroll>
    </div>
  )
}

export default page
