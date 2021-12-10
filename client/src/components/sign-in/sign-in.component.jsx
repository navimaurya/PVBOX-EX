import React,  {Component } from 'react';
import { connect } from 'react-redux';
import "./sign-in.style.css";


import Input from '../input/input.component';
import Button from '../custom-button/custom-button.component';
import { googleSignInStart, userIdSignInStart } from '../../redux/user/user-action';


class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            userId: "",
            password: ''
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { userId, password } = this.state;
        const { userIdSignInStart } = this.props;
        // emailSignInStart(email, password)
        userIdSignInStart(userId, password)
    }
    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }


    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className='sign-in'>
                <h2>I have an account</h2>
                <span>Signin with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Input name='userId' type='text' handleChange={
                        this.handleChange
                    }
                        label="userId" value={this.state.userId}
                        required />

                    <Input name='password' type='password' handleChange={
                        this.handleChange
                    }
                        label="Password"
                        value={this.state.password}
                        required />
                    <Button type='SUBMIT'>SUBMIT</Button>
                    <Button type='button' onClick={googleSignInStart} >{' '}Sign In With Google {' '}</Button>
                </form>
            </div>
        )
    }
}
const mapDispatchToPropd = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    userIdSignInStart: (userId, password) => dispatch(userIdSignInStart({ userId, password }))
})
export default connect(null, mapDispatchToPropd)(SignIn);