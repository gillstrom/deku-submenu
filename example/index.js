/** @jsx dom */
import dom from 'magic-virtual-element';
import {render as r, tree} from 'deku';
import {Menu, MenuItem, SubMenu} from '../';

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
						<MenuItem >San Jose Sharks</MenuItem>
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

const App = {render};
const app = tree(<App/>);

r(app, document.body);
