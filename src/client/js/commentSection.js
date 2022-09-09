import { async } from "regenerator-runtime";

const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const deleteBtns = document.querySelectorAll(".deleteBtn");

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = `${text}`;
  const button = document.createElement("button");
  button.innerText = "❌";
  newComment.appendChild(icon);
  newComment.appendChild(span);
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
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

const handleDeleteBtnClick = (event) => {
  const comment = event.srcElement.parentNode;
  const commentId = comment.dataset.id;
  console.log(commentId);
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
