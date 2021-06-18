import { Component } from 'react';
import { connect } from 'react-redux';

import { emailSignInStart, googleSignInStart } from '../../redux/user/userAction';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import { SignInButton, SignInContainer, TitleStyles } from './SignIn.styles';

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        const { emailSignInStart } = this.props;
        
        emailSignInStart(email, password);
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() { 
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <TitleStyles>I already have an account</TitleStyles>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        type='email' 
                        name='email' 
                        value={ this.state.email } 
                        handleChange={ this.handleChange }
                        label='Email'
                        required  
                    />

                    <FormInput 
                        type='password' 
                        name='password' 
                        value={ this.state.password } 
                        handleChange={ this.handleChange }
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
}
 
export default connect(null,mapDispatchToProps)(SignIn);