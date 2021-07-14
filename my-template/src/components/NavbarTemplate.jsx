import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GeneralContext } from '../context/GeneralContext';
class NavbarTemplate extends Component {
  static generalcontext = GeneralContext;
  render() {
    return (
      <GeneralContext.Consumer>
        {context => (
          <div className="NavbarWrapper">
          
          <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Form">Form</Nav.Link>

            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Signed in as: <a href="/login">{context.name + " "  +context.surname} </a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
      </div>
        )}
      </GeneralContext.Consumer>  
      
    )
  }
}

export default NavbarTemplate