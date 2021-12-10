import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';


import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Auth = ({isLogedIn, addNewMessagesStart}) => {
    return (<div className='container'>
        {
            isLogedIn ? <Redirect to ='/chats/' />
            :<div className='row py-4'>
                <div className="col-md-6">
                    <SignIn />
                </div>
                <div className="col-md-6">
                    <SignUp />
                </div>
            </div>
        }
        
    </div>)
}
const mapStateToProps = state => ({
    isLogedIn : !!state.user.currentUser
})

export default connect(mapStateToProps)(Auth);