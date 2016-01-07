'use strict';
var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			oldPass: Parse.User.current().get('videoAccess')
		}
	},
	componentDidMount: function() {
		$(document).ready(function(){
			$('.collapsible').collapsible();
		});
	},
	render: function() {
		console.log(Parse.User.current().get('videoAccess'));
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
							<div className="collapsible-body">
								<div className="row">
									<form className="col s12">
										<div className="container">
											<div className="row">
												<div className="input-field col s6">
													<input value="test" id="icon_prefix" type="text" className="validate" ref="oldPass"/>
													<label htmlFor="icon_prefix">Old Password</label>
												</div>
											</div>
											<div className="row">
												<div className="input-field col s6">
													<input id="icon_telephone" type="text" className="validate" ref="newPass"/>
													<label htmlFor="icon_telephone">New Password</label>
												</div>
												<div className="input-field col s6">
													<input id="icon_telephone" type="text" className="validate" ref="confirmNew"/>
													<label htmlFor="icon_telephone">Confirm New Password</label>
												</div>
											</div>
											<div className="row">
												<a href="#!" onClick={this.onCancel} className="right waves-effect waves-red btn-flat">Cancel</a>
												<button className="right btn waves-effect waves-light" type="submit" name="action">Submit</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	},
	onCancel: function() {
		this.refs.oldPass.value = '';
		this.refs.newPass.value = '';
		this.refs.confirmNew.value = '';
	},
	onSubmit: function(e) {
		e.preventDefault();

	}
})