console.log('Connected')

document.addEventListener('DOMContentLoaded',  () => {
	console.log('DOM Content was loaded')
	document.getElementById('delete-form').addEventListener('submit', (e) => {
		console.log('You clicked delete!')
		if(cofirm('Are you sure?')) {
			return true
		}
		else {
			e.preventDefault()
			return false
		}
	})

})