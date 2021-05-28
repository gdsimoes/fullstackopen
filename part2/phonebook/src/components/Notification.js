import React from "react";

const Notification = ({ notification }) => {
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
