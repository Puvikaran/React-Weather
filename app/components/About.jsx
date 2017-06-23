var React = require('react');

var About = () => {
	return(
			<div>
			<h2 className="text-center page-title">About</h2>
			<p>React Weather App is built to know the weather in the given location.This is the first react app built to learn react</p>
			<h5 className="">Tools Used</h5>
			<dl>
				<dt>React</dt>
				<dd>for user interface</dd>
				<dt>Open Weather Map</dt>
				<dd>To get the current weather Open Weather Map API is used</dd>
				<dt>Foundation-Sites</dt>
				<dd>Foundation-Sites CSS framework is used for styling the App</dd>
			</dl>
			</div>
		);
};


module.exports = About;