import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss'
import Button from '../forms/Button';
import { signInWithGoogle } from '../../redux/User/user.actions'; 
import { useDispatch, useSelector } from 'react-redux';

const mapState = ({user}) => ({
    signInSuccess: user.signInSuccess
});

const SignIn = props => {

    const {signInSuccess} = useSelector(mapState);
    const dispatch = useDispatch();

    useEffect(() => {
        if(signInSuccess){
            props.history.push('/');
        }
    }, [signInSuccess])

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        dispatch(signInWithGoogle());
    }

        return(
        <div className="signin">
            <div className="wrap">
                <h2> 
                    Login
                </h2>
                <div className = "formWrap">
                    <form onSubmit={handleSubmit}>
                        <div className="socialSignIn">
                            <div className="row">
                                <Button onClick = {handleGoogleSignIn}>
                                    Sign In with Google
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    }

export default withRouter(SignIn);