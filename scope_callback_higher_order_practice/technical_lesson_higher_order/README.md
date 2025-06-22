## Task 1: Define the Problem

FlatTube wants to provide users with the ability to leave comments on videos and later edit those comments. The higher-order function will:

Allow users to select a video.
Prompt them to leave a comment.
Return a function that enables editing of the comment.
The task is to create callback functions and a higher-order function that optimizes this functionality.


## Task 2: Determine the Design and Develop the Code

### Step 1: Declare Variables and Functions

In this step, we will lay the groundwork for your program by defining global variables to store video names and user comments. We will also create a higher-order function, selectVideo, which accepts a callback function as a parameter. While the core functionality of selectVideo will be added in later steps, this setup establishes the structure for processing video selections and handling user comments.

1. Create Global Variables

Define a `videoNames` array with the names of the videos available on FlatTube.
Define an empty comments array to store user comments.

```
const videoNames = ["Flatburger Tutorial", "Flatironland Commercial", "Flatapets Cutest Animals"];
const comments = [];
```

2. Define the `selectVideo` Function

Create a higher-order function named `selectVideo` that accepts one parameter, `addComment`.

This parameter will store a callback function for handling comments.
Initially, the function will return an anonymous function (we will implement this in a later step).

The following code block includes everything from this step: 

```
const videoNames = ["How to make your own Flatburger tutorial", "Flatironland commercial", "Flatapets cutest animals"];

const comments = [];

function selectVideo(addComment){
    // We will write code here later
    return function () {
        // We will write the code for this function later
    };
}

alert("Welcome to FlatTube!");
```

### Step 2: Argument Passing

In this step, we will implement functionality to allow users to select a video and leave a comment. Using prompts, we’ll collect user input, validate it to ensure accuracy, and then pass the collected data (video name and comment) to a callback function for further processing. This process demonstrates how higher-order functions dynamically handle user-provided data.

1. Prompt the User to Select a Video

Inside selectVideo, prompt the user to choose a video by entering 1, 2, or 3. Use the prompt() method and use if else statements for user selection.

Validate the input with :
* If the input is invalid, alert the user and end the function.
* If the input is valid, assign the corresponding video name to a variable named videoName. In your terminal, your code should include: 

```
const videoValue = prompt(`Please select a video:\n\n1: Flatburger Tutorial\n2: Flatironland Commercial\n3: Flatapets Cutest Animals`);

let videoName;
if (videoValue === "1") {
    videoName = videoNames[0];
} else if (videoValue === "2") {
    videoName = videoNames[1];
} else if (videoValue === "3") {
    videoName = videoNames[2];
} else {
    alert("Error: Invalid video!");
    return null;
}
```

2. Prompt the User for a Comment
* After retrieving the video name, ask the user to enter their comment using `prompt()`.
* Store the input in a variable names comment.

Here is the code: 

```
const comment = prompt("Enter your comment:");
```

3. Pass Data to the Callback
* Call the `addComment` callback, passing the `videoName` and comment as arguments.
* Store the return value in a variable named commentIndex.

```
const commentIndex = addComment(videoName, comment);
```

The following code block is what you should have developed during this step.

```
const videoNames = ["How to make your own Flatburger tutorial", "Flatironland commercial", "Flatapets cutest animals"];

const comments = [];

function selectVideo(addComment){
    const videoValue = prompt("Please select a video that you would like to leave a comment for:\n\n- Enter '1' to select the 'How to make your own Flatburger tutorial video' video\n- Enter '2' to select the 'Flatironland commercial' video\n- Enter '3' to select the 'Flatapets cutest animals' video");

    let videoName;

    if(videoValue === '1'){
        videoName = videoNames[0];
    }
    else if(videoValue === '2'){
        videoName = videoNames[1];
    }
    else if(videoValue === '3'){
        videoName = videoNames[2];
    }
    else{
        alert("Error: Invalid video!");
        return null;
    }

    const comment = prompt("Enter your comment:");

    return function () {
        // We will write the code for this function in Step 5
    };
}

alert("Welcome to FlatTube!");

selectVideo((videoName, comment) => {
    const commentData = {
        video: videoName,
        text: comment
    };
    comments.push(commentData);
    return comments.length - 1;
});
```

### Step 3: Variables, Functions, and Callback Functions

In this step, we will implement logic to handle user comments by utilizing a callback function. The actions in this step will allow you to dynamically add comments to specific videos and confirm the success of this operation to the user.

1. Call the Callback Function
Inside the `selectVideo` function, call the callback function stored in the addComment parameter.
* Pass the values of the `videoName` (selected video) and `comment` (user’s input) as arguments to the callback.
* The `addComment` callback handles the logic for processing the comment.

```
const commentIndex = addComment(videoName, comment);
```

2. Store the Return Value of the Callback
* The return value of `addComment` is stored in the variable commentIndex.
* This return value `references` the index in the comments array where the new comment object (video name and comment text) is stored.

3. Confirm the Comment Addition
Use the `alert()` method to notify the user that their comment was successfully added.
Include the video name and comment in the confirmation message.

```
alert(`Your comment has been successfully added! Here is the comment that you left for the "${videoName}" video:\n\n${comment}`);
```

