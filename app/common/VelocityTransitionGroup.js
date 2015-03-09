import React from 'react/addons';
import Velocity from "velocity-animate";
import "velocity-animate/velocity.ui";

import transitions from "./transitions";
let ReactTransitionGroup = React.addons.TransitionGroup;


let VelocityTransitionGroupChild = React.createClass({
	propTypes: {
		transitionName: React.PropTypes.string.isRequired,
	},

	_getTransition(){
		if (!transitions[this.props.transitionName]){
			console.warn('TransitionName ' + this.props.transitionName + ' wasn\'t found in VelocityTransitionGroupChild transitions.');
		}
		return transitions[this.props.transitionName] || transitions.default;
	},
 
	componentWillEnter(done){
		var node = this.getDOMNode();
		var transition = this._getTransition();
		Velocity(
			node,
			transition.enter,
			{
				duration: transition.duration,
				complete: done
			});
	},
 
	componentWillLeave(done){
		var node = this.getDOMNode();
		var transition = this._getTransition();
		Velocity(
			node,
			transition.leave,
			{
				duration: transition.duration,
				complete: done
			});
	},
 
	render(){
		return React.Children.only(this.props.children);
	}
});
 
var VelocityTransitionGroup = React.createClass({
	propTypes: {
		transitionName: React.PropTypes.string.isRequired,
	},
 
	_wrapChild(child){
		return (
			<VelocityTransitionGroupChild transitionName={this.props.transitionName}>
				{child}
			</VelocityTransitionGroupChild>
		);
	},
 
	render(){
		return (
			<ReactTransitionGroup {...this.props} childFactory={this._wrapChild} />
		);
	}
});
 
export default VelocityTransitionGroup;