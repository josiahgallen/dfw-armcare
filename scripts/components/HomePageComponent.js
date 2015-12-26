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
    				<div className="parallax"><img src="./images/0001.jpg"/></div>
  				</div>
  				<div className="section white">
    				<div className="row container">
      					<h2 className="header">Parallax</h2>
      					<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
    				</div>
  				</div>
  				<div className="parallax-container">
    				<div className="parallax"><img src="./images/0001.jpg"/></div>
  				</div>
  			</div>
		)
	}
})