import {combineReducers} from "redux";
import Users from "./reducer-user.js";
import {selected} from "./reducer-selected.js";

const combineData= combineReducers({
  user:Users,
  selected:selected
});

export default combineData;
