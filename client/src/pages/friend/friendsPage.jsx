import React, {useState, useEffect} from "react";
import FirendSidebar from "../../components/friend-sidebar/friend-sidebar.component";
import FriendBody from "../../components/firend-body/firend-body.component";


const FriendsPage = () => {
    const [viewFriend, setViewFriend] = useState(null)
    useEffect(() => {
    }, [])
    return (
    <>
        <FirendSidebar viewFriend={setViewFriend} />
        <main className="main main-visible">
            <FriendBody viewFriend={viewFriend}/>
        </main>
    </>
)}

export default FriendsPage;