'use strict';
var React = require('react');

module.exports = React.createClass({
	componentWillMount: function() {
		$(document).ready(function(){
			$('.parallax').parallax();
		});
	},
	render: function() {
		return (
			<div>
				<div className="parallax-container">
					<div className="parallax"><img src="./images/stockPitcher.jpg"/></div>
				</div>
				<div className="section white">
					<div className="row container">
						<h2 className="header">DFW ArmCare</h2>
						<p className="grey-text text-darken-3 lighten-3">
							We build champions with key techniques and fundamental stregth and conditioning.
						</p>
					</div>
				</div>
				<div className="parallax-container">
					<div className="parallax"><img src="./images/stockBat.jpg"/></div>
				</div>
			</div>
		)
	}
})