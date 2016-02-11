/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	class: {
		type: 'string'
	},
	title: {
		type: 'string'
	}
};

const render = ({props, state}, setState) => {
	const {children, title} = props;
	const {active} = state;
	const classes = {
		'SubMenu': true,
		'SubMenu--open': active
	};

	return (
		<li class={[classes, props.class]}>
			<div class='SubMenu-title' onClick={() => setState({active: !active})}>{title}</div>
			<ul class='SubMenu-menu'>
				{children}
			</ul>
		</li>
	);
};

export default {propTypes, render};
