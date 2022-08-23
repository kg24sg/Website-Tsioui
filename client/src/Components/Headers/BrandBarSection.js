import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
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
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import RegisterModal from '../LoginRegister/RegisterModal';
import LogInModal from '../LoginRegister/LogInModal';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Store } from '../../Store';
// import { Link } from '@mui/material';

export default function BrandBarSection(props) {
  const [show, setShow] = useState(false);
  const [showRegister, setshowRegister] = useState(false);
  const [showLogIn, setshowLogIn] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogIn = () => {
    setshowLogIn(true);
    setshowRegister(false);
  };
  const handleRegister = () => {
    setshowRegister(true);
    setshowLogIn(false);
  };
  //   const [key, setKey] = useState('home');

  const { state } = useContext(Store);
  const { cart } = state;
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
                <Nav.Link className="headerlink" to="/cart">
                  <BsFillCartFill />
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Nav.Link>
              </Nav.Item>
            </div>
          </Col>
          {!props.isLogIn.isLogIn && (
            <Col>
              <div className="d-flex  justify-content-start">
                <Nav.Item>
                  <Nav.Link className="headerlink" onClick={handleShow}>
                    <BsFillPersonFill />
                  </Nav.Link>
                </Nav.Item>
              </div>
            </Col>
          )}
          {props.isLogIn.isLogIn && (
            <Col>
              <div className="d-flex  justify-content-start">
                <Nav.Item>
                  <Nav.Link>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" className="headerlink">
                        {props.isLogIn.fullname} <BsFillPersonFill />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Sign Out</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav.Link>
                </Nav.Item>
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
