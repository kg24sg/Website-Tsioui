import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

export default function NavBarSection() {
  return (
    <>
      <Nav fill className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link className="navbarlink" href="/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navbarlink" href="/shop">
            Shop
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navbarlink" eventKey="link-2">
            Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navbarlink" eventKey="disabled">
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
