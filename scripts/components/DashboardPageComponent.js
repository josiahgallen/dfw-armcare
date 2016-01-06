'use strict';
var React = require('react');

module.exports = React.createClass({
	componentDidMount: function() {
		$(document).ready(function(){
			$('.collapsible').collapsible();
		});
	},
	render: function() {
		return (
			<div>
				<h1>Admin Tools</h1>
				<div className="container">
					<ul className="collapsible popout" data-collapsible="accordion">
						<li>
    					  	<div className="collapsible-header"><i className="material-icons">perm_identity</i>Athlete Records</div>
    					  	<div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    					</li>
						<li>
							<div className="collapsible-header"><i className="material-icons">video_library</i>Manage Video Access</div>
							<div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
})