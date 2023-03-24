import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { Store } from '../../Store';
import axios from 'axios';
import FavouriteButton from '../FavouriteCartScreen/FavouriteButton';
function Product(props) {
  const { product } = props;
  const { favoritePressed } = props;
  const { setfavoritePressed } = props;
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { cartItems },
  } = state;

  const { favourites } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    console.log(item);
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
    return;
  };

  const finilizeAddToCart = async (slug) => {
    navigate(`product/${slug}`);
  };
  return (
    <Card>
      <Link to={`product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
      </Card.Body>
      <Card.Text>
        <Row>
          <Col md={10}>€{product.price}</Col>
          <Col md={2}>
            <FavouriteButton
              productToFavorite={product}
              userFrom={userInfo}
              favoritePressed={favoritePressed}
              setfavoritePressed={setfavoritePressed}
            ></FavouriteButton>
          </Col>
        </Row>
      </Card.Text>
      {product.countInStock === 0 ? (
        <Button variant="light" disabled>
          {' '}
          Out of stock
        </Button>
      ) : (
        <Button onClick={() => finilizeAddToCart(product.slug)}>
          Add to cart
        </Button>
        /* <Button onClick={() => addToCartHandler(product)}>Add to cart</Button> */
      )}
    </Card>
  );
}

export default Product;