4. Key Relationship to the Higher-Order Function Process
* The callback function, stored in the `addComment` parameter, is executed inside the `selectVideo` higher-order function.
* The `videoName` and `comment` variables are passed into the callback, demonstrating the dynamic behavior of higher-order functions.

```
const videoNames = ["How to make your own Flatburger tutorial", "Flatironland commercial", "Flatapets cutest animals"];

const comments = [];

function selectVideo(addComment){
    const videoValue = prompt("Please select a video that you would like to leave a comment for:\n\n- Enter '1' to select the 'How to make your own Flatburger tutorial video' video\n- Enter '2' to select the 'Flatironland commercial' video\n- Enter '3' to select the 'Flatapets cutest animals' video");

    let videoName;

    if(videoValue === '1'){
        videoName = videoNames[0];
    }
    else if(videoValue === '2'){
        videoName = videoNames[1];
    }
    else if(videoValue === '3'){
        videoName = videoNames[2];
    }
    else{
        alert("Error: Invalid video!");
        return null;
    }

    const comment = prompt("Enter your comment:");

    const commentIndex = addComment(videoName, comment);

    alert(`Your comment has been successfully added! Here is the comment that you left for the "${videoName}" video:\n\n${comment}`);

    return function () {
        // We will write the code for this function in Step 5
    };
}

alert("Welcome to FlatTube!");

selectVideo((videoName, comment) => {
    const commentData = {
        video: videoName,
        text: comment
    };
    comments.push(commentData);
    return comments.length - 1;
});
```

### Step 4: Anonymous Functions 

In this step, we will enhance the higher-order function by adding an anonymous function that allows users to edit their comments. The anonymous function is dynamically returned by the `selectVideo` function and is designed to enable the user to update their previously added comment.

1. Define the Anonymous Function
* Inside the `selectVideo` function, add an anonymous function that will handle the logic for editing a user’s comment.
* This anonymous function will be returned by `selectVideo` and called whenever the user wants to edit their comment.

2. Prompt the User for an Updated Comment
* Inside the anonymous function:
    * Use the `prompt()` method to ask the user for an updated version of their comment.
    * Store the user’s input in a variable named updatedComment.

3. Update the Comment in the Array
* Replace the original comment text with the updated comment in the comments array.
* Use the commentIndex variable to locate the correct comment in the array.

```
comments[commentIndex].text = updatedComment;
```

4. Notify the User of the Update
* Use the `alert()` method to confirm that the comment has been successfully updated.

Include the updated comment in the confirmation message for clarity.
```
alert(`Your comment has been successfully updated to:\n\n${updatedComment}`);
```

Here is the code we have developed during this step:

```
const videoNames = ["How to make your own Flatburger tutorial", "Flatironland commercial", "Flatapets cutest animals"];

const comments = [];

function selectVideo(addComment){
    const videoValue = prompt("Please select a video that you would like to leave a comment for:\n\n- Enter '1' to select the 'How to make your own Flatburger tutorial video' video\n- Enter '2' to select the 'Flatironland commercial' video\n- Enter '3' to select the 'Flatapets cutest animals' video");

    let videoName;

    if(videoValue === '1'){
        videoName = videoNames[0];
    }
    else if(videoValue === '2'){
        videoName = videoNames[1];
    }
    else if(videoValue === '3'){
        videoName = videoNames[2];
    }
    else{
        alert("Error: Invalid video!");
        return null;
    }

    const comment = prompt("Enter your comment:");

    const commentIndex = addComment(videoName, comment);

    alert(`Your comment has been successfully added! Here is the comment that you left for the "${videoName}" video:\n\n${comment}`);

    return function () {
        const updatedComment = prompt("Enter your updated comment");
        comments[commentIndex].text = updatedComment;
        alert(`Your comment has been successfully updated to:\n\n${updatedComment}`);
    };
}

alert("Welcome to FlatTube!");

const editComment = selectVideo((videoName, comment) => {
    const commentData = {
        video: videoName,
        text: comment
    };
    comments.push(commentData);
    return comments.length - 1;
});
```

### Full Coding Solution

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
        alert("Error: Invalid video!");
        return null;
    }

    const commentText = prompt("Enter your comment");

    const commentId = addComment(video, commentText);

    alert(`Your comment has been successfully added! Here is the comment that you left for the "${video.name}" video:\n\n${commentText}`);

    return function () {
        const updatedComment = prompt("Enter your updated comment");
        const comment = video.comments.find(c => {
            return c.id === commentId;
        });
        comment.text = updatedComment;
        alert(`Your comment has been successfully updated to:\n\n${updatedComment}`);
    }
}

alert("Welcome to FlatTube!");

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

## Task 3: Test and Refine

Leverage Browser Developer Tools

* **Method:** Use developer tools in your browser or code editor (like Chrome DevTools) to step through code, inspect scopes, and view variables in real-time.
* **Purpose:** Allows for real-time debugging, checking the visibility of variables, and understanding the scope chain.

## Task 4: Document and Maintain

**Version Control:** Use version control to track changes. This allows for easy updates, collaborative editing, and the ability to revert to previous versions if necessary.

**Regular Updates and Reviews:** Schedule regular reviews and updates for code to ensure content remains relevant, accurate, and aligned with the latest Javascript developments and industry practices.

**Documentation and Examples Repository:** Maintain a centralized repository containing all lab documents, example code, and solutions.