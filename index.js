const PORT = 8000
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// const fetch = require('node-fetch')
require('dotenv').config()

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

// get all the restaurant data
app.get('/burgers', (req, res) => {

    const url = process.env.ENDPOINT

    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'X-Cassandra-Token': process.env.ASTRA_TOKEN
        }
    }

    fetch(url, options)
        .then(response => response.json())
        .then(json => res.json(json))
        .catch(err => console.error('error' + err))

})

function notFound(req, res, next) {
    res.status(404)
    const error = new Error('Page not found')
    next(error)
}

function errorHandler(error, req, res) {
    res.status(error.status || 500)
    res.json({
        message: error.message
    })
}

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))