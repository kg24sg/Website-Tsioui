import React, { useContext, useReducer, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { Store } from '../../Store';
import LoadingBox from '../globalFunctions/LoadingBox';
import MessageBox from '../globalFunctions/MessageBox';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../../utils';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };
    case 'UPLOAD_REQUEST':
      return { ...state, laodingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return { ...state, laodingUpload: false, errorUpload: '' };
    case 'UPLOAD_FAIL':
      return { ...state, laodingUpload: false, errorUpload: action.payload };
    default:
      return state;
  }
};

export default function CategoryEditScreen() {
  const [{ loading, error, loadingUpdate, laodingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: categoryId } = params;

  const navigate = useNavigate();

  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/categories/${categoryId}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        setImage(data.image);
        dispatch({ type: 'FETCH_SUCCESS' });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [categoryId, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(
        `/api/categories/${categoryId}`,
        {
          _id: categoryId,
          image,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success('Category updated succesfully');
      navigate('/admin/categories');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPDATE_FAIL' });
    }
  };

  const uploadFileHandler = async (e, forImages) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await axios.post('/api/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: 'UPLOAD_SUCCESS' });

      // if (forImages) {
      //   setImages([...images, data.secure_url]);
      // } else {
      setImage(data.secure_url);
      //}
      toast.success('Image uploaded succesfully. click Update to apply it');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
    }
  };

  return (
    <>
      <Container className='"small-container'>
        <Helmet>
          <title>Edit User ${categoryId}</title>
        </Helmet>
        <h1>Edit User ${categoryId}</h1>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="imageFile">
              <Form.Label>Image File</Form.Label>
              <Form.Control
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="imageFile">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                onChange={uploadFileHandler}
              ></Form.Control>
              {laodingUpload && <LoadingBox></LoadingBox>}
            </Form.Group>
            <div className="mb-3">
              <Button disabled={loadingUpdate} type="submit">
                Update
              </Button>
              {loadingUpdate && <LoadingBox></LoadingBox>}
            </div>
          </Form>
        )}
      </Container>
    </>
  );
}
