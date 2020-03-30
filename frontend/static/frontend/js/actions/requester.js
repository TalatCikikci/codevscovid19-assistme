import axios from "axios";

import {
  GET_REQUEST_LIST,
  DELETE_REQUEST_LIST,
  DELETE_REQUEST_LIST_ITEM,
  ADD_REQUEST_LIST_ITEM,
  GET_ERRORS,
} from "./types";
import { createMessage } from "./messages";

//GET_REQUEST_LIST
export const getRequestList = () => dispatch => {
  axios
    .get('/api/v1/requestlist/')
    .then(res => {
      dispatch({
        type: GET_REQUEST_LIST,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};

//DELETE_REQUEST_LIST
export const deleteRequestList = id => dispatch => {
  axios
    .delete(`/api/v1/requestlist/${id}/`)
    .then(res => {
      dispatch(createMessage({deleteRequestList: "Request List Deleted"}));
      dispatch({
        type: DELETE_REQUEST_LIST,
        payload: id,
      });
    })
    .catch(err => console.log(err));
};

//ADD_REQUEST_LIST_ITEM
export const addRequestListItem = requestListItem => dispatch => {
  axios
    .post('/api/v1/requestlistitem/', requestListItem)
    .then(res => {
      dispatch(createMessage({addRequestListItem: "Request List Item Added"}));
      dispatch({
        type: ADD_REQUEST_LIST_ITEM,
        payload: res.data,
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};

//DELETE_REQUEST_LIST_ITEM
export const deleteRequestListItem = id => dispatch => {
  axios
    .delete(`/api/v1/requestlistitem/${id}/`)
    .then(res => {
      dispatch(createMessage({deleteRequestListItem: "Request List Item Deleted"}));
      dispatch({
        type: DELETE_REQUEST_LIST_ITEM,
        payload: id,
      });
    })
    .catch(err => console.log(err));
};