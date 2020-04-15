let express = require('express')
let router = express.Router()
let db = require('../models')

router.get('/', (req,res) => {
	res.send('Players Page')
	// db.players.findAll()
	// .then((players) => {
	// res.render('players/index', {players})
	// })
	// .catch((err) => {
	// console.log('Error', err)
	// res.render('error')
	// })	
})

router.get('/new', (req, res) => {
	res.send('New Players Page')
	// res.render('players/new')
})

router.post('/new', (req, res) => {
	res.send('Posting a New Player')
	// db.players.create(req.body)
	// .then(() => {
	// 	res.redirect('/players')
	// })
	// .catch((err) => {
	// console.log('Error', err)
	// res.render('error')
	// })
})

router.get('/:id', (req, res) => {
	res.send('Specific Player Page')
})



module.exports = router