import { combineRecuders } from "redux";

import userReducer from "./user/user.reducer";

export default combineRecuders({
  user: userReducer
});
