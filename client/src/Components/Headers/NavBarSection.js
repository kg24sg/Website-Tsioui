import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function NavBarSection() {
  return (
    <>
      <Nav fill className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to="/home" className="navbarlink">
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
