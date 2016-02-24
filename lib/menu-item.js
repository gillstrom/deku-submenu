/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	active: {
		type: 'boolean'
	},
	class: {
		type: 'string'
	},
	onClick: {
		type: 'function'
	}
};

const click = (setState, active, onClick) => () => {
	setState({active: !active});

	if (onClick) {
		onClick();
	}
};

const afterMount = ({props}, el, setState) => props.active && setState({active: props.active});

const render = ({props, state}, setState) => {
	const {children, onClick} = props;
	const {active} = state;
	const classes = {
		'MenuItem': true,
		'MenuItem--active': active
	};

	return (
		<li class={[classes, props.class]} onClick={click(setState, active, onClick)}>
			<div class='MenuItem-title'>{children}</div>
		</li>
	);
};

export default {afterMount, propTypes, render};
