// console.log("Welcome to FlatTube!");

const videos = [
    {
        id: 1,
        name: "How to make your own Flatburger tutorial",
        comments: []
    },
    {
        id: 2,
        name: "Flatironland commercial",
        comments: []
    },
    {
        id: 3,
        name: "Flatapets cutest animals",
        comments: []
    }
];

function selectVideo(addComment){
    const videoValue = prompt("Please select a video that you would like to leave a comment for:\n\n- Enter '1' to select the 'How to make your own Flatburger tutorial video' video\n- Enter '2' to select the 'Flatironland commercial' video\n- Enter '3' to select the 'Flatapets cutest animals' video");

    const video = videos.find(v => {
        return v.id === Number(videoValue);
    });

    if(video === undefined){
        console.log("Error: Invalid video!");
        return null;
    }

    const commentText = prompt("Enter your comment");

    const commentId = addComment(video, commentText);

    console.log(`Your comment has been successfully added! Here is the comment that you left for the "${video.name}" video:\n\n${commentText}`);

    return function () {
        const updatedComment = prompt("Enter your updated comment");
        const comment = video.comments.find(c => {
            return c.id === commentId;
        });
        comment.text = updatedComment;
        console.log(`Your comment has been successfully updated to:\n\n${updatedComment}`);
    }
}

console.log("Welcome to FlatTube!");

const editComment = selectVideo((video, commentText) => {
    const commentData = {
        text: commentText
    };
    if(video.comments.length === 0){
        commentData.id = 1;
    }
    else{
        commentData.id = video.comments[video.comments.length - 1].id + 1;
    }
    video.comments.push(commentData);
    return commentData.id;
});