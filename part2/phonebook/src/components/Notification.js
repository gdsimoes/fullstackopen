import React from "react";

const Notification = ({ notification }) => {
    // The notification state carries two pices of imformation:
    // the message to be shown (notification.msg) and a boolean
    // (notification.error) signaling if the message is an error.
    if (notification === null) {
        return null;
    } else {
        const notificationStyle = {
            color: notification.error ? "red" : "green",
            background: "lightgrey",
            fontSize: 20,
            borderStyle: "solid",
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
        };
        return <div style={notificationStyle}>{notification.msg}</div>;
    }
};

export default Notification;
