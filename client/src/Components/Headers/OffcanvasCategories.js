import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { GiClothes } from 'react-icons/gi';
export default function OffcanvasCategories(props) {
  const { categories } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <GiClothes size={40} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <GiClothes size={70} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer to={`/search?category=${category}`}>
                  <Nav.Link className="nav-link-category" onClick={handleClose}>
                    {category}
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
