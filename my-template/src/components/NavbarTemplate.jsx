import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
class NavbarTemplate extends Component {
  render() {
    return (
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
                Signed in as: <a href="/login">Helena Tevar</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
      </div>
    )
  }
}

export default NavbarTemplate