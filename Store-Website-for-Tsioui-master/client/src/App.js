import React from 'react';
import './App.css';
import Header from './Components/Headers/Header';
import Shop from './Components/Shop/Shop';
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
      <Header
        setIsLogIn={isLogInhandle}
        setnameOfUser={setnameOfUser}
        setsessionTime={setsessionTime}
        isLogIn={isLogIn}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;