import React from 'react';
import { useDispatch } from "react-redux";
import { signUpAction } from '../../../../store/actions';

const TC = () => {
    const dispatch = useDispatch();
  
    const switchToCreate = () => {
      dispatch(signUpAction.setSignUpLevel("create"));
    };
    return (
        <div>
            TC
            <button onClick={switchToCreate}>Da pada</button>
        </div>
    )
}

export default TC;
