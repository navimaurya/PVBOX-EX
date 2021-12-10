import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

// import HomePage from './pages/home/home';
import ChatPage from './pages/chat/chatPage';
import CallPage from './pages/call/callPage';
import FriendsPage from './pages/friend/friendsPage';
import ProfilePage from './pages/profile/profilePage';
import Navigation from './components/navigation/navigation.component';
import Auth from './pages/auth/authPage';
import AddFriend from './components/addFriend/addFriend.component';

import { appStarterStart } from './redux/starter/starter-action';
import { addNewMessagesStart } from './redux/chat/chat-action';
import { getLoggedInUserStart } from './redux/user/user-action';
import { getFriendListStart } from './redux/friends/friend-action';

import './App.css';

class App extends Component {

  componentDidMount() {
    const { appStarterStart, isLogedIn, getFriendListStart, getLoggedInUser } = this.props;
    setTimeout(() => {
      console.log(isLogedIn);
    }, 3000);
    appStarterStart();
    getLoggedInUser();
    getFriendListStart()

  }
  componentDidUpdate() {
    const { addNewMessagesStart } = this.props;
    addNewMessagesStart();
  }
  render() {
    const { isLogedIn } = this.props;
    return (
      <div className="main-layout">
        <Navigation />
        <Switch>
          {
            isLogedIn ?
              <>
                <Route path='/' exact component={ChatPage} />
                <Route path='/chats' component={ChatPage} />
                <Route path='/calls' component={CallPage} />
                <Route path='/friends' component={FriendsPage} />
                <Route path='/profile' component={ProfilePage} />
              </>
              :
              <>
                <Route path='/' component={Auth} />
                {/* <Redirect to='/chats' /> */}
              </>

          }
        </Switch>
        <AddFriend />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNewMessagesStart: () => dispatch(addNewMessagesStart()),
  appStarterStart: () => dispatch(appStarterStart()),
  getLoggedInUser: () => dispatch(getLoggedInUserStart()),
  getFriendListStart: () => dispatch(getFriendListStart())

})


const mapStateToProps = state => ({
  isLogedIn: state.user.currentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
