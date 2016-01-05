'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h4>Select the video you want to watch from playlist below.</h4>
				<div className="container">
					<div className="video-container">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLeoA0P4gx2uoTR5OG9tMBpVXX0cpx0v_F" frameborder="0" allowfullscreen></iframe>
					</div>
				</div>
			</div>
		)
	}
})