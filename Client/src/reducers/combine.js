import {combineReducers} from "redux";
import Users from "./reducer-user.js";
import Admins from "./reducer-admin.js";

const combineData= combineReducers({
  user:Users,
  admin:Admins
});

export default combineData;
