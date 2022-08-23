import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { Store } from '../../Store';

function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const addToCartHandler = () => {
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity: 1 },
    });
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
      <Button onClick={addToCartHandler}>Add to cart</Button>
    </Card>
  );
}

export default Product;
