import React from "react";
import ProfileSidebar from "../../components/profile-sidebar/profile-sidebar.component";
import ProfileBody from "../../components/profile-body/profile-body.component";

const ProfilePage = () => (
    <>
        <ProfileSidebar />
        <main className="main main-visible">
            <ProfileBody />
        </main>
    </>
);

export default ProfilePage;