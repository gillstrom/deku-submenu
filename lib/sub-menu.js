/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	active: {
		type: 'array'
	},
	class: {
		type: 'string'
	},
	key: {
		type: 'string'
	},
	onChange: {
		type: 'function'
	},
	title: {
		type: 'string'
	}
};

const onClick = props => {
	const {active, key, onChange} = props;

	return () => {
		const open = active.includes(key);

		if (open) {
			active.splice(active.indexOf(key), 1);
		}

		if (!open) {
			active.push(key);
		}

		onChange({
			active,
			key,
			state: !open
		});
	};
};

const render = ({props}) => {
	const {active, children, key, onChange, title} = props;
	const classes = {
		'SubMenu': true,
		'SubMenu--open': active.includes(key)
	};

	children.map(x => {
		x.attributes.active = active;
		x.attributes.onChange = onChange;
	});

	return (
		<li class={[classes, props.class]}>
			<div class='SubMenu-title' onClick={onClick(props)}>{title}</div>
			<ul class='SubMenu-menu'>
				{children}
			</ul>
		</li>
	);
};

export default {propTypes, render};
