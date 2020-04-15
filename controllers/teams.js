let express = require('express')
let router = express.Router()
let db = require('../models')

router.get('/', (req, res) => {
	res.send('Team Page')
})

router.get('/new', (req, res) => {
	res.send('New Team Page')
})

router.post('/new', (req, res) => {
	res.send('Posting a New Team')
})

router.get('/:id', (req, res) => {
	res.send('Specific Team Page')
})

module.exports = router