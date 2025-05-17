const { name } = require('ejs')
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        name:
        {
            type: String,
            require
        },

        email:
        {
            type: String,
            require
        },

        password:
        {
            type: String,
            require
        },

        role:
        {
            type: String,
            require
        },

        name:
        {
            type: String,
            default: "students"
        },
    })


const studentsmodel = mongoose.model('students', stusentsSchema)
module.exports = studentsmodel