/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	class: {
		type: 'string'
	}
};

const defaultProps = {
	children: []
};

const render = ({props}) => {
	const {children} = props;

	return (
		<ul class={['SubMenu', props.class]}>
			{children}
		</ul>
	);
};

export default {defaultProps, propTypes, render};
