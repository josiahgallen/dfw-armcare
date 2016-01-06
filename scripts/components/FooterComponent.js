'use strict';
var React = require('react');

module.exports = React.createClass({
	componentWillMount: function() {
		$(document).ready(function(){
    		$('.modal-trigger').leanModal();
  		});
	},
	render: function() {
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
            	      			<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
            	      			<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            	    		</ul>
            	  		</div>
            		</div>
          		</div>
          		<div className="footer-copyright">
            		<div className="container">
            			<a className="grey-text text-lighten-4 left" href="http://www.josiahgallen.com" target="blank">Built by Josiah Allen</a>
            			<a className="grey-text text-lighten-4 right modal-trigger" href="#modal1">Admin</a>
            		</div>
          		</div>
  				<div id="modal1" className="modal">
  				  	<div className="modal-content">
  				    	<h4>Admin Login</h4>
  				    	<div className="row">
    						<form className="col s12">
    							<div className="row">
        							<div className="input-field col s12">
          								<input id="email" type="email" className="validate"/>
          								<label htmlFor="email">Username</label>
        							</div>
      							</div>
      							<div className="row">
      							  	<div className="input-field col s12">
      							    	<input id="password" type="password" className="validate"/>
      							    	<label htmlFor="password">Password</label>
      							  	</div>
      							</div>
    						</form>
    					</div>
  				  	</div>
  				  	<div className="modal-footer">
  				  		<a href="#!" className=" modal-action modal-close waves-effect waves-red btn-flat">Cancel</a>
  				    	<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Login</a>
  				  	</div>
  				</div>
			</div>
		)
	}
})