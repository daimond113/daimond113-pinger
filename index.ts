import * as express from 'express'
import axios from 'axios'
const app = express()

setInterval(() => {
	const items = process.env.URLS.split(/ +/)
	for (const file of items) {
		axios.head(file).catch((e) => {
			console.log(e)
		})
	}
}, 1800000)

app.get('/', (req, res) => {
	res.status(302).redirect('https://daimond113.com')
})

app.listen(3000, () => {
	console.log('Application is listening on port 3000')
})
