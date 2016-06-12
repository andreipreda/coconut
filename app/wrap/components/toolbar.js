import React from 'react';
import { Toolbar, NavItem } from 'rebass';
import { DateChooser } from './../../interval';

export const Header = () =>
  <Toolbar>
    <NavItem is="a">
      Coconut
    </NavItem>
  </Toolbar>;

export const Wrap = () =>
  <div>
    <Header />
    <DateChooser />
  </div>;
