import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectChatList } from "../../redux/chat/chat-selector";
import ChatListItem from "../chat-list-item/chat-list-item.component";

const ChatList = ({ chatList, openChat }) => {
    return (
        <ul className="contacts-list" id="chatContactTab" data-chat-list="">
            {/* <!-- Chat Item Start --> */}
            {
                chatList.map(element => (
                    <ChatListItem key={element._id} {...element} />
                ))
            }
            {/* <li className="contacts-item friends">
            <a className="contacts-link" href="./06cd7173__chat-1.html">
                <div className="avatar avatar-online">
                    <img src="/assets/media/avatar/e6935809__2.png" alt="" />
                </div>
                <div className="contacts-content">
                    <div className="contacts-info">
                        <h6 className="chat-name text-truncate">Catherine Richardson</h6>
                        <div className="chat-time">Just now</div>
                    </div>
                    <div className="contacts-texts">
                        <p className="text-truncate">I&#226;&#128;&#153;m sorry, I
                            didn&#226;&#128;&#153;t catch that. Could you please repeat?</p>
                    </div>
                </div>
            </a>
        </li> */}

        </ul>
    )
}
const mapStateToProps = createStructuredSelector({
    chatList: selectChatList,
});

export default connect(mapStateToProps)(ChatList);