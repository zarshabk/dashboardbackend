const User = require('../models/user')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')


const Register = async(req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.status(400).json({ message: "user already exist with this email" })
        }
        let pass = bcrypt.hashSync(req.body.password)

        let user_new = new User({...req.body, password: pass, image: req.file.filename })

        await user_new.save()

        return res.status(201).json({ message: "user register success" })


    } catch (err) {
        return res.status(500).json({ message: "unexpected error" })
    }
}



const Login = async(req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            return res.status(400).json({ message: "invalid credentails" })
        }
        let pass = bcrypt.compare(req.body.password, user.password)

        if (!pass) {
            return res.status(400).json({ message: "invalid credentails" })

        }


        let token = jwt.sign({ id: user._id, role: user.role }, process.env.KEY, { expiresIn: "2d" })




        return res.status(201).json({ message: "user register success", token: token, id: user._id, role: user.role })


    } catch (err) {
        return res.status(500).json({ message: "unexpected error" })
    }
}








module.exports = {
    Register,
    Login
}