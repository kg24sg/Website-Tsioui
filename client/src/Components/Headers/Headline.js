import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Headline() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Carousel
        slide
        className="carousel-headline"
        indicators=""
        nextIcon=""
        prevIcon=""
      >
        <Carousel.Item interval="2000">
          <h5>Find your own style...</h5>
        </Carousel.Item>
        <Carousel.Item interval="2000">
          <h5>Be different!</h5>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
