import React from "react";
import moment from 'moment';

const MessageDay = ({ day, children }) => {
    day = (moment(day).calendar()).split(' ')[0]
    return (
        <div class="message-day">
            <div class="message-divider sticky-top pb-2" data-label={day}>&nbsp;</div>
            {children}
        </div>
    )
}

export default MessageDay;
