const mongoose = require('mongoose')

const marksSchema = new mongoose.Schema({
    testId:{
        required: true,
        type: String,
    },
    userId:{
        required: true,
        type: String,
    },
    marks: {
        required: true,
        type: Number,
        default: 0
    },
    userName: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("Marks",marksSchema)