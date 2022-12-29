const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add your name']
    },
    email: {
        type: String,
        required: [true, 'please add an email']
    },
    password: {
        type: String,
        required: [true, 'please add a Password']
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,

    }
}, 
{
    timestamps:true
}

);

module.exports = mongoose.model('User',  userSchema);
// module.exports = User = mongoose.model('user', UserSchema)
