const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const JobModel = require('./Models/job')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/jobboard')

app.get('/getJobs', (req, res) => {
    JobModel.find({})
    .then(jobs => res.json(jobs))
    .catch(err => console.error(err))
}) 

app.post('/addJob', (req, res) => {
    JobModel.create(req.body)
    .then(jobs => res.json(jobs))
    .catch(err => console.error(err))
})

app.delete('/deleteJob/:id', (req, res) => {
    const id = req.params.id
    JobModel.findByIdAndDelete({_id:id})
    .then(jobs => res.json(jobs))
    .catch(err => console.error(err))
})



app.listen(5000, console.log('Connection on port 5000 is established!'))