import React from "react";

import
{
    Nav, 
    NavLink,
    Bars, 
    NavMenu,

} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <Bars/>
            <NavMenu>
                <NavLink exact to="/Home">Home</NavLink>
                <NavLink exact to= "/Memo">Memo</NavLink>
                <NavLink exact to="/Games">Games</NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;