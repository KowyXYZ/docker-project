const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    lasts: String
})

const JobModel = mongoose.model('jobs', jobSchema)
module.exports = JobModel