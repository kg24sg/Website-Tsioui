import React, {
  Component,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import LoadingBox from '../globalFunctions/LoadingBox';
import MessageBox from '../globalFunctions/MessageBox';
import { getError } from '../../utils';
import { Store } from '../../Store';
import Product from '../Product/Product';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, favorites: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function FavouriteScreen(props) {
  const { favoritePressed2 } = props;
  const { setfavoritePressed2 } = props;
  //   const [favoritePressed, setFavoritePressed] = useState(false);
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, favorites }, dispatch] = useReducer(
    logger(reducer),
    {
      products: [],
      loading: true,
      error: '',
    }
  );
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(
          `api/favorites/favoriteproducts/${userInfo._id}`,
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        setfavoritePressed2(false);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [favoritePressed2]);

  return (
    <>
      <div>
        <main className="main-products">
          <h1>
            Favorite Products
            <div className="products">
              {loading ? (
                <LoadingBox />
              ) : error ? (
                <div>
                  <MessageBox variant="danger">{error}</MessageBox>
                </div>
              ) : (
                <Row>
                  {favorites.map((favorite) => (
                    <Col
                      key={favorite.slug}
                      sm={6}
                      md={4}
                      lg={3}
                      className="mb-3"
                    >
                      <Product
                        product={favorite}
                        favoritePressed={favoritePressed2}
                        setfavoritePressed={setfavoritePressed2}
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
