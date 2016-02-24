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
	},
	title: {
		type: 'string'
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
	const {children, onClick, title} = props;
	const {active} = state;
	const classes = {
		'MenuItem': true,
		'MenuItem--parent': true,
		'MenuItem--open': active
	};

	return (
		<li class={[classes, props.class]}>
			<div class='MenuItem-title' onClick={click(setState, active, onClick)}>{title}</div>
			<ul class='SubMenu'>
				{children}
			</ul>
		</li>
	);
};

export default {afterMount, propTypes, render};
