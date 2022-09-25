import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Headers/Header';
import ProductScreen from './Components/Product/ProductScreen';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowProduct from './Components/Product/ShowProduct';
import { Helmet } from 'react-helmet-async';
import CartScreen from './Components/CartScreen/CartScreen';
import SignInScreen from './Components/SignInScreen/SignInScreen';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAdressScreen from './Components/Shipping/ShippingAdressScreen';
import SignupScreen from './Components/SignInScreen/SignupScreen';
import PaymentMethodScreen from './Components/Shipping/PaymentMethodScreen';
import PlaceOrderScreen from './Components/Shipping/PlaceOrderScreen';
import OrderScreen from './Components/Shipping/OrderScreen';
import OrderHistoryScreen from './Components/Shipping/OrderHistoryScreen';
import ProfileScreen from './Components/SignInScreen/ProfileScreen';
import Headline from './Components/Headers/Headline';
import { Store } from './Store';
import axios from 'axios';
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
import { getError } from './utils';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import SearchBox from './Components/Search/SearchBox';
import SearchScreen from './Components/Search/SearchScreen';
import ProtectedRoute from './Components/Administrator/ProtectedRoute';
import DashboardScrenn from './Components/Administrator/DashboardScrenn';
import AdminRoute from './Components/Administrator/AdminRoute';
import ProductListScreen from './Components/Administrator/ProductListScreen';
import ProductEditScreen from './Components/Administrator/ProductEditScreen';
import OrderListScreen from './Components/Administrator/OrderListScreen';
function App() {
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

  const [isLogIn, setIsLogIn] = React.useState({
    isLogIn: false,
    nameOfUser: '',
    sessionTime: 0,
  });

  const isLogInhandle = (isLogin, nameOfUser, sessionTime, fullname) => {
    setIsLogIn({
      isLogIn: isLogin,
      nameOfUser: nameOfUser,
      sessionTime: sessionTime,
      fullname: fullname,
    });
  };

  const setnameOfUser = () => {
    setIsLogIn({ isLogIn: true });
  };

  const setsessionTime = () => {
    setIsLogIn({ isLogIn: true });
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log(isLogIn);
    }, 1000);

    return () => clearInterval(interval);
  }, [isLogIn]);

  return (
    <div className="d-flex flex-column site-container">
      <ToastContainer position="bottom-center" limit={1} />
      <BrowserRouter>
        <Helmet>
          <title>Tsioui Webstore</title>
        </Helmet>
        <Headline />
        <Header
          setIsLogIn={isLogInhandle}
          setnameOfUser={setnameOfUser}
          setsessionTime={setsessionTime}
          isLogIn={isLogIn}
        />
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
                  <SearchBox />
                </Nav.Item>
              </div>

              {userInfo && userInfo.isAdmin && (
                <div className="ml-auto  ms-5">
                  <NavDropdown title="Admin" id="admin-nav-dropdown">
                    <LinkContainer to="/admin/dashboard">
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/products">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orders">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/users">
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
          <Routes>
            {/* /*Admin Routes*/}
            <Route
              path="/admin/dashboard"
              element={
                <AdminRoute>
                  <DashboardScrenn />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="/admin/products"
              element={
                <AdminRoute>
                  <ProductListScreen />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="/admin/orders"
              element={
                <AdminRoute>
                  <OrderListScreen />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="/admin/product/:id"
              element={
                <AdminRoute>
                  <ProductEditScreen />
                </AdminRoute>
              }
            ></Route>
            {/* /*Admin Routes*/}
            <Route
              path="/"
              element={
                <Home
                  setIsLogIn={isLogInhandle}
                  setnameOfUser={setnameOfUser}
                  setsessionTime={setsessionTime}
                  isLogIn={isLogIn}
                />
              }
            />
            <Route
              path="/home"
              element={
                <Home
                  setIsLogIn={isLogInhandle}
                  setnameOfUser={setnameOfUser}
                  setsessionTime={setsessionTime}
                  isLogIn={isLogIn}
                />
              }
            />
            <Route path="/shop" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/signIn" element={<SignInScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route
              path="/placeorder"
              element={
                <ProtectedRoute>
                  <PlaceOrderScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order/:id"
              element={
                <ProtectedRoute>
                  <OrderScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orderhistory"
              element={
                <ProtectedRoute>
                  <OrderHistoryScreen />
                </ProtectedRoute>
              }
            />
            <Route path="/shipping" element={<ShippingAdressScreen />} />
            <Route path="/payment" element={<PaymentMethodScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/shop/product/:slug" element={<ShowProduct />} />
          </Routes>
        </div>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
