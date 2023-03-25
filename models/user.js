const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    status: {
        type: Boolean,
        default: false
    },
    passwordResetToken: String,
    refreshToken: String

}, {
    timestamps: true
})


module.exports = mongoose.model("User", userSchema)