import { HANDLE_SIGN_UP_LEVEL } from "../types";

const initialState = {
  level: "create",
};

const SignUp = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SIGN_UP_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    default:
      return state;
  }
};

export default SignUp;
