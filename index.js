const express = require('express')
const axios = require('axios')
const app = express()

setInterval(() => {
  const items = process.env.URLs.split(',')
  for (const file of items) {
    axios.head(items)
  }
}, 1800000)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000)