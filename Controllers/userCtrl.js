const User = require('../models/user')


const getAll = async(req, res) => {

    try {
        const user = await User.find()

        if (!user) {
            return res.status(400).json({ message: "no user found" })

        }

        return res.status(200).json(user)

    } catch (err) {
        return res.status(500).json({ message: "server error" })
    }
}

const getSingle = async(req, res) => {

    try {
        const user = await User.findById(req.params.id)

        if (!user) {
            return res.status(400).json({ message: "no user found" })

        }

        return res.status(200).json(user)

    } catch (err) {
        return res.status(500).json({ message: "server error" })
    }
}

const delUser = async(req, res) => {

    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(400).json({ message: "no user found" })

        }

        return res.status(200).json({ message: "user deleted successfully" })

    } catch (err) {
        return res.status(500).json({ message: "server error" })
    }
}




module.exports = {
    getAll,
    delUser,
    getSingle
}