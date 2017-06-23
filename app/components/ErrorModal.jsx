var React = require('react');

var ErrorModal = React.createClass({
	getDefaultProps : function(){
		title : 'Error'
	},
	propTypes :{
		title : React.PropTypes.string,
		message :React.PropTypes.string.isRequired
	},
	componentDidMount : function(){
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render : function (){
		var {title, message} = this.props;
		return(
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4 className="text-center">{title}</h4>
				<p className="text-center">{message}</p>
				<button className="button hallow" data-close="">Okay</button>
			</div>
			);
	}
});

module.exports = ErrorModal;