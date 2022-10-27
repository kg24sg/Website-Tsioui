import Button from 'react-bootstrap/Button';
import React, { useContext, useEffect, useReducer } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useNavigate } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { Store } from '../../Store';
import axios from 'axios';
import { getError } from '../../utils';
import LoadingBox from '../globalFunctions/LoadingBox';
import MessageBox from '../globalFunctions/MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, categories: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default function CarouselCategories() {
  const navigate = useNavigate();
  const [{ loading, error, categories }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fecthData = async () => {
      try {
        dispatch({ type: 'FTECH_REQUEST' });
        const { data } = await axios.get(`/api/categories`);
        console.log(data);
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: data,
        });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fecthData();
  }, [userInfo]);
  return (
    <div>
      <h3 className="h3-header ">
        <a>Categories</a>
      </h3>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="bg-dark bg-opacity-25 container-fluid">
          <Carousel style={{ height: 500 }}>
            {categories.map((category, index) => (
              <Carousel.Item style={{ height: 500 }}>
                <Stack
                  direction="horizontal"
                  className="h-100 justify-content-center align-items-center"
                  gap={5}
                >
                  {/* {categories.map((category) => ( */}
                  <Card
                    className="carousel-category "
                    style={{ width: '18rem' }}
                  >
                    <img
                      src={
                        categories[
                          ((index % 3) + parseInt(index / 3) * 3) %
                            categories.length
                        ].image
                      }
                      className="card-img-top carousel-category"
                      alt={
                        categories[
                          ((index % 3) + parseInt(index / 3) * 3) %
                            categories.length
                        ].name
                      }
                    />
                    <Card.Body>
                      <Card.Title>
                        {
                          categories[
                            ((index % 3) + parseInt(index / 3) * 3) %
                              categories.length
                          ].name
                        }
                      </Card.Title>
                      <Card.Text>
                        {((index % 3) + parseInt(index / 3) * 3) %
                          categories.length}
                        + Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card
                    className=" carousel-category"
                    style={{ width: '18rem' }}
                  >
                    <img
                      src={
                        categories[
                          (((index + 1) % 3) + parseInt((index + 1) / 3) * 3) %
                            categories.length
                        ].image
                      }
                      className="card-img-top carousel-category"
                      alt={
                        categories[
                          (((index + 1) % 3) + parseInt((index + 1) / 3) * 3) %
                            categories.length
                        ].name
                      }
                    />
                    <Card.Body>
                      <Card.Title>
                        {
                          categories[
                            (((index + 1) % 3) +
                              parseInt((index + 1) / 3) * 3) %
                              categories.length
                          ].name
                        }
                      </Card.Title>
                      <Card.Text>
                        {(((index + 1) % 3) + parseInt((index + 1) / 3) * 3) %
                          4}{' '}
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card
                    className="carousel-category"
                    style={{ width: '18rem' }}
                  >
                    <img
                      src={
                        categories[
                          (((index + 2) % 3) + parseInt((index + 2) / 3) * 3) %
                            4
                        ].image
                      }
                      className="card-img-top carousel-category"
                      alt={
                        categories[
                          (((index + 2) % 3) + parseInt((index + 2) / 3) * 3) %
                            4
                        ].name
                      }
                    />
                    <Card.Body>
                      <Card.Title>
                        {
                          categories[
                            (((index + 2) % 3) +
                              parseInt((index + 2) / 3) * 3) %
                              4
                          ].name
                        }
                      </Card.Title>
                      <Card.Text>
                        {(((index + 2) % 3) + parseInt((index + 2) / 3) * 3) %
                          4}
                        + Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Stack>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}
