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

const render = ({props}) => {
	const {active, children, onClick} = props;
	const classes = {
		'MenuItem': true,
		'MenuItem--active': active
	};

	return (
		<li class={[classes, props.class]} onClick={e => onClick && onClick(e)}>
			<div class='MenuItem-title'>{children}</div>
		</li>
	);
};

export default {propTypes, render};
