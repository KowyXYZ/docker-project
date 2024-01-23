import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Home() {

  const [Jobs, setJobs] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/getJobs')
    .then(res => setJobs(res.data))
    .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/deleteJob/' + id )
    .then(res => {
      window.location.reload()
    })
    .catch(err => console.log(err))
  }
  
  return (
    <div className='justify-center items-center flex flex-col gap-10'>

        <p className='text-[28px] font-semibold uppercase'>All Jobs</p>

        <div className='flex flex-wrap gap-8'>
            {Jobs?.map((job, index) => {
              return(
                <div key={index} className='border-2 p-5 flex justify-center items-start text-start flex-col gap-2'>
                  <div className='flex gap-8'>
                  <p>JobName: {job.name}</p>
                  <p onClick={() => handleDelete(job._id)}>X</p>
                  </div>
                  <p>Salary: {job.salary}$</p>
                  <p>LastsUntil: {job.lasts}</p>
            
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Home