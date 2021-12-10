import React from "react";
import CallSidebar from "../../components/call-sidebar/call-sidebar.component";
import CallBody from "../../components/call-body/call-body.component";

const CallPage = () => (
    <>
        <CallSidebar />
        <main className="main main-visible">
            <CallBody />
        </main>
    </>
)

export default CallPage;