import { HANDLE_SIGN_UP_LEVEL } from "../types";

export const setSignUpLevel = (payload) => ({
    type: HANDLE_SIGN_UP_LEVEL,
    payload
});

export default {
    setSignUpLevel
}