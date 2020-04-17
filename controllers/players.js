let express = require('express')
let router = express.Router()
let db = require('../models')

router.get('/', (req,res) => {
	db.player.findAll()
	.then((players) => {
	res.render('players/index', {players})
	})
	.catch((err) => {
	console.log('Error', err)
	res.render('error')
	})	
})

router.post('/new', (req, res) => {
	db.player.create(req.body)
	.then(() => {
	res.redirect('/players')
	})
	.catch((err) => {
	console.log('Error', err)
	res.render('error')
	})
})

router.get('/new', (req, res) => {
	db.team.findAll()
	.then((team) => {
	res.render('players/new', { team })
	})
	
})

router.get('/:id', (req, res) => {
	db.player.findOne({
		where:{id: req.params.id },
		include: [ db.team ]
	})
	.then((player) => {
		res.render('players/show', {player})
	})
	.catch((err) => {
		console.log('Error', err)
		res.render('error')
	})

})

router.delete('/:id', (req, res) => {
	db.player.destroy( {
		where: {id: req.params.id}
	})
	.then(() => {
		res.redirect('/players')
	})
	.catch((err) => {
		console.log('Error in DELETE router', err)
		res.render('error')
	})
})

module.exports = router