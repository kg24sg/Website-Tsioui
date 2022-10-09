import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../../Store';
import { getError } from '../../utils';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, isFavorite: action.payload };
    case 'FETCH_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
        isFavorite: false,
      };
    case 'ADD_REQUEST':
      return { ...state, loadingAdd: true, isFavorite: true };
    case 'ADD_SUCCESS':
      return { ...state, loadingAdd: false, isFavorite: true };
    case 'ADD_FAIL':
      return { ...state, loadingAdd: false, isFavorite: false };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true, isFavorite: false };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, isFavorite: false };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false, isFavorite: true };

    default:
      return state;
  }
};
export default function FavouriteButton(props) {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { userInfo } = state;
  const { favoritePressed } = props;
  const { setfavoritePressed } = props;
  const [{ loading, error, loadingAdd, isFavorite, loadingDelete }, dispatch] =
    useReducer(reducer, {
      loadingAdd: true,
      error: '',
      loadingAdd: false,
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userInfo) {
          dispatch({ type: 'FETCH_REQUEST' });
          const { data } = await axios.get(
            `/api/favorites/peruser/${props.userFrom._id}/${props.productToFavorite._id}`,
            {
              headers: { Authorization: `Bearer ${userInfo.token}` },
            }
          );
          console.log(data);

          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } else {
        }
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, []);

  const addToFavoriteHandler = async (e) => {
    e.preventDefault();
    setfavoritePressed(true);
    try {
      if (userInfo) {
        dispatch({ type: 'ADD_REQUEST' });
        await axios.post(
          `/api/favorites/add`,
          {
            product: props.productToFavorite,
            user: props.userFrom,
          },
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({ type: 'ADD_SUCCESS' });
        toast.success('Product updates succesfully');
      } else {
        toast.info('Please Sign In first to add a product to your favourites!');
      }
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'ADD_FAIL' });
    }
  };

  const removeFromFavoriteHandler = async (e) => {
    e.preventDefault();
    setfavoritePressed(true);
    try {
      if (userInfo) {
        dispatch({ type: 'DELETE_REQUEST' });
        await axios.delete(
          `/api/favorites/delete/${props.userFrom._id}/${props.productToFavorite._id}`,
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({ type: 'DELETE_SUCCESS' });
        toast.success('Product added to your favorites');
      } else {
        toast.info('Please Sign In first to add a product to your favourites!');
      }
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'DELETE_FAIL' });
    }
  };
  return (
    <div>
      {isFavorite ? (
        <MdFavorite
          type="button"
          onClick={removeFromFavoriteHandler}
        ></MdFavorite>
      ) : (
        <MdFavoriteBorder
          type="button"
          onClick={addToFavoriteHandler}
        ></MdFavoriteBorder>
      )}
    </div>
  );
}
