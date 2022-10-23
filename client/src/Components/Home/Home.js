import React from 'react';
import CarouselCategories from './CarouselCategories';
import HomeCarousel from './HomeCarousel';
export default function Home() {
  return (
    <>
      <HomeCarousel />
      <CarouselCategories id="categories_carousel" />
    </>
  );
}
