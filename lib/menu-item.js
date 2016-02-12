/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	active: {
		type: 'boolean'
	},
	class: {
		type: 'string'
	}
};

const afterMount = ({props}, el, setState) => props.active && setState({active: props.active});
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

export default {afterMount, propTypes, render};
