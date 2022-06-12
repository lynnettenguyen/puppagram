const mainContent = () => {
    const h1Div = document.createElement("div")
    const h1Puppy = document.createElement("h1")
    h1Puppy.innerText = "Puppagram"
    h1Puppy.id = "h1Puppy"
    h1Puppy.className = "h1Puppy"

    const buttonDiv = document.createElement("div")
    buttonDiv.id = "button"
    buttonDiv.className = "button"
    const puppyButton = document.createElement("button");
    puppyButton.innerText = "More Puppies"
    puppyButton.id = "puppyButton"
    puppyButton.className = "puppy-button"

    const mainDiv = document.createElement("div")
    mainDiv.className = "main-div"

    const leftDiv = document.createElement("div");
    leftDiv.className = "left-div"
    const rightDiv = document.createElement("div")
    rightDiv.className = "right-div"

    const postDiv = document.createElement("div")
    postDiv.id = "postDiv"
    postDiv.className = "post-div"

    const profileDiv = document.createElement("div");
    profileDiv.className = "profile-div"
    const profileImgDiv = document.createElement("div");
    profileImgDiv.className = "profile-img"
    const profileImg = document.createElement("i");
    profileImg.className = "fa-regular fa-circle-user"
    const profileContent = document.createElement("div")
    profileContent.className = "profile-content"
    const profileName = document.createElement("div");
    profileName.innerText = "username"
    profileName.className = "profile-name"
    const location = document.createElement("div");
    location.innerText = "location"
    location.className = "profile-location"
    const postSettings = document.createElement("div")
    postSettings.className = "post-settings"
    const postSettingsIcon = document.createElement("i");
    postSettingsIcon.className = "fa-solid fa-ellipsis"

    const imgDiv = document.createElement("div");
    const imgPuppy = document.createElement("img")
    imgPuppy.id = "puppyImg"
    newImg();

    const actionDiv = document.createElement("div");
    actionDiv.id = "actionDiv"
    actionDiv.className = "action-div"
    const loveAction = document.createElement("div");
    const loveIcon = document.createElement("i");
    loveIcon.id = "unClicked"
    loveIcon.className = "fa-heart fa-regular"

    const commentAction = document.createElement("div");
    const commentIcon = document.createElement("i");
    commentIcon.className = "fa-regular fa-comment"
    const sendAction = document.createElement("div")
    const sendIcon = document.createElement("i")
    sendIcon.className = "fa-regular fa-paper-plane"
    const saveDiv = document.createElement("div");
    const saveIcon = document.createElement("i")
    saveIcon.id = "notSaved"
    saveIcon.className = "fa-regular fa-bookmark"
    saveDiv.className = "save-div"

    const outerActionDiv = document.createElement("div")
    outerActionDiv.className = "outer-action-div"
    // const sendIcon = document.createElement("img")
    // sendIcon.src = "../images/send.png"
    // sendIcon.style.height = "17px"

    const likesDiv = document.createElement("div");
    likesDiv.className = "likes-div"
    likesDiv.innerText = `${randomNum()} likes`

    const commentsDiv = document.createElement("div");
    commentsDiv.className = "comments-div"
    const initialCaption = document.createElement("div")
    initialCaption.className = "initial-caption"
    const userCaption = document.createElement("div")
    userCaption.innerText = "username"
    userCaption.className = "user-caption"
    const captionContent = document.createElement("div")
    captionContent.innerText = "🐶🐶 Ruff day 🐾 but it was still paw-some 🐾"
    captionContent.className = "caption-content"

    const addCommentDiv = document.createElement("div");
    addCommentDiv.className = "add-comments-div"
    const emojiDiv = document.createElement("div");
    const emojiIcon = document.createElement("i")
    emojiDiv.className = "emoji-icon";
    emojiIcon.className = "fa-regular fa-face-smile"

    const commentInputDiv = document.createElement("div")
    commentInputDiv.className = "comment-input-div"
    const commentInput = document.createElement("input");
    commentInput.className = "comment-input"
    commentInput.placeholder = "Add a comment..."
    const commentPostDiv = document.createElement("div")
    commentPostDiv.className = "comment-post-div"
    const commentPost = document.createElement('button');
    commentPost.className = "post-button"
    commentPost.innerText = "Post"

    document.body.append(h1Div, buttonDiv, mainDiv);

    h1Div.append(h1Puppy);

    buttonDiv.append(puppyButton)

    mainDiv.append(leftDiv, postDiv, rightDiv)
    postDiv.append(profileDiv, imgDiv, outerActionDiv, likesDiv, commentsDiv, addCommentDiv)

    profileDiv.append(profileImgDiv, profileContent, postSettings)
    profileImgDiv.append(profileImg)
    profileContent.append(profileName, location)
    postSettings.append(postSettingsIcon)

    imgDiv.append(imgPuppy)

    outerActionDiv.append(actionDiv, saveDiv)
    actionDiv.append(loveAction, commentAction, sendAction)
    saveDiv.append(saveIcon)
    loveAction.append(loveIcon);

    commentAction.append(commentIcon);
    sendAction.append(sendIcon);

    commentsDiv.append(initialCaption)
    initialCaption.append(userCaption, captionContent)

    addCommentDiv.append(emojiDiv, commentInputDiv, commentPostDiv)
    emojiDiv.append(emojiIcon)
    commentInputDiv.append(commentInput);
    commentPostDiv.append(commentPost)
}

