import React from "react";
import FirendSidebar from "../../components/friend-sidebar/friend-sidebar.component";


const HomePage = () => {
    return (
        <>
            <FirendSidebar />
            <main className="main main-visible">
                <h1>Hello</h1>
            </main>
        </>
    );
}

export default HomePage;