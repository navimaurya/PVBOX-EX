import React from "react";
import moment from 'moment'
import { Link } from "react-router-dom";
import { openChatStart } from "../../redux/opend-chat/open-chat-action";
import { connect } from 'react-redux';

const ChatListItem = ({ openChatStart,openedChat,sent,message,unseen, friend  }) => {
    // <li className="contacts-item groups active">
    const { name, username, image } = friend;
    const chatStart = () =>{
        console.log(friend);
        openChatStart(friend)
    }
    return (
        <li class="contacts-item unread" >
            <button className="contacts-link w-100"  onClick={chatStart}>
                <div className="avatar avatar-online">
                    <img src={image} alt={username} />
                </div>
                <div className="contacts-content">
                    <div className="contacts-info">
                        <h6 className="chat-name">{name}</h6>
                        <div className="chat-time">
                            <span>{moment(sent).calendar()}</span>
                        </div>
                    </div>
                    <div className="contacts-texts">
                        <p className="text-truncate">{message}</p>
                        {
                            unseen ?
                                <div className="badge badge-rounded badge-primary ml-1">{unseen}</div>
                                : null
                        }
                    </div>
                </div>
            </button>
        </li>
    )
}

const mapStatetoProps= state =>({
    openedChat : state.openChat.friend
})
const mapDispatchToProps = dispatch => ({
    openChatStart : (data)=>dispatch(openChatStart(data))
})

export default connect(mapStatetoProps,mapDispatchToProps)(ChatListItem);


// import React, { useEffect, useState } from "react";
// import moment from 'moment'
// import { connect } from "react-redux";
// import { openChatStart } from "../../redux/opend-chat/open-chat-action";

// const ChatListItem = ({ friend: { name, username, image, _id }, message, sent, unseen, openChat }) => {
//     // <li className="contacts-item groups active">
//     const [state, setState] = useState({ _id: null })
//     const getChats = (obj) => {
//         // if (obj._id === state._id) return;
//         setState(obj)
//     }
//     useEffect(() => {
//         openChat(state);
//     }, [state])

//     return (
//         <li class="contacts-item unread" >
//             <a class="contacts-link" href="#" onClick={() => getChats({ _id, name, username, image })} >
//                 <div class="avatar avatar-online">
//                     <img src="/assets/media/avatar/e6935809__2.png" alt="" />
//                 </div>
//                 <div class="contacts-content">
//                     <div class="contacts-info">
//                         <h6 class="chat-name">{name}</h6>
//                         <div class="chat-time">
//                             <span>{moment(sent).calendar()}</span>
//                         </div>
//                     </div>
//                     <div class="contacts-texts">
//                         <p class="text-truncate">{message}</p>
//                         {
//                             unseen ?
//                                 <div class="badge badge-rounded badge-primary ml-1">{unseen}</div>
//                                 : null
//                         }
//                     </div>
//                 </div>
//             </a>
//         </li>
//     )
// }

// const mapDispatchToProps = dispatch => ({
//     openChat: (id) => dispatch(openChatStart(id))
// })


// export default connect(null, mapDispatchToProps)(ChatListItem);