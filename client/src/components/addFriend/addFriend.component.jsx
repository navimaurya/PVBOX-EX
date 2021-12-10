import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { addNewFriendStart } from "../../redux/friends/friend-action";
import { addFriendtoggle } from "../../redux/ui/ui-action";

// const AddFriend = ({addFriendtoggle, uiDisplay}) =>(
const AddFriend = ({addNewFriend}) =>{
    const [state, setState] = useState({username : '', message: ''});
    const onChangeHandler = (e) =>{
        const {name, value} = e.target;
        setState({...state, [name] : value });
    }
    const onSubmitHandler = () => {
        if (!state.username) return
        addNewFriend(state);
    }

    return (
    <div className="modal modal-lg-fullscreen fade show" id="inviteOthers" tabindex="-1" role="dialog" aria-labelledby="inviteOthersLabel" style={{display: 'none', backgroundColor: '#07204ec2'}} aria-modal="true">
    {/* <div className="modal modal-lg-fullscreen fade show" id="inviteOthers" tabindex="-1" role="dialog" aria-labelledby="inviteOthersLabel" style={{ display: uiDisplay ? 'block' : 'none', backgroundColor: '#07204ec2'}} aria-modal="true"> */}
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="inviteOthersLabel">Request</h5>
                        
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body hide-scrollbar">
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label for="inviteEmailAddress">Username</label>
                                        <input type="text" onChange={onChangeHandler} value={state.username} name='username' className="form-control form-control-md" id="inviteEmailAddress" placeholder="Type email, username or phone number"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label for="inviteMessage">Request message</label>
                                        <textarea onChange={onChangeHandler} value={state.message} name='message' className="form-control form-control-md no-resize hide-scrollbar" id="inviteMessage" placeholder="Write your message here" rows="3"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-link text-muted" data-dismiss="modal">Close</button>
                        <button type="button" onClick={onSubmitHandler} className="btn btn-primary">Send</button>
                        </div>
                </div>
            </div>
        </div>
)}

const mapDispatchToProps = dispatch => ({
    addNewFriend : (user) => dispatch(addNewFriendStart(user))
})

export default connect(null, mapDispatchToProps)(AddFriend);
