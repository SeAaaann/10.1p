import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => (
  <Menu>
    <Menu.Item header>DEV@Deakin</Menu.Item>
    <Menu.Item name="Home" />
    <Menu.Item name="Articles" />
    <Menu.Item name="Tutorials" />
  </Menu>
);

export default Header;
