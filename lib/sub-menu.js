/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	active: {
		type: 'boolean'
	},
	class: {
		type: 'string'
	},
	title: {
		type: 'string'
	}
};

const afterMount = ({props}, el, setState) => props.active && setState({active: props.active});
const render = ({props, state}, setState) => {
	const {children, title} = props;
	const {active} = state;
	const classes = {
		'MenuItem': true,
		'MenuItem--parent': true,
		'MenuItem--open': active
	};

	return (
		<li class={[classes, props.class]}>
			<div class='MenuItem-title' onClick={() => setState({active: !active})}>{title}</div>
			<ul class='SubMenu'>
				{children}
			</ul>
		</li>
	);
};

export default {afterMount, propTypes, render};
