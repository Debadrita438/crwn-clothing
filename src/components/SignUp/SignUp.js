import { Component } from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import { signUpStart } from '../../redux/user/userAction';

import { SignUpContainer, SignUpTitle } from './SignUp.styles';


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

class SignUp extends Component {
    state = {  
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state; 
        const { signUpStart } = this.props;

        if(password !== confirmPassword) {
            alert('Password don\'t match, please try again.');
            return;
        } 
        signUpStart({ displayName, email, password });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state; 
        return (  
            <SignUpContainer>
                <SignUpTitle>I don't have an account</SignUpTitle>
                <span>Sign up with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={ displayName }
                        onChange={ this.handleChange }
                        label='Display Name'
                        required
                    />

                    <FormInput 
                        type='email'
                        name='email'
                        value={ email }
                        onChange={ this.handleChange }
                        label='Email'
                        required
                    />

                    <FormInput 
                        type='password'
                        name='password'
                        value={ password }
                        onChange={ this.handleChange }
                        label='Password'
                        required
                    />

                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={ confirmPassword }
                        onChange={ this.handleChange }
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
}
 
export default connect(null, mapDispatchToProps)(SignUp);