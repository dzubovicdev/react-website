import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements'


const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
               <NavLogo to='/'>
                dzubovic
                </NavLogo> 
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                      <NavLinks to="about">
                      About Me
                      </NavLinks>  
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
