import React from 'react';
import './App.css';
import Header from './Components/Headers/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [data, setData] = React.useState(null);
  const [isLogIn, setIsLogIn] = React.useState({
    isLogIn: false,
    nameOfUser: '',
    sessionTime: 0,
  });

  const isLogInhandle = (isLogin, nameOfUser, sessionTime) => {
    setIsLogIn({
      isLogIn: isLogin,
      nameOfUser: nameOfUser,
      sessionTime: sessionTime,
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
      {/* <BrowserRouter>
      <Routes>
     
          <Route index element={<></>} />
          <Route path="blogs" element={<></>} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<></>} />
        
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
