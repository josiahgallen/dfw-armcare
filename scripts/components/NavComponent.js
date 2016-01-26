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
			<div>
				<div className="nav-wrapper">
					<a href="#" className="brand-logo"><img className="navLogo" src="./images/0001.jpg"/></a>
					<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
					<ul className="right hide-on-med-and-down">
						<li><a href="https://dfwarmcare.teamapp.com/events" target="blank">Calendar</a></li>
						<li><a className="modal-trigger waves-effect waves-light" href="#videoModal">Videos</a></li>
					</ul>
					<ul className="side-nav" id="mobile-demo">
						<li><a href="#calendar">Calendar</a></li>
						<li><a href="#videos">Videos</a></li>
					</ul>
				</div>
				<div id="videoModal" className="modal modal-fixed-footer">
					<div className="modal-content">
						<h4>Modal Header</h4>
						<p>A bunch of text</p>
					</div>
					<div className="modal-footer">
						<a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
					</div>
				</div>
			</div>
		)
	},
	onLogin: function() {
		console.log('videos!')
	}
})