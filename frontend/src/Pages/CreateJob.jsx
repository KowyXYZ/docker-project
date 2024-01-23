import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateJob() {
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [salary, setSalary] = useState(0)
  const [lasts, setLasts] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5000/addJob', {name, salary, lasts})
    .then(res => console.log(res))
    .catch(err => console.log(err))

    setName('')
    setSalary(0)
    setLasts('')
    
    navigate("/");

  }

  return (
    <div className='flex flex-col justify-center items-center gap-10'>

        <p className='text-[28px] font-semibold uppercase'>Create Job</p>


            <form className='flex gap-5 flex-col justify-center items-center' onSubmit={(e) => submitHandler(e)}>
                <input className='p-2 rounded-2xl outline-none' type="text" placeholder='Job Name' onChange={(e) => setName(e.target.value)}/>
                <input className='p-2 rounded-2xl outline-none' type="text" placeholder='Job Salary' onChange={(e) => setSalary(e.target.value)}/>
                <input className='p-2 rounded-2xl outline-none' type="text" placeholder='Lasts Until' onChange={(e) => setLasts(e.target.value)}/>
                <button className='bg-[violet] p-2 px-8 w-full rounded-2xl '>Submit</button>
            </form>
    </div>
  )
}

export default CreateJob