import { GET_REQUEST_LIST, DELETE_REQUEST_LIST, ADD_REQUEST_LIST_ITEM, DELETE_REQUEST_LIST_ITEM } from "../actions/types";

const initialState = {
  requestList: [],
  requestListItems: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_REQUEST_LIST:
      return {
        ...state,
        requestList: action.payload
      };
    case DELETE_REQUEST_LIST:
      return {
        ...state,
        requestList: []
      };
    case ADD_REQUEST_LIST_ITEM:
      return {
        ...state,
        requestListItems: [...state.requestListItems, action.payload]
      };
    case DELETE_REQUEST_LIST_ITEM:
      return {
        ...state,
        requestListItems: state.requestListItems.filter(request_list_item => request_list_item.id !== action.payload)
      };
    default:
      return state;
  }
}