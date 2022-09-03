import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { Store } from '../../Store';
import axios from 'axios';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

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
      <Card.Text>€{product.price}</Card.Text>
      {product.countInStock === 0 ? (
        <Button variant="light" disabled>
          {' '}
          Out of stock
        </Button>
      ) : (
        <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
      )}
    </Card>
  );
}

export default Product;
