'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Admin Tools</h1>
				<div className="container">
					<ul className="collapsible popout" data-collapsible="accordion">
    					<li>
    					  	<div className="collapsible-header"><i className="material-icons">video_library</i>Manage Video Access</div>
    					  	<div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    					</li>
    					<li>
    					  	<div className="collapsible-header"><i className="material-icons">place</i>Second</div>
    					  	<div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    					</li>
    					<li>
    					  	<div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
    					  	<div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    					</li>
  					</ul>
  				</div>
			</div>
		)
	}
})