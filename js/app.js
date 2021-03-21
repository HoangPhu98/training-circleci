const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

const host = process.env.NODE_HOST || '0.0.0.0'
const port = process.env.NODE_PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello JS\'s World!')
})

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})