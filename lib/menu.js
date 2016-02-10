/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	active: {
		type: 'array'
	},
	class: {
		type: 'string'
	},
	onChange: {
		type: 'function'
	}
};

const defaultProps = {
	active: [],
	children: [],
	onChange: () => {}
};

const render = ({props}) => {
	const {active, children, onChange} = props;
	const classes = {
		'Menu': true
	};

	children.map(x => {
		x.attributes.active = active;
		x.attributes.onChange = onChange;
	});

	return (
		<ul class={[classes, props.class]}>
			{children}
		</ul>
	);
};

export default {defaultProps, propTypes, render};
