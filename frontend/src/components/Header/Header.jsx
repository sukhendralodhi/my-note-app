// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/esm/Button";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Form>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                        </Form>
                        <Button className="ml-2" variant="light" bg="white">
                            Search
                        </Button>
                    </Nav>
                    <Nav>
                        <Nav.Link>My Notes</Nav.Link>
                        <NavDropdown title="Sanju" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
