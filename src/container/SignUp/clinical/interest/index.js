import React from 'react';
import { useDispatch } from "react-redux";
import { signUpAction } from "../../../../store/actions";

const Interest = () => {
    const dispatch = useDispatch();

    const switchToTC = () => {
      dispatch(signUpAction.setSignUpLevel("tc"));
    };

    const switchToSetUp = () => {
        dispatch(signUpAction.setSignUpLevel("setUp"));
      };
    return (
        <div>
            Interest
            <button className='btn btn-success' onClick={switchToSetUp}>Pada</button>
            <button className='btn btn-warning' onClick={switchToTC}>Meeuveee</button>
        </div>
    )
}

export default Interest;
