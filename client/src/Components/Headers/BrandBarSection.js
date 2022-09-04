import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Sling as Hamburger } from 'hamburger-react';
import {
  BsSearch,
  BsFillCartFill,
  BsBookmarkHeart,
  BsFillPersonFill,
  BsPuzzle,
} from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import RegisterModal from '../LoginRegister/RegisterModal';
import LogInModal from '../LoginRegister/LogInModal';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Store } from '../../Store';

export default function BrandBarSection(props) {
  const [show, setShow] = useState(false);
  const [showRegister, setshowRegister] = useState(false);
  const [showLogIn, setshowLogIn] = useState(true);

  const handleClose = () => setShow(false);
  const handleLogIn = () => {
    setshowLogIn(true);
    setshowRegister(false);
  };
  const handleRegister = () => {
    setshowRegister(true);
    setshowLogIn(false);
  };
  //   const [key, setKey] = useState('home');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('paymentMethod');
    console.log(userInfo);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container fluid>
          {
            <Col xs={1}>
              <Dropdown>
                <Dropdown.Toggle variant="dark">
                  <Hamburger />
                </Dropdown.Toggle>

                <Dropdown.Menu className="humburger-menu" variant="dark">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          }

          <Col md={6}>
            <div className="d-flex justify-content-start">
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                  The brand
                </Navbar.Brand>
              </LinkContainer>
            </div>
          </Col>
          <Col>
            <div className="d-flex  justify-content-start">
              <Nav.Item>
                <Nav.Link className="headerlink">
                  <BsPuzzle />
                </Nav.Link>
              </Nav.Item>
            </div>
          </Col>

          <Col>
            <div className="d-flex justify-content-start">
              <Nav.Item>
                <Nav.Link className="headerlink" href="/home">
                  <BsBookmarkHeart />
                </Nav.Link>
              </Nav.Item>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-start">
              <Nav.Item>
                <Nav.Link className="headerlink" href="/home">
                  <BsSearch />
                </Nav.Link>
              </Nav.Item>
            </div>
          </Col>
          <Col>
            <div className="d-flex  justify-content-start">
              <Nav.Item>
                <Nav.Link className="headerlink" href="/cart">
                  <BsFillCartFill />
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </Nav.Item>
            </div>
          </Col>
          {!userInfo && (
            <Col>
              <div className="d-flex  justify-content-start">
                <Nav.Item>
                  <Nav.Link className="headerlink" href="/signin">
                    <BsFillPersonFill />
                  </Nav.Link>
                </Nav.Item>
              </div>
            </Col>
          )}
          {userInfo && (
            <Col>
              <div className="d-flex  justify-content-start">
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>User Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orderhistory">
                    <NavDropdown.Item>Order History</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </NavDropdown>
              </div>
            </Col>
          )}
        </Container>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                The brand
              </Navbar.Brand>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <Button
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      color: 'black',
                    }}
                    size="md"
                    onClick={handleLogIn}
                    variant="outline-light"
                  >
                    Login
                  </Button>
                </div>
                <div className="col-6">
                  <Button
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      color: 'black',
                    }}
                    size="md"
                    onClick={handleRegister}
                    variant="outline-light"
                  >
                    Register
                  </Button>
                </div>
              </div>
            </div>
            <hr
              style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 0.5,
                borderColor: '#000000',
              }}
            />
            <div className="d-flex justify-content-center container">
              {showLogIn && (
                <div className="row">
                  <LogInModal
                    closeModal={handleClose}
                    setIsLogIn={props.setIsLogIn}
                  />
                </div>
              )}
              {showRegister && (
                <div className="row">
                  <RegisterModal
                    register={showRegister}
                    handleRegister={handleRegister}
                    logIn={showLogIn}
                    handleLogIn={handleLogIn}
                  />
                </div>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="container">
              <div className="row">
                <div className="col-6 text-center">
                  <p>
                    <a href="https://www.google.com/">Google</a>
                  </p>
                </div>
                <div className="col-6 text-center">
                  <p>
                    <a href="https://www.w3.org/">W3C</a>
                  </p>
                </div>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </Navbar>
    </>
  );
}
