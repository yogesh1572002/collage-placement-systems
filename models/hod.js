//const { name } = require('ejs')
const mongoose = require('mongoose');

const hodchema = mongoose.Schema(
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
            default: "hod"
        },
    })

const hodmodel = mongoose.model('hod', hodSchema)
module.exports = hodmodel