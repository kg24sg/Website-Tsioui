import React from 'react';
import './App.css';
import Header from './Components/Headers/Header';
import Shop from './Components/Shop/Shop';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [data, setData] = React.useState(null);
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
    <div>
      <BrowserRouter>
        <Header
          setIsLogIn={isLogInhandle}
          setnameOfUser={setnameOfUser}
          setsessionTime={setsessionTime}
          isLogIn={isLogIn}
        />
        <Routes>
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
          <Route path="/shop" element={<Shop />} />
          <Redirect to="/home" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
