import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import Empty from "../empty/empty.component";
import ChatBody from "../chat-body/chat-body.component";
import { openChatStart } from "../../redux/opend-chat/open-chat-action";

const FriendBody = ({viewFriend, openChatStart}) => {
    const [state, setstate] = useState(false)
    useEffect(() => {
        
    }, [state])
    if (!viewFriend) {
        return <Empty/>    
    }
    const startChatOffriend = (friend) => {
        console.log(friend);
        openChatStart(friend)
        setstate(true)
    }
    return (
        <>
        {
            state ? <ChatBody/>
            :<div class="friends px-0 py-2 p-xl-3">
        <div class="container-xl">
            <div class="row">
                <div class="col">
                    <div class="card card-body card-bg-1 mb-3">
                        <div class="d-flex flex-column align-items-center">
                            <div class="avatar avatar-lg mb-3">
                                <img class="avatar-img" src={viewFriend.image} alt={viewFriend.name} />
                            </div>

                            <div class="d-flex flex-column align-items-center">
                                <h5 class="mb-1">{viewFriend.name}</h5>
                                <p class="text-white rounded px-2 bg-dark">@{viewFriend.username}</p>
                                <div class="d-flex mt-2">
                                    <div class="btn btn-primary btn-icon rounded-circle text-light mx-2" onClick={()=> {startChatOffriend(viewFriend)}}>
                                        <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                            </path>
                                        </svg>
                                        {/* <img class="injectable hw-24" src=".//assets/media/heroicons/outline/chat.svg" alt="" /> */}
                                    </div>
                                    <div class="btn btn-success btn-icon rounded-circle text-light mx-2">
                                        <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                            </path>
                                        </svg>

                                        {/* <img class="injectable hw-24" src=".//assets/media/heroicons/outline/phone.svg" alt="" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-options">
                            <div class="dropdown">
                                <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                                        </path>
                                    </svg>

                                    {/* <img class="injectable hw-20" src=".//assets/media/heroicons/outline/dots-vertical.svg" alt="" /> */}
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#">Remove</a>
                                    <a class="dropdown-item" href="#">Block</a>
                                </div>
                            </div>
                        </div>

                        <div class="chat-closer d-xl-none">
                            Chat Back Button (Visible only in Small Devices)
                            <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-close="">
                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>

                                {/* <img class="injectable hw-20" src=".//assets/media/heroicons/outline/arrow-left.svg" alt="" /> */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row friends-info">
                <div class="col">
                    <div class="card">
                        <ul class="list-group list-group-flush">
                            {
                                viewFriend.dob ? 
                            <li class="list-group-item">
                                <div class="media align-items-center">
                                    <div class="media-body">
                                        <p class="small text-muted mb-0">Birthdate</p>
                                        <p class="mb-0">{viewFriend.dob}</p>
                                    </div>
                                    <svg class="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                        </path>
                                    </svg>

                                    {/* <img class="injectable text-muted hw-20" src=".//assets/media/heroicons/outline/calendar.svg" alt="" /> */}
                                </div>
                            </li>
                            : null
                            }
                            {
                                viewFriend.phone ?
                            <li class="list-group-item">
                                <div class="media align-items-center">
                                    <div class="media-body">
                                        <p class="small text-muted mb-0">Phone</p>
                                        <p class="mb-0">+01-{viewFriend.phone}</p>
                                    </div>
                                    <svg class="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                    </svg>
                                    {/* <img class="injectable text-muted hw-20" src=".//assets/media/heroicons/outline/phone.svg" alt="" /> */}
                                </div>
                            </li>
                            : null
                            }
                            {
                                viewFriend.email ?
                            <li class="list-group-item">
                                <div class="media align-items-center">
                                    <div class="media-body">
                                        <p class="small text-muted mb-0">Email</p>
                                        <p class="mb-0">{viewFriend.email}</p>
                                    </div>
                                    <svg class="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                    {/* <img class="injectable text-muted hw-20" src=".//assets/media/heroicons/outline/mail.svg" alt="" /> */}
                                </div>
                            </li>
                            : null
                            }
                            {
                                viewFriend.website?
                            <li class="list-group-item">
                                <div class="media align-items-center">
                                    <div class="media-body">
                                        <p class="small text-muted mb-0">Website</p>
                                        <p class="mb-0">www.catherichardson.com</p>
                                    </div>
                                    <svg class="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                    {/* <img class="injectable text-muted hw-20" src=".//assets/media/heroicons/outline/globe.svg" alt="" /> */}
                                </div>
                            </li>
                            : null
                            }
                            {
                                viewFriend.city?

                            <li class="list-group-item">
                                <div class="media align-items-center">
                                    <div class="media-body">
                                        <p class="small text-muted mb-0">Address</p>
                                        <p class="mb-0">{viewFriend.city}</p>
                                    </div>
                                    <svg class="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                        </path>
                                    </svg>
                                    {/* <img class="injectable text-muted hw-20" src=".//assets/media/heroicons/outline/home.svg" alt="" /> */}
                                </div>
                            </li>
                            : null
                            }
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    </div>
        }
    
    </>
)
}

const matchDispatchToProps = (dispatch) => ({
    openChatStart : (friend) => dispatch(openChatStart(friend))
})

export default connect(null, matchDispatchToProps)(FriendBody);