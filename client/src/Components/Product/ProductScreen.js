import React, { Component, useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Product from './Product';
import LoadingBox from '../globalFunctions/LoadingBox';
import MessageBox from '../globalFunctions/MessageBox';
import { getError } from '../../utils';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function ProductScreen(props) {
  const { favoritePressed } = props;
  const { setfavoritePressed } = props;
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <main className="main-products">
          <h1>
            Featured Products
            <div className="products">
              {loading ? (
                <LoadingBox />
              ) : error ? (
                <div>
                  <MessageBox variant="danger">{error}</MessageBox>
                </div>
              ) : (
                <Row>
                  {products.map((product) => (
                    <Col
                      key={product.slug}
                      sm={6}
                      md={4}
                      lg={3}
                      className="mb-3"
                    >
                      <Product
                        favoritePressed={favoritePressed}
                        setfavoritePressed={setfavoritePressed}
                        product={product}
                      ></Product>
                    </Col>
                  ))}
                </Row>
              )}
            </div>
          </h1>
        </main>
      </div>
    </>
  );
}
