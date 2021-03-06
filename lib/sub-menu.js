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
	},
	toggler: {
		type: 'string'
	}
};

const click = (setState, active, onClick) => e => {
	setState({active: !active});

	if (onClick) {
		onClick(e);
	}
};

const afterMount = ({props}, el, setState) => props.active && setState({active: props.active});

const render = ({props, state}, setState) => {
	const {children, onClick, title, toggler} = props;
	const {active} = state;
	const classes = {
		'MenuItem': true,
		'MenuItem--parent': true,
		'MenuItem--open': active
	};

	return (
		<li class={[classes, props.class]}>
			<div class='MenuItem-content'>
				<div class='MenuItem-toggler' onClick={click(setState, active)}>{toggler}</div>
				<div class='MenuItem-title' onClick={click(setState, active, onClick)}>
					{title}
				</div>
			</div>
			<ul class='SubMenu'>
				{children}
			</ul>
		</li>
	);
};

export default {afterMount, propTypes, render};
