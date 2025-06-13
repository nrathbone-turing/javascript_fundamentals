function messageToUser(user, message){
    const sendMessage = () => {
        const messageData = {
            user: user,
            message: message
        };

        sentMessage.push(messageData);
    };

    sendMessage();
}