import React from 'react';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAdressScreen from './Components/Shipping/ShippingAdressScreen';

function App() {
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
        <Header
          setIsLogIn={isLogInhandle}
          setnameOfUser={setnameOfUser}
          setsessionTime={setsessionTime}
          isLogIn={isLogIn}
        />
        <Routes>
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
          <Route path="/shipping" element={<ShippingAdressScreen />} />
          <Route path="/shop/product/:slug" element={<ShowProduct />} />
        </Routes>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
