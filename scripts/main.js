'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var HomePageComponent = require('./components/HomePageComponent');
var NavComponent = require('./components/NavComponent');
var FooterComponent = require('./components/FooterComponent');
var EventsPageComponent = require('./components/EventsPageComponent');
var VideosPageComponent = require('./components/VideosPageComponent');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'calendar': 'events',
		'videos': 'videos'
	},
	home: function() {
		ReactDOM.render(<HomePageComponent router={r}/>,document.getElementById('app'));
	},
	events: function() {
		ReactDOM.render(<EventsPageComponent router={r}/>,document.getElementById('app'));
	},
	videos: function() {
		ReactDOM.render(<VideosPageComponent router={r}/>,document.getElementById('app'));
	}
})

var r = new Router();
Backbone.history.start();

ReactDOM.render(
		<NavComponent router={r}/>,
		document.getElementById('nav')
	);
ReactDOM.render(
		<FooterComponent router={r}/>,
		document.getElementById('footer')
	);