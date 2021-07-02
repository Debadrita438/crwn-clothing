import { useState } from 'react';
import { connect } from 'react-redux';

import { emailSignInStart, googleSignInStart } from '../../redux/user/userAction';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import { SignInButton, SignInContainer, TitleStyles } from './SignIn.styles';

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <SignInContainer>
            <TitleStyles>I already have an account</TitleStyles>
            <span style={{color: '#c4c3ca'}}>Sign in with your email and password</span>

            <form onSubmit={ handleSubmit }>
                <FormInput 
                    type='email' 
                    name='email' 
                    value={ email } 
                    handleChange={ handleChange }
                    label='Email'
                    required  
                />

                <FormInput 
                    type='password' 
                    name='password' 
                    value={ password } 
                    handleChange={ handleChange }
                    label='Password'  
                    required
                />

                <SignInButton>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type='button' onClick={ googleSignInStart } isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </SignInButton>

            </form>
        </SignInContainer>
    );
    
}
 
export default connect(null,mapDispatchToProps)(SignIn);