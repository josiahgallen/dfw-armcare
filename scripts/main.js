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
var DashboardPageComponent = require('./components/DashboardPageComponent');
var RestrictedPageComponent = require('./components/RestrictedPageComponent');

Parse.initialize('FdjuLKZGlTOdxpJZebqpifMqJfQx6aDiosHENFN9','3Ed6iImw6QDDJNnomGLtb3NZZ99wbSAxeb2ZBQo9');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'calendar': 'events',
		'videos': 'videos',
		'dashboard': 'dashboard'
	},
	home: function() {
		ReactDOM.render(<HomePageComponent router={r}/>,document.getElementById('app'));
	},
	events: function() {
		ReactDOM.render(<EventsPageComponent router={r}/>,document.getElementById('app'));
	},
	videos: function() {
		ReactDOM.render(<VideosPageComponent router={r}/>,document.getElementById('app'));
	},
	dashboard: function() {
		var currentUser = Parse.User.current();
		if(currentUser) {
			ReactDOM.render(<DashboardPageComponent router={r}/>,document.getElementById('app'));
		} else {
			ReactDOM.render(<RestrictedPageComponent router={r}/>,document.getElementById('app'));
		}
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