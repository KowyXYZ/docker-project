import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Global/Navbar'

function RootLayout() {
  return (
    <div className='flex flex-col justify-center items-center container mx-auto'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default RootLayout