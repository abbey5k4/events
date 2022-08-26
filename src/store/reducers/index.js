import { combineReducers } from "redux";
import SignUp from "./signUpReducer"


const appReducer = combineReducers({
    signUp: SignUp
});

export default appReducer;