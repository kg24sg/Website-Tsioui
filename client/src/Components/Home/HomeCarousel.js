import Button from 'react-bootstrap/Button';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export default function HomeCarousel() {
  return (
    <Carousel fade controls={false} slide interval={3000} pause={false}>
      <Carousel.Item className="fit-content">
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/images/p1.jpg'}
          alt="First slide"
        />
        <Carousel.Caption className="first-carousel-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button className="carousel-buttons" as={Link} to="/shop">
            Shop
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="fit-content">
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/images/p1.jpg'}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="fit-content">
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/images/p1.jpg'}
          alt="Third slide"
        />

        <Carousel.Caption className="third-carousel-caption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button as={Link} to="/shop" className="carousel-buttons">
            Shop
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
