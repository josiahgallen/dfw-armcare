'use strict'
var React = require('react');

module.exports = React.createClass({
	componentWillMount: function() {
		$( document ).ready(function(){
			$('.button-collapse').sideNav();
		})
	},
	render: function() {
		return (
			<div className="nav-wrapper">
				<a href="#!" className="brand-logo"><img className="navLogo" src="./images/0001.jpg"/></a>
				<a href="#" dataActivates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
				<ul className="right hide-on-med-and-down">
					<li><a href="sass.html">Sass</a></li>
					<li><a href="badges.html">Components</a></li>
					<li><a href="collapsible.html">Javascript</a></li>
					<li><a href="mobile.html">Mobile</a></li>
				</ul>
				<ul className="side-nav" id="mobile-demo">
					<li><a href="sass.html">Sass</a></li>
					<li><a href="badges.html">Components</a></li>
					<li><a href="collapsible.html">Javascript</a></li>
					<li><a href="mobile.html">Mobile</a></li>
				</ul>
			</div>
		)
	}
})