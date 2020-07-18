import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' exact>Burger Builder</NavigationItem>
    <NavigationItem link='/orders'>Orders</NavigationItem>
    {!props.isAuthenticated
      ? <NavigationItem link='/auth'>Log in</NavigationItem>
      : <NavigationItem link='/logout'>Log out</NavigationItem>}
  </ul>
);

export default navigationItems;