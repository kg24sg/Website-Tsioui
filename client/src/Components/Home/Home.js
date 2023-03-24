import React, { useEffect, useState } from 'react';
import CarouselCategories from './CarouselCategories';
import CarouselCategoriesSmalldevices from './CarouselCategoriesSmalldevices';
import CarouselCategoriesSmallSmalldevices from './CarouselCategoriesSmallSmalldevices';
import Footer from './Footer';
import HomeCarousel from './HomeCarousel';
export default function Home() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <>
      {windowSize.innerWidth}
      <HomeCarousel />
      {windowSize.innerWidth > 900 ? (
        <CarouselCategories id="categories_carousel" />
      ) : windowSize.innerWidth > 480 ? (
        <CarouselCategoriesSmalldevices />
      ) : (
        <CarouselCategoriesSmallSmalldevices />
      )}
    </>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
