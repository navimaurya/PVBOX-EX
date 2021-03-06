import React, { Component, useRef, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectChats } from '../../redux/chat/chat-selector';
import { selectOpenChatFriend } from '../../redux/opend-chat/open-chat-selector';
import { chatFetchStart } from '../../redux/chat/chat-action';

import MessageDay from '../message-day/message-day.component';
import Message from '../message/message.component';

// const MessageBody = (props) =>{

//     useEffect(() => {
//        const { chats, state, chatFetchStart } = props;
//         if (!chats[state._id]) {
//             const id = props.activeChat._id;
            // chatFetchStart(id)
//         }
//         scrollToBottom();
        
//     }, [])


//     const { state, chats } = props;
//     const usersChats = chats[state._id]
//     return (<div className="chat-content p-2">
//             <div className="container">
//                 {/* <!-- Message Day Start --> */}
//                 {
//                     !!usersChats ?
//                         usersChats.map(state => {

//                             return (
//                                 // <MessageDay day={state.sent}>
//                                 <Message key={state._id} data={state} />
//                                 // </MessageDay>
//                             )
//                         })
//                         : (
//                             // <MessageDay day={state.sent}>
//                             <Message data={state} />
//                             // </MessageDay>
//                         )
//                 }

//                 <div style={{ float: "left", clear: "both" }}
//                     ref={(el) => { messagesEnd = el; }}>
//                 </div>
//             </div>

//             {/* <!-- Scroll to finish --> */}
//             <div className="chat-finished" id="chat-finished"></div>
//         </div>)
// }


class MessageBody extends Component {
    state = {id: null}
    scrollToBottom = (el) => {
        el.scrollIntoView({ behavior: "" });
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "auto" });
    }

    componentDidMount() {
        const { chats, state, chatFetchStart } = this.props;
        if (!chats[state._id]) {
            const id = this.props.activeChat._id;
            // chatFetchStart(id)
        }
        this.scrollToBottom();
    }

    componentDidUpdate() {
        const { chats, state, chatFetchStart } = this.props;
        if (!chats[state._id]) {
            const id = this.props.activeChat._id;
            // chatFetchStart(id)
        }
        this.setState({id : state._id})
        this.scrollToBottom();

    }
    shouldComponentUpdate(){
        const { chats, state, chatFetchStart } = this.props;
        if (this.state.id == chats[state._id]) {
            return false;
        }
    }

    render() {
        const { state, chats } = this.props;
        const usersChats = chats[state._id]
        return (<div className="chat-content p-2">
            <div className="container">
                {/* <!-- Message Day Start --> */}
                {
                    !!usersChats ?
                        usersChats.map(state => {

                            return (
                                // <MessageDay day={state.sent}>
                                <Message key={state._id} data={state} />
                                // </MessageDay>
                            )
                        })
                        : (
                            // <MessageDay day={state.sent}>
                            <Message data={state} />
                            // </MessageDay>
                        )
                }

                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>

            {/* <!-- Scroll to finish --> */}
            <div className="chat-finished" id="chat-finished"></div>
        </div>)
    }
}
const mapStateToProps = createStructuredSelector({
    chats: selectChats,
    activeChat: selectOpenChatFriend
})
const mapDispatchToProps = dispatch => ({
    chatFetchStart: (friend) => dispatch((chatFetchStart(friend)))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageBody);