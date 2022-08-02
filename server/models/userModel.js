const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        firstname:{
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        std:{
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
        sub:{
            type: Array,
            default:[],
            required: true,
        },
        school:{
            type: String,
            required: true,
        },
        gender:{
            type: String,
            required: true,
        },
        dob:{
            type: String,
            required: true,
        },
        add:{
            type: String,
            required: true,
        },
        contact1:{
            type: String,
            required: true,
        },
        contact2:{
            type: String,
            default: '',
        },
        email:{
            type: String,
            required:true,
        },
        password:{
            type: String,
            required:true,
        },

    }
)

module.exports = mongoose.model('Users',userSchema)