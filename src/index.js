const page = require('page');

const main = document.getElementById('main-container')

page('/', function (ctx, next) {
	main.innerHTML = 'Home <a href="/signup">Signup</a>';
})

page('/signup', function (ctx, next) {
	main.innerHTML = 'Signup <a href="/">Home</a>';
})

page();