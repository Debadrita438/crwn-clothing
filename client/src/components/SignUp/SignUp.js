import { useState } from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import { signUpStart } from '../../redux/user/userAction';

import { SignUpContainer, SignUpTitle } from './SignUp.styles';


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({  
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('Password don\'t match, please try again.');
            return;
        } 
        signUpStart({ displayName, email, password });
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }

    return (  
        <SignUpContainer>
            <SignUpTitle>I don't have an account</SignUpTitle>
            <span style={{color: '#c4c3ca'}}>Sign up with your email and password</span>

            <form onSubmit={ handleSubmit }>
                <FormInput 
                    type='text'
                    name='displayName'
                    value={ displayName }
                    onChange={ handleChange }
                    label='Display Name'
                    required
                />

                <FormInput 
                    type='email'
                    name='email'
                    value={ email }
                    onChange={ handleChange }
                    label='Email'
                    required
                />

                <FormInput 
                    type='password'
                    name='password'
                    value={ password }
                    onChange={ handleChange }
                    label='Password'
                    required
                />

                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={ confirmPassword }
                    onChange={ handleChange }
                    label='Confirm Password'
                    required
                />

                <div className="buttons">
                    <CustomButton type="submit">Sign Up</CustomButton>
                </div>
            </form>
        </SignUpContainer>
    );
    
}
 
export default connect(null, mapDispatchToProps)(SignUp);