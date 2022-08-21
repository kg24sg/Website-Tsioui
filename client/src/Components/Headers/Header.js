import * as React from 'react';
import Headline from './Headline';
import BrandBarSection from './BrandBarSection';
import NavBarSection from './NavBarSection';

export default function Header(props) {
  return (
    <div>
      <Headline />
      <BrandBarSection
        setIsLogIn={props.setIsLogIn}
        setnameOfUser={props.setIsLogIn}
        setsessionTime={props.setsessionTime}
        isLogIn={props.isLogIn}
      />
      <NavBarSection />
    </div>
  );
}
