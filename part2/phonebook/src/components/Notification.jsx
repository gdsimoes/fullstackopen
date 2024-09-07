const Notification = ({ message }) => {
    if (message.value === "") {
        return null;
    }

    const className = message.type === "error" ? "message error" : "message";

    return <div className={className}>{message.value}</div>;
};

export default Notification;
