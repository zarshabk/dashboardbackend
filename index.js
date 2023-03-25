const mongoose = require('mongoose')

const express = require('express')

const app = express()

require('dotenv').config()

const cors = require('cors')

app.use(express.json())

app.use(cors())

const port = process.env.PORT || 500

const auth = require('./routes/authRoute')
const user = require('./routes/userRoute')



app.use('/uploads/users', express.static('./uploads/users'))
mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected")

    app.listen(port, () => {
        console.log(`server is running at http://localhost:${port}`)
    })
}).catch(err => {
    console.log(err)
})


app.use('/api/auth', auth)
app.use('/api/user', user)