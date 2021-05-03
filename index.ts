const express = require('express')
const axios = require('axios')
const app = express()

setInterval(() => {
	const items = process.env.URLS.split(',')
	for (const file of items) {
		axios.head(file).catch((e) => {
			console.log(e)
		})
	}
}, 1800000)

app.get('/', (req, res) => {
	res.status(301).redirect('https://daimond113.com')
})

app.listen(3000)
