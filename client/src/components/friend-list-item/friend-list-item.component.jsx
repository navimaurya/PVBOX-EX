import React from "react"

const FriendListItem = ({data, ...props}) => ( <li {...props} className="contacts-item ">
                        {/* active */}
                        <a className="contacts-link" href="#">
                            <div className="avatar">
                                <img src="/assets/media/avatar/b8526894__3.png" alt="" />
                            </div>
                            <div className="contacts-content">
                                <div className="contacts-info">
                                    <h6 className="chat-name text-truncate">{data.name}</h6>
                                </div>
                                <div className="contacts-texts">
                                    {/* <!-- Default :: Inline SVG --> */}
                                    <svg className="hw-16 text-muted mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"></path>
                                    </svg>

                                    {/* <!-- Alternate :: External File link --> */}
                                    {/* <img className="injectable hw-16 text-muted mr-1" src=".//assets/media/heroicons/solid/location-marker.svg" alt=""/> */}
                                    <p className="text-muted mb-0">+91 {data.phone}</p>
                                </div>
                            </div>
                        </a>
            </li> )

export default FriendListItem;