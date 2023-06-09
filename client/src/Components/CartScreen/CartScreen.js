import React, { useState } from 'react';
import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet-async';
import { Store } from '../../Store';
import MessageBox from '../globalFunctions/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { BsPatchMinusFill, BsPatchPlusFill, BsTrashFill } from 'react-icons/bs';
import axios from 'axios';
import SignInScreen from '../SignInScreen/SignInScreen';

export default function CartScreen() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
    // navigate('/cart');
  };

  const removeItemHandler = (item) => {
    console.log(item);
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkOutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };
  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is Empty. <Link to="/shop">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={7}>
                      <img
                        src={item.image}
                        alt={item.image}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{' '}
                      <Link to={`product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={2} className="d-flex  justify-content-center">
                      <Button
                        variant="light"
                        disabled={item.quantity === 1}
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                      >
                        <BsPatchMinusFill></BsPatchMinusFill>
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button
                        variant="light"
                        disabled={item.quantity === item.countInStock}
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                      >
                        <BsPatchPlusFill></BsPatchPlusFill>
                      </Button>{' '}
                    </Col>
                    {
                      <Col md={1} className="d-flex  justify-content-center">
                        {'(' + item.sizes.map((item) => item.value + ' ') + ')'}
                      </Col>
                    }

                    <Col md={1} className="d-flex  justify-content-center">
                      ${item.price}
                    </Col>
                    <Col md={1} className="d-flex  justify-content-center">
                      <Button
                        variant="light"
                        onClick={() => removeItemHandler(item)}
                      >
                        <BsTrashFill></BsTrashFill>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : €
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={checkOutHandler}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Ckeckout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {show && <SignInScreen></SignInScreen>}
    </div>
  );
}
