const mongoose = require('mongoose');

const authschema = mongoose.Schema({


    email: { type: String },
    password: { type: String }
})

const authmodel = mongoose.model('authData', authschema)
module.exports = authmodel