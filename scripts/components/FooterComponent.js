'use strict';
var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			error: null
		};
	},
	componentWillMount: function() {
		$(document).ready(() => {
			$('.modal-trigger').leanModal();
			this.props.router.on('route', () => {
				this.forceUpdate();
			});
		});
	},
	render: function() {
		var adminLink = (<a className="grey-text text-lighten-4 right modal-trigger" href="#modal1">Admin</a>);
		if(window.location.hash === '#dashboard') {
			adminLink = (<a onClick={this.logout} className="grey-text text-lighten-4 right" href="#">Logout</a>)
		}
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">Footer Content</h5>
							<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text">Links</h5>
							<ul>
								<li><a className="grey-text text-lighten-3" href="https://dfwarmcare.teamapp.com/" target="blank">DFW ArmCare on TeamApp</a></li>
								<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						<a className="grey-text text-lighten-4 left" href="http://www.josiahgallen.com" target="blank">Built by Josiah Allen</a>
						{adminLink}
					</div>
				</div>
				<div id="modal1" className="modal">
					<div className="modal-content">
						<h4>Admin Login</h4>
						<div className="row">
							<form onSubmit={this.onLogin} className="col s12">
								<div className="row">
									<div className="input-field col s12">
										<input id="email" type="email" ref="email" className="validate"/>
										<label htmlFor="email">Username</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<input id="password" type="password" ref="password" className="validate"/>
										<label htmlFor="password">Password</label>
									</div>
								</div>
								<div className="modal-footer">
									<a href="#!" className=" modal-action modal-close waves-effect waves-red btn-flat">Cancel</a>
									<button className="btn waves-effect waves-light" type="submit" name="action">Login</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	},
	onLogin: function(e) {
		e.preventDefault();
		Parse.User.logIn(
			this.refs.email.value,
			this.refs.password.value,
			{
				success: (u) => {
					this.props.router.navigate('dashboard', {trigger: true})
					$('#modal1').closeModal();
				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
	},
	onLogout: function(e) {
		e.preventDefault();
		Parse.User.logOut();
		this.props.router.navigate('', {trigger: true})
		console.log('logged out');
	}
})