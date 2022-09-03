import Button from 'react-bootstrap/Button';
import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Axios from 'axios';
import { Store } from '../../Store';
import { toast } from 'react-toastify';
import { getError } from '../../utils';
import CheckoutSteps from '../Shipping/CheckoutSteps';

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
    }
  }, [navigate, redirect, userInfo]);

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
      </Container>
    </>
  );
}
