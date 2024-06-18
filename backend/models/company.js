const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
    name: String,
    desc: String,
    director:String,
    location: String,
    joinedDate: String,
    contactNo: Number,
})

exports.Company = mongoose.model('Company', companySchema)
