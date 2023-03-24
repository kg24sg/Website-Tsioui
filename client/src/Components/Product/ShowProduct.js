import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import logger from 'use-reducer-logger';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../globalFunctions/LoadingBox';
import { getError } from '../../utils';
import { Store } from '../../Store';
import Select from 'react-select';
import FormErrors from '../globalFunctions/formErorrs';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default function ShowProduct() {
  const [selectedImage, setSelectedImage] = useState('');
  const [sizes, setSizes] = useState({ value: 'One Size', label: 'One Size' });
  const navigate = useNavigate();
  const params = useParams();

  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(logger(reducer), {
    product: [],
    loading: true,
    error: { error: '' },
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const erroOnHandleSize = () => {
    if (product.sizes.length === 0) {
      return false;
    } else {
      return sizes.value !== 'One Size' ? false : true;
    }
  };
  const addToCartHandler = async () => {
    if (!erroOnHandleSize()) {
      product.sizes = [];
      const existItem = cart.cartItems.find((x) => x._id === product._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;

      product.sizes = existItem
        ? [...existItem.sizes, sizes]
        : [...product.sizes, sizes];
      const { data } = await axios.get(`/api/products/${product._id}`);
      if (data.countInStock < quantity) {
        window.alert('Sorry. Product is out of stock');
        return;
      }
      ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...product, quantity },
      });
      navigate('/cart');
    } else {
      dispatch({
        type: 'FETCH_FAIL',
        payload: { error: 'Please chose one of the available sizes' },
      });
    }
  };

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : (
        <div className="mt-3">
          <div className="panel panel-default">
            <FormErrors formErrors={error} />
          </div>
          <Row>
            <Col md={6}>
              <img
                className="img-large"
                src={selectedImage || product.image}
                alt={product.name}
              />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Helmet>
                    <title>{product.name}</title>
                  </Helmet>
                  <h1>{product.name}</h1>
                </ListGroup.Item>
                <ListGroup.Item>Price : €{product.price}</ListGroup.Item>
                <ListGroup.Item>
                  <Row xs={1} md={2} className="g-2">
                    {[product.image, ...product.images].map((x) => (
                      <Col key={x}>
                        <Card>
                          <Button
                            className="thumbnail"
                            type="button"
                            variant="light"
                            onClick={() => setSelectedImage(x)}
                          >
                            <Card.Img
                              variatn="top"
                              src={x}
                              alt="product"
                            ></Card.Img>
                          </Button>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  Select Size:
                  {product.sizes.length == 0 ? (
                    <Select
                      defaultValue={{ value: 'One Size', label: 'One Size' }}
                      options={{ value: 'One Size', label: 'One Size' }}
                      isDisabled={true}
                    />
                  ) : (
                    <Select
                      onChange={(e) => setSizes(e)}
                      options={product.sizes}
                    />
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  Description:
                  <p>{product.description}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col> €{product.price}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {product.countInStock > 0 ? (
                            <Badge bg="success">In Stock</Badge>
                          ) : (
                            <Badge bg="danger">Unavailable</Badge>
                          )}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <div className="d-grid">
                          <Button onClick={addToCartHandler} variant="primary">
                            Add to Cart
                          </Button>
                        </div>
                      </ListGroup.Item>
                    )}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}
