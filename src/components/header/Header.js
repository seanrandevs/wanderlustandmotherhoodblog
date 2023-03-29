import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";
import './header.css';
const Header = () => {

  return (
      <Navbar expand="lg">
        <Container>
          <Link to="/">
          <Navbar.Brand>Wanderlust and Motherhood</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link as={Link} to="/about-me">About Me</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/articles">Articles</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <NavDropdown id="basic-nav-dropdown" title="Social Media">
              <NavDropdown.Item>
                <SocialIcon  style={{ height: 40, width: 40 }} network="facebook" />
                <SocialIcon  style={{ height: 40, width: 40 }} network="twitter" />
              </NavDropdown.Item>
              <NavDropdown.Item >
                <SocialIcon style={{ height: 40, width: 40 }} network="pinterest" />
                <SocialIcon style={{ height: 40, width: 40 }} network="instagram" />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header