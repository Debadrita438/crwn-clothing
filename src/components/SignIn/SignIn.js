import { Component } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import './SignIn.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() { 
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
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

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}
 
export default SignIn;