const newImg = async () => {
    const puppyAPI = await fetch("https://dog.ceo/api/breeds/image/random");
    const puppyObj = await puppyAPI.json()
    const puppyUrl = puppyObj.message
    // console.log(puppyUrl)

    const puppyImg = document.getElementById("puppyImg")
    puppyImg.src = puppyUrl;

    localStorage.setItem("comment", JSON.stringify([]))

    const commentSection = document.querySelector(".user-comment-div")
    commentSection.remove()
}

const randomNum = () => {
    const num = Math.floor(Math.random() * 1000000)
    localStorage.setItem("likeCount", num)
    const randomNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return randomNum
}

const submitLike = (likeButton) => {
    const loveIcon = document.getElementsByClassName("fa-heart")[0]
    const likesCount = document.querySelector(".likes-div")

    if (localStorage.getItem("likeCount")) {
        const currentLikes = localStorage.getItem("likeCount")

        if (likeButton.target.id === "unClicked") {
            loveIcon.classList.remove("fa-regular");
            loveIcon.classList.add("fa-solid");
            likeButton.target.id = "clicked"
            const updatedLikes = Number(currentLikes) + 1;
            const updatedNum = updatedLikes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            likesCount.innerText = `${updatedNum} likes`
        } else if (likeButton.target.id === "clicked") {
            loveIcon.classList.remove("fa-solid");
            loveIcon.classList.add("fa-regular");
            likeButton.target.id = "unClicked"
            const updatedLikes = Number(currentLikes);
            const updatedNum = updatedLikes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            likesCount.innerText = `${updatedNum} likes`
        }
    }
}

const submitSave = (saveButton) => {
    const saveIcon = document.getElementsByClassName("fa-bookmark")[0];

    if (saveButton.target.id === "notSaved") {
        saveIcon.classList.remove("fa-regular");
        saveIcon.classList.add("fa-solid");
        saveButton.target.id = "isSaved"
    } else if (saveButton.target.id === "isSaved") {
        saveIcon.classList.remove("fa-solid");
        saveIcon.classList.add("fa-regular");
        saveButton.target.id = "notSaved"
    }
}

const createComment = (comment, i) => {
    const userComment = document.createElement("div")
    userComment.className = "user-comment-div"
    const username = document.createElement("span")
    username.className = "username-comment-span"
    username.innerText = "userComment" + Math.floor(Math.random() * 100);
    const newComment = document.createElement("div")
    newComment.className = "new-comment-div"
    newComment.id = i;
    newComment.innerText = comment;
    newComment.style.maxWidth = "450px"

    const likeButton = document.createElement("div");
    likeButton.className = "comment-like-button";
    likeButton.classList.add("fa-heart", "fa-regular")
    likeButton.style.display = "flex";
    likeButton.style.justifyContent = "flex-end"
    likeButton.style.marginRight = "0px"

    likeButton.addEventListener("click", comment => likeComment(comment))

    const deleteButton = document.createElement("div");
    deleteButton.className = "fa-regular fa-trash-can"
    deleteButton.classList.add("comment-delete-button");
    deleteButton.style.display = "flex";
    deleteButton.style.justifyContent = "flex-start";

    userComment.addEventListener("click", comment => deleteComment(comment))

    userComment.append(username, newComment, likeButton, deleteButton)

    return userComment;
}

const submitComment = () => {
    const commentInput = document.querySelector(".comment-input")
    const commentText = commentInput.value;

    if (localStorage.getItem("comment")) {
        const allComments = JSON.parse(localStorage.comment)
        allComments.push(commentText);
        localStorage.comment = JSON.stringify(allComments)

        const comment = createComment(commentText, allComments.length - 1)

        const commentSection = document.querySelector(".comments-div")
        commentSection.append(comment)
    } else {
        localStorage.setItem("comment", JSON.stringify([commentText]))
    }
    commentInput.value = ""
    return true;
}

const likeComment = (comment) => {
    comment.stopPropagation()
    console.log(comment.target)
    comment.target.classList.remove("fa-regular");
    comment.target.classList.add("fa-solid");
}

const deleteComment = (comment) => {
    const storedComments = JSON.parse(localStorage.comment);
    storedComments.splice(parseInt(comment.currentTarget.id), 1);
    localStorage.comment = JSON.stringify(storedComments)
    comment.currentTarget.remove()
}

const dynamicPost = (potentialComment) => {
    const postButton = document.querySelector(".post-button")

    if (potentialComment.target.value.length >= 1) {
        postButton.classList.add("darker-post-button")
    } else if (!potentialComment.target.value.length) {
        postButton.classList.remove("darker-post-button")
    }
}

window.onload = () => {
    mainContent();
    document.querySelector("#puppyButton").addEventListener("click", newImg)
    document.querySelector(".fa-heart").addEventListener("click", submitLike)
    document.querySelector(".fa-bookmark").addEventListener("click", submitSave)
    document.querySelector(".post-button").addEventListener("click", submitComment)
    document.querySelector(".comment-input").addEventListener("keyup", dynamicPost)
}
