const React = require('react')

const About = require('./pages/about')
const Home = require('./pages/home')


const App = React.createClass({
	render() {
		return (
			<div>
				<About />
				<Home />
			</div>
		)
	}
})

module.exports = App
