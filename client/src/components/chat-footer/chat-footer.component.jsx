import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { chatSendStart } from "../../redux/chat/chat-action";
import { selectOpenChatFriend } from "../../redux/opend-chat/open-chat-selector";

const ChatFooter = ({ openFriend, chatSendStart }) => {

    const [message, setMessage] = useState("");
    const ref = useRef(null)
    const onTextAreaChangeHandler = (e) => {
        setMessage(e.target.value);
    }
    useEffect(() => {

    }, [message])
    const oSubmitHandler = (e) => {
        e.preventDefault();
        if (!message) return;
        const m = message;
        chatSendStart(openFriend._id, m);
        ref.current.value = ""
    }
    return (
        <div className="chat-footer text-center" style={{display :'flex', flexDirection:'row', padding: "5px 5px",}}>
            <div className="attachment" style={{
                padding : '2px',
                position : "initial",
                width: "5%"
            }}>
                <div className="dropdown">
                    <button className="btn btn-secondary btn-icon btn-minimal btn-sm mx-auto" type="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>

                        {/* <!-- <img className="injectable hw-20" src=".//assets/media/heroicons/outline/plus-circle.svg" alt=""/> --> */}
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                </path>
                            </svg>
                            {/* <!-- <img className="injectable hw-20 mr-2" src=".//assets/media/heroicons/outline/photograph.svg" alt=""/> --> */}
                            <span>Gallery</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z">
                                </path>
                            </svg>

                            {/* <!-- <img className="injectable hw-20 mr-2" src=".//assets/media/heroicons/outline/volume-up.svg" alt=""/> --> */}
                            <span>Audio</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                                </path>
                            </svg>

                            {/* <!-- <img className="injectable hw-20 mr-2" src=".//assets/media/heroicons/outline/document.svg" alt=""/> --> */}
                            <span>Document</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                                </path>
                            </svg>

                            {/* <!-- <img className="injectable hw-20 mr-2" src=".//assets/media/heroicons/outline/user.svg" alt=""/> --> */}
                            <span>Contact</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>

                            {/* <!-- <img className="injectable hw-20 mr-2" src=".//assets/media/heroicons/outline/location-marker.svg" alt=""/> --> */}
                            <span>Location</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <svg className="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                </path>
                            </svg>

                            {/* <!-- <img className="injectable hw-20 mr-2" src=".//assets/media/heroicons/outline/chart-square-bar.svg" alt=""/> --> */}
                            <span>Poll</span>
                        </a>
                    </div>
                </div>
            </div>
            <form onSubmit={oSubmitHandler} style={{width: "92%",position: 'relative'}}>

                <input onChange={onTextAreaChangeHandler} ref={ref} style={{borderRadius: "15px",
                 borderWidth: '1px', borderRadius: '25px',
                  width:'94%', padding : '10px 20px', 
                  position: "absolute",
                  left: 0,
                  borderColor: '#0000007d'
                }} className="emojionearea-form-control" id="messageInput" rows="1"
                    placeholder="Type your message here..." />
                <button className="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1" style={{top:0, right : 0}}>
                    <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>

                    {/* <!-- <img src=".//assets/media/heroicons/outline/arrow-right.svg" alt="" className="injectable"> --> */}
                </button>

            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    chatSendStart: (receiver, message) => dispatch(chatSendStart(receiver, message))
})
const mapStateToProps = createStructuredSelector({
    openFriend: selectOpenChatFriend,
})
export default connect(mapStateToProps, mapDispatchToProps)(ChatFooter);