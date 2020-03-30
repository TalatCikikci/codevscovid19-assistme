import { combineReducers } from "redux";
import requester from "./requester";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  requester,
  errors,
  messages
});