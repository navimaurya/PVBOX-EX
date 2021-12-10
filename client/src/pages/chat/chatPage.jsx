import React from "react";
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import ChatBody from "../../components/chat-body/chat-body.component";
import ChatSideBar from "../../components/chat-sidebar/chat-sidebar.component";
import Empty from "../../components/empty/empty.component";
import './chatPage.style.css'

const ChatPage = ({ match, isOpened }) => (
    <>
        <ChatSideBar />
        <main className="main main-visible">
            {
                isOpened ? <ChatBody/>
                : <Empty/>
            }
            {/* <Route exact path={match.path} render={() => <h1>Hello developer</h1>} />
            <Route path={`${match.path}/:username`} component={} /> */}
        </main>
    </>
)
const mapStateToProps =state=>({
    isOpened : state.openChat.friend
});

export default connect(mapStateToProps)(ChatPage);