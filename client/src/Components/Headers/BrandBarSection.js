import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RegisterModal from '../LoginRegister/RegisterModal';
import LogInModal from '../LoginRegister/LogInModal';
import { Link } from '@mui/material';

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
  const [key, setKey] = useState('home');

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container fluid>
          {/* <Col xs={1}>
                    <Dropdown >
                        <Dropdown.Toggle variant="dark">
                            <Hamburger />
                        </Dropdown.Toggle>

                        <Dropdown.Menu class='humburger-menu' variant="dark">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col> */}
          <Col xs={1}>
            <div class="d-flex justify-content-start">
              <Nav.Item>
                <Nav.Link class="header_link" href="/home">
                  <BsSearch />
                </Nav.Link>
              </Nav.Item>
            </div>
          </Col>
          <Col xs={1}>
            <div class="d-flex justify-content-start">
              <Nav.Item>
                <Nav.Link class="header_link" href="/home">
                  <BsBookmarkHeart />
                </Nav.Link>
              </Nav.Item>
            </div>
          </Col>

          <Col xs={7}>
            <div class="d-flex justify-content-center">
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
            </div>
          </Col>
          <Col xs={1}>
            <div class="d-flex">
              <Nav.Item>
                <Nav.Link class="header_link">
                  <BsPuzzle />
                </Nav.Link>
              </Nav.Item>
            </div>
          </Col>
          <Col xs={1}>
            <div class="d-flex">
              <Nav.Item>
                <Nav.Link class="header_link" href="/home">
                  <BsFillCartFill />
                </Nav.Link>
              </Nav.Item>
            </div>
          </Col>
          {!props.isLogIn.isLogIn && (
            <Col xs={1}>
              <div class="d-flex ">
                <Nav.Item>
                  <Nav.Link class="header_link" onClick={handleShow}>
                    <BsFillPersonFill />
                  </Nav.Link>
                </Nav.Item>
              </div>
            </Col>
          )}
          {props.isLogIn.isLogIn && (
            <Col xs={1}>
              <div class="d-flex">
                <Nav.Item>
                  <Nav.Link class="header_link">
                    <Dropdown>
                      <Dropdown.Toggle variant="dark">
                        {props.isLogIn.nameOfUser} <BsFillPersonFill />
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
            <div class="container">
              <div class="row">
                <div class="col-6">
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
                <div class="col-6">
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
            <div class="container" className="d-flex justify-content-center">
              {showLogIn && (
                <div class="row">
                  <LogInModal
                    closeModal={handleClose}
                    setIsLogIn={props.setIsLogIn}
                  />
                </div>
              )}
              {showRegister && (
                <div class="row">
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
            <div class="container">
              <div class="row">
                <div class="col-6 text-center">
                  <p>
                    <a href="https://www.google.com/">Google</a>
                  </p>
                </div>
                <div class="col-6 text-center">
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
