const mongoose = require('mongoose')

const producSchema = mongoose.Schema({
    name: String,
    availability: Boolean,
    city:String,
    gender:String,
    image:String,
    type:String,
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
})

exports.Product = mongoose.model('Product', producSchema)