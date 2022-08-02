const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    date:{
        type: String,
        required: true,
    },
    std:{
        type: String,
        required: true,
    },
    sub:{
        type: String,
        required: true,
    },
    medium:{
        type: String,
        required: true,
    },
    board:{
        type: String,
        required: true,
    },
    chap:{
        type: String,
        required: true,
    },
    totalMarks: {
        type: String,
        reqduired: true,
    }
})

module.exports = mongoose.model('Tests',testSchema)