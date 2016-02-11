# deku-submenu

> A simple menu component for Deku


## Install

```
$ npm install --save deku-submenu
```


## Usage

```js
import {Menu, MenuItem, SubMenu} from 'deku-submenu';

const render = () => {
	return (
		<div class='MyMenu'>
			<Menu class='CustomClass'>
				<SubMenu title='National Hockey League'>
					<SubMenu title='Eastern Conference'>
						<MenuItem>New York Rangers</MenuItem>
						<MenuItem>Ottawa Senators</MenuItem>
					</SubMenu>
					<SubMenu title='Western Conference'>
						<MenuItem>Los Angeles Kings</MenuItem>
						<MenuItem>San Jose Sharks</MenuItem>
					</SubMenu>
				</SubMenu>
				<SubMenu title='Swedish Hockey League'>
					<MenuItem>Frölunda Indians</MenuItem>
					<MenuItem>Växjö Lakers</MenuItem>
				</SubMenu>
				<MenuItem>Zamboni</MenuItem>
			</Menu>
		</div>
	);
};

export default {render};
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
