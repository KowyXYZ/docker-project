import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between mx-auto container py-12 text-[20px]'>

        <div>
            <p className='bg-[violet] p-2 px-8 rounded-2xl '>Joobily</p>
        </div>

        <div className='gap-12 flex text-[18px]'>
            <Link to='/'>Home</Link>
            <Link to='/add-job'>Add Job</Link>
        </div>
    </div>
  )
}

export default Navbar