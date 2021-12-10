import React from "react";
import { connect } from "react-redux";
import FriendListItem from "../friend-list-item/friend-list-item.component";
const FirendSidebar = ({friendsList, viewFriend}) => {
    return (
    <div className="tab-pane" id="friends-content">
        <div className="d-flex flex-column h-100">
            <div className="hide-scrollbar" id="friendsList">
                {/* <!-- Chat Header Start --> */}
                <div className="sidebar-header sticky-top p-2">

                    <div className="d-flex justify-content-between align-items-center">
                        {/* <!-- Chat Tab Pane Title Start --> */}
                        <h5 className="font-weight-semibold mb-0">Friends</h5>
                        {/* <!-- Chat Tab Pane Title End --> */}

                        <ul className="nav flex-nowrap">

                            <li className="nav-item list-inline-item mr-1">
                                <a className="nav-link text-muted px-1" href="#" title="Notifications"
                                    role="button" data-toggle="modal" data-target="#notificationModal">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img src=".//assets/media/heroicons/outline/bell.svg" alt="" className="injectable hw-20"> --> */}
                                </a>
                            </li>

                            <li className="nav-item list-inline-item mr-0">
                                <div className="dropdown">
                                    <a className="nav-link text-muted px-1" href="#" role="button"
                                        title="Details" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        {/* <!-- Default :: Inline SVG --> */}
                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                                            </path>
                                        </svg>

                                        {/* <!-- Alternate :: External File link --> */}
                                        {/* <!-- <img src=".//assets/media/heroicons/outline/dots-vertical.svg" alt="" className="injectable hw-20"> --> */}
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#" role="button" data-toggle="modal"
                                            data-target="#startConversation">New Chat</a>
                                        <a className="dropdown-item" href="#" role="button" data-toggle="modal"
                                            data-target="#createGroup">Create Group</a>
                                        <a className="dropdown-item" href="#" role="button" data-toggle="modal"
                                            data-target="#inviteOthers">Add Friend</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>


                    {/* <!-- Sidebar Header Start --> */}
                    <div className="sidebar-sub-header">
                        {/* <!-- Sidebar Header Dropdown Start --> */}
                        <div className="dropdown mr-2">
                            {/* <!-- Dropdown Button Start --> */}
                            <button className="btn btn-outline-default dropdown-toggle" type="button"
                                data-chat-filter-list="" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                All Chats
                            </button>
                            {/* <!-- Dropdown Button End --> */}

                            {/* <!-- Dropdown Menu Start --> */}
                            <div className="dropdown-menu">
                                <a className="dropdown-item" data-chat-filter="" data-select="all-chats"
                                    href="#">All Chats</a>
                                <a className="dropdown-item" data-chat-filter="" data-select="friends"
                                    href="#">Friends</a>
                                <a className="dropdown-item" data-chat-filter="" data-select="groups"
                                    href="#">Groups</a>
                                <a className="dropdown-item" data-chat-filter="" data-select="unread"
                                    href="#">Unread</a>
                                <a className="dropdown-item" data-chat-filter="" data-select="archived"
                                    href="#">Archived</a>
                            </div>
                            {/* <!-- Dropdown Menu End --> */}
                        </div>
                        {/* <!-- Sidebar Header Dropdown End --> */}

                        {/* <!-- Sidebar Search Start --> */}
                        <form className="form-inline">
                            <div className="input-group">
                                <input type="text"
                                    className="form-control search border-right-0 transparent-bg pr-0"
                                    placeholder="Search users" />
                                <div className="input-group-append">
                                    <div className="input-group-text transparent-bg border-left-0"
                                        role="button">
                                        {/* <!-- Default :: Inline SVG --> */}
                                        <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>

                                        {/* <!-- Alternate :: External File link --> */}
                                        {/* <!-- <img className="injectable hw-20" src=".//assets/media/heroicons/outline/search.svg" alt=""/> --> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* <!-- Sidebar Search End --> */}
                    </div>
                    {/* <!-- Sidebar Header End --> */}
                </div>
                {/* <!-- Chat Header End --> */}

                {/* <!-- Friends Contact List Start --> */}
                <ul className="contacts-list" id="friendsTab" data-friends-list="">
                    {/* <li key={0}>
                        <small className="font-weight-medium text-uppercase text-muted">{chatTag}</small>
                    </li>  */}
                    {   
                        friendsList.map((item )=> <FriendListItem onClick={()=>viewFriend(item)} data={item} key={item._id}/> )
                    }       
                </ul>
                {/* <!-- Friends Contact List End --> */}
            </div>
        </div>
    </div>  
)
}
const mapStateToProps = state => ({
    friendsList : state.friends.list
})

export default connect(mapStateToProps)(FirendSidebar);

