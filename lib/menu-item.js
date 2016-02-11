/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	class: {
		type: 'string'
	}
};

const render = ({props, state}, setState) => {
	const {children} = props;
	const {active} = state;
	const classes = {
		'MenuItem': true,
		'MenuItem--active': active
	};

	return (
		<li class={[classes, props.class]} onClick={() => setState({active: !active})}>
			{children}
		</li>
	);
};

export default {propTypes, render};
