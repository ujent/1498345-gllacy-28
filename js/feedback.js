var feedbackBtn = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".feedback-popup-overlay");

if (feedbackBtn && feedbackPopup) {
  var feedbackClose = feedbackPopup.querySelector(".site-popup-close");
  var feedbackForm = feedbackPopup.querySelector(".feedback-form");

  var feedbackName = feedbackForm.querySelector("#feedback-form-name-id");
  var feedbackEmail = feedbackForm.querySelector("#feedback-form-email-id");
  var feedbackComment = feedbackForm.querySelector("#feedback-form-comment-id");

  feedbackBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("site-popup-show");
    feedbackName.focus();
  });

  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("site-popup-show");
    feedbackPopup.classList.remove("site-popup-error");
  });

  feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackComment.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove("site-popup-error");
      feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add("site-popup-error");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("site-popup-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("site-popup-show");
        feedbackPopup.classList.remove("site-popup-error");
      }
    }
  });
}
