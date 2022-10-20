import Button from 'react-bootstrap/Button';
import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Axios from 'axios';
import { Store } from '../../Store';
import { toast } from 'react-toastify';
import { generateToken, getError } from '../../utils';
import CheckoutSteps from '../Shipping/CheckoutSteps';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { gapi } from 'gapi-script';

export default function SignInScreen(props) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    } else {
    }
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'email',
        cookiePolicy: 'single_host_origin',
        prompt: 'select_account',
      });
    }

    gapi.load('client:auth2', start);
  }, [navigate, redirect, userInfo]);

  const handleFailureGoogle = (result) => {
    console.log(result);
  };

  const handleLoginGoogle = async (googleData) => {
    const name = googleData.profileObj.name;
    const email = googleData.profileObj.email;
    const password = '';
    let id = '';
    const { data } = await Axios.post('/api/users/checkuser', {
      email,
      password,
    });

    if (!data.check) {
      const { data } = await Axios.post('/api/users/signup', {
        name,
        email,
        password,
      });
      id = data._id;
    } else {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      id = data._id;
    }
    console.log('allreadylogin');
    const data2 = {
      _id: id,
      name: googleData.profileObj.name,
      email: googleData.profileObj.email,
      isAdmin: false,
      token: generateToken(googleData),
    };

    ctxDispatch({ type: 'USER_SIGNIN', payload: data2 });
    localStorage.setItem('userInfo', JSON.stringify(data2));
    navigate(redirect || '/');
  };

  const responseFacebook = async (response) => {
    const name = response.name;
    const email = response.email;
    const password = '';
    let id = '';
    const { data } = await Axios.post('/api/users/checkuser', {
      email,
      password,
    });

    if (!data.check) {
      const { data } = await Axios.post('/api/users/signup', {
        name,
        email,
        password,
      });
      id = data._id;
    } else {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      id = data._id;
    }
    console.log('allreadylogin');
    const data2 = {
      _id: id,
      name: response.name,
      email: response.email,
      isAdmin: false,
      token: generateToken(response),
    };

    ctxDispatch({ type: 'USER_SIGNIN', payload: data2 });
    localStorage.setItem('userInfo', JSON.stringify(data2));
    navigate(redirect || '/');
  };

  return (
    <>
      <Container>
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <CheckoutSteps step1></CheckoutSteps>
        <h1 className="my-3">Sign In</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="mb-3">
            <Button type="submit">Sign In</Button>
          </div>
          <div className="mb=3">
            New customer?{''}
            <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
          </div>
        </Form>
        <h6 style={{ textAlign: 'center' }}>Sign in by Facebook or Google</h6>
        <br />
        <div class="container-md" style={{ textAlign: 'center' }}>
          <div class="row">
            <div class="col-6">
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Google"
                onSuccess={handleLoginGoogle}
                onFailure={handleFailureGoogle}
                cookiePolicy={'single_host_origin'}
                prompt="select_account"
                className="loginBtn loginBtn--google same-as-fb"
                plugin_name="chat"
              ></GoogleLogin>
            </div>
            <div class="col-6">
              <FacebookLogin
                appId="1136058267289635"
                textButton="Facebook"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="loginBtn loginBtn--facebook"
                // icon={<TiSocialFacebookCircular />}
              ></FacebookLogin>
            </div>
          </div>
        </div>
        <br />
      </Container>
    </>
  );
}
