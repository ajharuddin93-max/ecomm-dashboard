import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'

function Header(){
    const history = useNavigate();
    const user =JSON.parse(localStorage.getItem("user-info"));
    function logout(){
        localStorage.clear();
        history("/login");
    }
    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto nav_bar_wrapper">
                    {
                        localStorage.getItem("user-info") ?
                        <>
                            <Link to="/">Products List</Link>
                            <Link to="/add">Add Products</Link>
                            <Link to="/update">Update Products</Link>
                            <Link to="/search">Search Products</Link>
                        </>
                        :
                        <>
                            <Link to="/register">Sign Up</Link>
                            <Link to="/login">Login</Link>
                        </>
                    }
                </Nav>
                {
                    localStorage.getItem("user-info") ?
                    <Nav>
                    <NavDropdown title={user?.name}>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    : null
                }
                
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;