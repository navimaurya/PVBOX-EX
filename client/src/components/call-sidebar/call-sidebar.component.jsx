import React from "react";

const CallSidebar = () => (
    <div className="tab-pane" id="calls-content">
        <div className="d-flex flex-column h-100">
            <div className="hide-scrollbar h-100" id="callContactsList">
                {/* <!-- Chat Header Start --> */}
                <div className="sidebar-header sticky-top p-2">

                    <div className="d-flex justify-content-between align-items-center">
                        {/* <!-- Chat Tab Pane Title Start --> */}
                        <h5 className="font-weight-semibold mb-0">Calls</h5>
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
                                            data-target="#inviteOthers">Invite Others</a>
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

                {/* <!-- Call Contact List Start --> */}
                <ul className="contacts-list" id="callLogTab" data-call-list="">

                    {/* <!-- Call Item Start --> */}
                    <li className="contacts-item incoming active">
                        <a href="#" className="media-link"></a>
                        <div className="contacts-link">
                            <div className="avatar">
                                <img src="/assets/media/avatar/e6935809__2.png" alt="" />
                            </div>
                            <div className="contacts-content">
                                <div className="contacts-info">
                                    <h6 className="chat-name text-truncate">Catherine Richardson</h6>
                                </div>
                                <div className="contacts-texts">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z">
                                        </path>
                                        <path
                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-16 text-muted mr-1" src=".//assets/media/heroicons/solid/phone-incoming.svg" alt=""/> --> */}
                                    <p className="text-muted mb-0">Just now</p>
                                </div>
                            </div>
                            <div className="contacts-action">
                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                    type="button">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-20" src=".//assets/media/heroicons/outline/phone.svg" alt=""/> --> */}
                                </button>
                            </div>
                        </div>
                    </li>
                    {/* <!-- Call Item End --> */}

                    {/* <!-- Call Item Start --> */}
                    <li className="contacts-item outgoing">
                        <a href="#" className="media-link"></a>
                        <div className="contacts-link outgoing">
                            <div className="avatar bg-info text-light">
                                <span>EW</span>
                            </div>
                            <div className="contacts-content">
                                <div className="contacts-info">
                                    <h6 className="chat-name text-truncate">Eva Walker</h6>
                                </div>
                                <div className="contacts-texts">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z">
                                        </path>
                                        <path
                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-16 text-muted mr-1" src=".//assets/media/heroicons/solid/phone-outgoing.svg" alt=""/> --> */}
                                    <p className="text-muted mb-0">5 mins ago</p>
                                </div>
                            </div>
                            <div className="contacts-action">
                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                    type="button">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-20" src=".//assets/media/heroicons/outline/phone.svg" alt=""/> --> */}
                                </button>
                            </div>
                        </div>
                    </li>
                    {/* <!-- Call Item End --> */}

                    {/* <!-- Call Item Start --> */}
                    <li className="contacts-item missed">
                        <a href="#" className="media-link"></a>
                        <div className="contacts-link missed">
                            <div className="avatar">
                                <img src="/assets/media/avatar/b8526894__3.png" alt="" />
                            </div>
                            <div className="contacts-content">
                                <div className="contacts-info">
                                    <h6 className="chat-name text-truncate">Christopher Garcia</h6>
                                </div>
                                <div className="contacts-texts">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-16 text-danger mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z">
                                        </path>
                                        <path
                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-16 text-danger mr-1" src=".//assets/media/heroicons/solid/phone-incoming.svg" alt=""/> --> */}
                                    <p className="text-danger mb-0">20 mins ago</p>
                                </div>
                            </div>
                            <div className="contacts-action">
                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                    type="button">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-20" src=".//assets/media/heroicons/outline/phone.svg" alt=""/> --> */}
                                </button>
                            </div>
                        </div>
                    </li>
                    {/* <!-- Call Item End --> */}

                    {/* <!-- Call Item Start --> */}
                    <li className="contacts-item outgoing">
                        <a href="#" className="media-link"></a>
                        <div className="contacts-link outgoing">
                            <div className="avatar">
                                <img src="/assets/media/avatar/145b4969__4.png" alt="" />
                            </div>
                            <div className="contacts-content">
                                <div className="contacts-info">
                                    <h6 className="chat-name text-truncate">Christina Turner</h6>
                                </div>
                                <div className="contacts-texts">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z">
                                        </path>
                                        <path
                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-16 text-muted mr-1" src=".//assets/media/heroicons/solid/phone-outgoing.svg" alt=""/> --> */}
                                    <p className="text-muted mb-0">4 hour ago</p>
                                </div>
                            </div>
                            <div className="contacts-action">
                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                    type="button">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-20" src=".//assets/media/heroicons/outline/phone.svg" alt=""/> --> */}
                                </button>
                            </div>
                        </div>
                    </li>
                    {/* <!-- Call Item End --> */}

                    {/* <!-- Call Item Start --> */}
                    <li className="contacts-item incoming">
                        <a href="#" className="media-link"></a>
                        <div className="contacts-link incoming">
                            <div className="avatar">
                                <img src="/assets/media/avatar/b5ffd900__5.png" alt="" />
                            </div>
                            <div className="contacts-content">
                                <div className="contacts-info">
                                    <h6 className="chat-name text-truncate">Tammy Martinez</h6>
                                </div>
                                <div className="contacts-texts">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z">
                                        </path>
                                        <path
                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-16 text-muted mr-1" src=".//assets/media/heroicons/solid/phone-incoming.svg" alt=""/> --> */}
                                    <p className="text-muted mb-0">Yesterday</p>
                                </div>
                            </div>
                            <div className="contacts-action">
                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                    type="button">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-20" src=".//assets/media/heroicons/outline/phone.svg" alt=""/> --> */}
                                </button>
                            </div>
                        </div>
                    </li>
                    {/* <!-- Call Item End --> */}

                    {/* <!-- Call Item Start --> */}
                    <li className="contacts-item incoming">
                        <a href="#" className="media-link"></a>
                        <div className="contacts-link incoming">
                            <div className="avatar">
                                <img src="/assets/media/avatar/29e0af52__6.png" alt="" />
                            </div>
                            <div className="contacts-content">
                                <div className="contacts-info">
                                    <h6 className="chat-name text-truncate">Bonnie Torres</h6>
                                </div>
                                <div className="contacts-texts">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z">
                                        </path>
                                        <path
                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-16 text-muted mr-1" src=".//assets/media/heroicons/solid/phone-incoming.svg" alt=""/> --> */}
                                    <p className="text-muted mb-0">12/06/2020</p>
                                </div>
                            </div>
                            <div className="contacts-action">
                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                    type="button">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-20" src=".//assets/media/heroicons/outline/phone.svg" alt=""/> --> */}
                                </button>
                            </div>
                        </div>
                    </li>
                    {/* <!-- Call Item End --> */}

                    {/* <!-- Call Item Start --> */}
                    <li className="contacts-item outgoing">
                        <a href="#" className="media-link"></a>
                        <div className="contacts-link outgoing">
                            <div className="avatar">
                                <img src="/assets/media/avatar/5a1081aa__7.png" alt="" />
                            </div>
                            <div className="contacts-content">
                                <div className="contacts-info">
                                    <h6 className="chat-name text-truncate">Jacqueline James</h6>
                                </div>
                                <div className="contacts-texts">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z">
                                        </path>
                                        <path
                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-16 text-muted mr-1" src=".//assets/media/heroicons/solid/phone-outgoing.svg" alt=""/> --> */}
                                    <p className="text-muted mb-0">16/05/2020</p>
                                </div>
                            </div>
                            <div className="contacts-action">
                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
                                    type="button">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <!-- <img className="injectable hw-20" src=".//assets/media/heroicons/outline/phone.svg" alt=""/> --> */}
                                </button>
                            </div>
                        </div>
                    </li>
                    {/* <!-- Call Item End --> */}

                </ul>
                {/* <!-- Call Contact List Start --> */}
            </div>
        </div>
    </div>
)

export default CallSidebar;