# deku-submenu

> A simple menu component for Deku


## Install

```
$ npm install --save deku-submenu
```


## Usage

```js
import {Menu, MenuItem, SubMenu} from 'deku-submenu';

const onChange = setState => {
	return obj => {
		console.log(obj);
		setState({active: obj.active});
	};
};

const initialState = () => {
	return {
		active: []
	};
};

const render = ({state}, setState) => {
	const {active} = state;

	return (
		<div class='MyMenu'>
			<Menu class='CustomClass' active={active} onChange={onChange(setState)}>
				<SubMenu key='1' title='National Hockey League'>
					<SubMenu key='1-1' title='Eastern Conference'>
						<MenuItem key='1-1-1'>New York Rangers</MenuItem>
						<MenuItem key='1-1-2'>Ottawa Senators</MenuItem>
					</SubMenu>
					<SubMenu key='1-2' title='Western Conference'>
						<MenuItem key='1-2-1'>Los Angeles Kings</MenuItem>
						<MenuItem key='1-2-2'>San Jose Sharks</MenuItem>
					</SubMenu>
				</SubMenu>
				<SubMenu key='2' title='Swedish Hockey League'>
					<MenuItem key='2-1'>Frölunda Indians</MenuItem>
					<MenuItem key='2-2'>Växjö Lakers</MenuItem>
				</SubMenu>
				<MenuItem key='3'>Zamboni</MenuItem>
			</Menu>
		</div>
	);
};

export default {render};
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
