import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
   return (
    <nav>
        <NavLink exact to='/'>Home Page</NavLink>
        <NavLink to='/character'>Characters</NavLink>
        <NavLink to='/location'>Locations</NavLink>
        <NavLink to='episode'>Episodes</NavLink>
    </nav>
   )
};

