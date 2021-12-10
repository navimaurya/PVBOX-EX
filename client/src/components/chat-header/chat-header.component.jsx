import React from "react";

const ChatHeader = ({ name, username, image, }) => {
    return (<div className="chat-header">
        {/* <!-- Chat Back Button (Visible only in Small Devices) --> */}
        <button className="btn btn-secondary btn-icon btn-minimal btn-sm d-xl-none" type="button"
            data-close="">
            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            {/* <!-- <img className="injectable hw-20" src=".//assets/media/heroicons/outline/arrow-left.svg" alt=""/> --> */}
        </button>

        {/* <!-- Chat participant's Name --> */}
        <div className="media chat-name align-items-center text-truncate">
            <div className="avatar bg-success text-light d-none d-sm-inline-block mr-3">
                <span>
                    {/* <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                        </path>
                    </svg> */}
                    <img className="injectable" src={image} alt="user" />
                </span>
            </div>

            <div className="media-body align-self-center ">
                <h6 className="text-truncate mb-0">{name}</h6>
                <small className="text-muted">@{username}</small>
            </div>
        </div>

        {/* <!-- Chat Options --> */}
        <ul className="nav flex-nowrap">
            <li className="nav-item list-inline-item d-none d-sm-block mr-1">
                <a className="nav-link text-muted px-1" data-toggle="collapse" data-target="#searchCollapse"
                    href="#" aria-expanded="false">
                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>

                    {/* <!-- <img src=".//assets/media/heroicons/outline/search.svg" alt="" className="injectable hw-20"> --> */}
                </a>
            </li>

            <li className="nav-item list-inline-item d-none d-sm-block mr-1">
                <a className="nav-link text-muted px-1" href="#" title="Add People">
                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                        </path>
                    </svg>
                    {/* <!-- <img src=".//assets/media/heroicons/outline/phone.svg" alt="" className="injectable hw-20"> --> */}
                </a>
            </li>
            <li className="nav-item list-inline-item d-none d-sm-block mr-0">
                <div className="dropdown">
                    <a className="nav-link text-muted px-1" href="#" role="button" title="Details"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                            </path>
                        </svg>
                        {/* <!-- <img src=".//assets/media/heroicons/outline/dots-vertical.svg" alt="" className="injectable hw-20"> --> */}
                    </a>

                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item align-items-center d-flex" href="#"
                            data-chat-info-toggle="">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>

                            {/* <!-- <img src=".//assets/media/heroicons/outline/information-circle.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>View Info</span>
                        </a>

                        <a className="dropdown-item align-items-center d-flex" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                    clipRule="evenodd"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>
                            </svg>
                            {/* <!-- <img src=".//assets/media/heroicons/outline/volume-off.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>Mute Notifications</span>
                        </a>
                        <a className="dropdown-item align-items-center d-flex" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                </path>
                            </svg>
                            {/* <!-- <img src=".//assets/media/heroicons/outline/photograph.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>Wallpaper</span>
                        </a>
                        <a className="dropdown-item align-items-center d-flex" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
                                </path>
                            </svg>

                            {/* <!-- <img src=".//assets/media/heroicons/outline/archive.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>Archive</span>
                        </a>
                        <a className="dropdown-item align-items-center d-flex" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                </path>
                            </svg>

                            {/* <!-- <img src=".//assets/media/heroicons/outline/trash.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>Delete</span>
                        </a>
                        <a className="dropdown-item align-items-center d-flex text-danger" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636">
                                </path>
                            </svg>

                            {/* <!-- <img src=".//assets/media/heroicons/outline/ban.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>Block</span>
                        </a>
                    </div>
                </div>
            </li>
            <li className="nav-item list-inline-item d-sm-none mr-0">
                <div className="dropdown">
                    <a className="nav-link text-muted px-1" href="#" role="button" title="Details"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                            </path>
                        </svg>
                        {/* <!-- <img src=".//assets/media/heroicons/outline/dots-vertical.svg" alt="" className="injectable hw-20"> --> */}
                    </a>

                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item align-items-center d-flex" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                </path>
                            </svg>
                            {/* <!-- <img src=".//assets/media/heroicons/outline/phone.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>Call</span>
                        </a>
                        <a className="dropdown-item align-items-center d-flex" href="#"
                            data-toggle="collapse" data-target="#searchCollapse" aria-expanded="false">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            {/* <!-- <img src=".//assets/media/heroicons/outline/search.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>Search</span>
                        </a>

                        <a className="dropdown-item align-items-center d-flex" href="#"
                            data-chat-info-toggle="">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>

                            {/* <!-- <img src=".//assets/media/heroicons/outline/information-circle.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>View Info</span>
                        </a>

                        <a className="dropdown-item align-items-center d-flex" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                    clipRule="evenodd"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>
                            </svg>
                            {/* <!-- <img src=".//assets/media/heroicons/outline/volume-off.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>Mute Notifications</span>
                        </a>
                        <a className="dropdown-item align-items-center d-flex" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                </path>
                            </svg>
                            {/* <!-- <img src=".//assets/media/heroicons/outline/photograph.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>Wallpaper</span>
                        </a>
                        <a className="dropdown-item align-items-center d-flex" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
                                </path>
                            </svg>
                            {/* <!-- <img src=".//assets/media/heroicons/outline/archive.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>Archive</span>
                        </a>
                        <a className="dropdown-item align-items-center d-flex" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                </path>
                            </svg>

                            {/* <!-- <img src=".//assets/media/heroicons/outline/trash.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>Delete</span>
                        </a>
                        <a className="dropdown-item align-items-center d-flex text-danger" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636">
                                </path>
                            </svg>

                            {/* <!-- <img src=".//assets/media/heroicons/outline/ban.svg" alt="" className="injectable hw-20 mr-2"> --> */}
                            <span>Block</span>
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </div>)
}
export default ChatHeader;
