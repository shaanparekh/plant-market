import userTypes from "./user.types";
import { auth, GoogleProvider } from "../../firebase/utils";

export const setCurrentUser = user =>({
    type: userTypes.SET_CURRENT_USER,
    payload: user
});

export const signInWithGoogle = () => async dispatch => {
    try {
        await auth.signInWithPopup(GoogleProvider)
        .then(() => {
            dispatch({
                type: userTypes.SIGN_IN_SUCCESS,
                payload: true
            })
        });
    } catch (err){
        // console.log(err);
    }  
}

