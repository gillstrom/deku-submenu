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
	}
};

const onClick = props => {
	const {active, key, onChange} = props;

	return () => {
		const exists = active.includes(key);

		if (exists) {
			active.splice(active.indexOf(key), 1);
		}

		if (!exists) {
			active.push(key);
		}

		onChange({
			active,
			key,
			state: !exists
		});
	};
};

const render = ({props}) => {
	const {active, children, key} = props;
	const classes = {
		'MenuItem': true,
		'MenuItem--active': active.includes(key)
	};

	return (
		<li class={[classes, props.class]} onClick={onClick(props)}>
			{children}
		</li>
	);
};

export default {propTypes, render};
