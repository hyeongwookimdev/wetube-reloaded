import { async } from "regenerator-runtime";

const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const deleteBtns = document.querySelectorAll(".deleteBtn");

const addComment = (text, id, username, avatarUrl) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const top = document.createElement("div");
  top.className = "video__comment__top";
  const img = document.createElement("img");
  if (avatarUrl) {
    img.src = `${avatarUrl}`;
  } else {
    img.src = "/img/default.png";
  }
  const info = document.createElement("div");
  info.className = "video__comment__info";
  const spanUsername = document.createElement("span");
  spanUsername.innerText = `${username}`;
  const date = document.createElement("span");
  date.className = "date";
  date.innerText = "방금 전";
  const spanText = document.createElement("span");
  spanText.innerText = `${text}`;
  const button = document.createElement("button");
  button.className = "deleteBtn";
  button.innerText = "❌";

  info.appendChild(spanUsername);
  info.appendChild(date);
  top.appendChild(img);
  top.appendChild(info);
  newComment.appendChild(top);
  newComment.appendChild(spanText);
  newComment.appendChild(button);
  videoComments.prepend(newComment);
  button.addEventListener("click", (event) => {
    videoComments.removeChild(event.currentTarget.parentNode);
  });
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId, newCommentUsername, newCommentAvatarUrl } =
      await response.json();
    addComment(text, newCommentId, newCommentUsername, newCommentAvatarUrl);
  }
};

const handleDeleteBtnClick = (event) => {
  const comment = event.srcElement.parentNode;
  const commentId = comment.dataset.id;
  console.log(comment);
  fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
  const videoComments = document.querySelector(".video__comments ul");
  videoComments.removeChild(comment);
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

for (const deleteBtn of deleteBtns) {
  deleteBtn.addEventListener("click", handleDeleteBtnClick);
}
