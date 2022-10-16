const TheirMessage = ({ lastName, message }) => {

    const isFirstMessageByUser = !lastName || lastName.sender.username !== message.sender.username;
    return(
        <div className="message-row">
            {isFirstMessageByUser && (
                <div className="message-avatar" style={{backgroundImage: `url(${message?.sender?.avatar})`}} />
            )}
        </div>
    );
}


export default TheirMessage;