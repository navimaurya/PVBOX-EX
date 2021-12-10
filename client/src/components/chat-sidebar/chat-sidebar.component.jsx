import React from "react";
import ListHead from "../list-head/list-head.component";
import ChatList from "../chat-list/chat-list.component";

const ChatSideBar = () => (
    <>
    <aside className="sidebar">
        <div className="tab-content">
            <div className="tab-pane active" id="chats-content">
                <div className="d-flex flex-column h-100">
                    <div className="hide-scrollbar h-100" id="chatContactsList">

                        <ListHead />
                        <ChatList />

                    </div>
                </div>
            </div>
        </div>
    </aside>
    </>
)

export default ChatSideBar;