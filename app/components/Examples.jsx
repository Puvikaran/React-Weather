var React = require('react');
var {Link} = require('react-router');


var Examples = () =>{
	return(
			<div>
				<h1 className="text-center">Examples</h1>
				<p>Some Examples to try</p>
				<ol>
					<li><Link to="/?location=Austin">Austin</Link></li>
					<li><Link to="/?location=Mexico">Mexico</Link></li>
					<li><Link to="/?location=Rio">Rio</Link></li>
				</ol>
			</div>
	    );

};

module.exports = Examples;