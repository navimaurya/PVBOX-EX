import React from "react";

const ListHead = () => {
    return (
        <div class="sidebar-header sticky-top p-2">

            <div class="d-flex justify-content-between align-items-center">

                <h5 class="font-weight-semibold mb-0">Chats</h5>


                <ul class="nav flex-nowrap">

                    <li class="nav-item list-inline-item mr-1">
                        <a class="nav-link text-muted px-1" href="#" title="Notifications" role="button" data-toggle="modal" data-target="#notificationModal">

                            <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                                </path>
                            </svg>



                        </a>
                    </li>


                    <li class="nav-item list-inline-item d-block d-xl-none mr-1">
                        <a class="nav-link text-muted px-1" href="#" title="Appbar" data-toggle-appbar="">

                            <svg class="hw-20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                </path>
                            </svg>



                        </a>
                    </li>

                    <li class="nav-item list-inline-item mr-0">
                        <div class="dropdown">
                            <a class="nav-link text-muted px-1" href="#" role="button" title="Details" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                                    </path>
                                </svg>



                            </a>

                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#" role="button" data-toggle="modal" data-target="#startConversation">New Chat</a>
                                <a class="dropdown-item" href="#" role="button" data-toggle="modal" data-target="#createGroup">Create Group</a>
                                <a class="dropdown-item" href="#" role="button" data-toggle="modal" data-target="#inviteOthers">Invite Others</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>



            <div class="sidebar-sub-header">

                <div class="dropdown mr-2">

                    <button class="btn btn-outline-default dropdown-toggle" type="button" data-chat-filter-list="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        All Chats
                    </button>



                    <div class="dropdown-menu">
                        <a class="dropdown-item" data-chat-filter="" data-select="all-chats" href="#">All Chats</a>
                        <a class="dropdown-item" data-chat-filter="" data-select="friends" href="#">Friends</a>
                        <a class="dropdown-item" data-chat-filter="" data-select="groups" href="#">Groups</a>
                        <a class="dropdown-item" data-chat-filter="" data-select="unread" href="#">Unread</a>
                        <a class="dropdown-item" data-chat-filter="" data-select="archived" href="#">Archived</a>
                    </div>

                </div>



                <form class="form-inline">
                    <div class="input-group">
                        <input type="text" class="form-control search border-right-0 transparent-bg pr-0" placeholder="Search users" />
                        <div class="input-group-append">
                            <div class="input-group-text transparent-bg border-left-0" role="button">

                                <svg class="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ListHead;