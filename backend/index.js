const express = require('express')
const app = express()
const bodyParer = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const authJwt = require('./helpers/jwt')
require('dotenv/config')

app.use(cors())
app.options('*', cors())

const api = process.env.API_URL
const db_url = process.env.DB_URL

const productsRouter = require('./routers/product')
const companyRouter = require('./routers/company')
const userRouter = require('./routers/user')

//Middlewares
app.use(bodyParer.json())
app.use(morgan('tiny'))
// app.use(authJwt)

//Routers
app.use(`${api}/product`, productsRouter)
app.use(`${api}/company`, companyRouter)
app.use(`${api}/user`, userRouter)

//Database Connection
mongoose
    .connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'ecommerce',
    })
    .then(() => {
        console.log('Database is connected')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
})
