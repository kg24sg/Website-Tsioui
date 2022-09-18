import React, { useContext, useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {
  BsSearch,
  BsFillCartFill,
  BsBookmarkHeart,
  BsFillPersonFill,
  BsPuzzle,
  BsFillCaretRightSquareFill,
  BsFillCaretLeftSquareFill,
} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Store } from '../../Store';
import { toast } from 'react-toastify';
import { getError } from '../../utils';
import axios from 'axios';

export default function BrandBarSection(props) {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <div className={sidebarIsOpen ? 'active-cont' : ''}>
        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-contet-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <Navbar
          bg="dark"
          variant="dark"
          sticky="top"
          expand="lg"
          className="d-flex"
        >
          <Container fluid>
            <Button
              className="ms-5"
              variant="dark"
              onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            >
              {sidebarIsOpen ? (
                <BsFillCaretLeftSquareFill />
              ) : (
                <BsFillCaretRightSquareFill />
              )}
            </Button>
            <div className="ms-5">
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

            <div className=" me-auto ms-5">
              <Nav.Item>
                <Nav.Link className="headerlink" href="/home">
                  <BsSearch />
                </Nav.Link>
              </Nav.Item>
            </div>

            {userInfo && userInfo.isAdmin && (
              <div className="ml-auto  ms-5">
                <NavDropdown title="Admin" id="admin-nav-dropdown">
                  <LinkContainer to="/dashboard">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/productList">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </div>
            )}

            <div className="ml-auto ms-5">
              <Nav.Item>
                <Nav.Link className="headerlink" href="/home">
                  Favourites <BsBookmarkHeart />
                </Nav.Link>
              </Nav.Item>
            </div>

            <div className="ml-auto ms-5">
              <Nav.Item>
                <Nav.Link className="headerlink" href="/cart">
                  Cart
                  <BsFillCartFill />
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </Nav.Item>
            </div>

            {!userInfo && (
              <div className="ml-auto ms-5">
                <Nav.Item>
                  <Nav.Link className="headerlink" href="/signin">
                    Sign In
                    <BsFillPersonFill />
                  </Nav.Link>
                </Nav.Item>
              </div>
            )}
            {userInfo && (
              <div className="ml-auto ms-5">
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
            )}
          </Container>
        </Navbar>
      </div>
    </>
  );
}
