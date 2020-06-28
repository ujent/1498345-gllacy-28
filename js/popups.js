var nav = document.querySelector(".site-navigation");

var catalogLink = nav.querySelector(".catalog-link");
var catalogMenu = nav.querySelector(".catalog-menu");

var searchBtn = nav.querySelector(".search-button");
var searchPopup = nav.querySelector(".search-popup");
var searchInput = nav.querySelector("#search-input-id");

var basketBtn = nav.querySelector(".basket-button-full");
var basketPopup = nav.querySelector(".basket-popup");

var loginBtn = nav.querySelector(".login-button");
var loginPopup = nav.querySelector(".login-popup");
var loginForm = loginPopup.querySelector(".login-form");
var loginInput = loginPopup.querySelector("#login-form-login-id");
var loginPassword = loginPopup.querySelector("#login-form-psw-id");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

catalogLink.addEventListener("mouseover", function () {
  catalogMenu.classList.add("site-popup-show");
});

catalogMenu.addEventListener("mouseleave", function () {
  catalogMenu.classList.remove("site-popup-show");
});

searchBtn.addEventListener("mouseover", function () {
  searchPopup.classList.add("site-popup-show");
  searchInput.focus();
});

searchPopup.addEventListener("mouseleave", function () {
  searchPopup.classList.remove("site-popup-show");
});

if (basketBtn) {
  basketBtn.addEventListener("mouseover", function () {
    basketPopup.classList.add("site-popup-show");
  });

  basketPopup.addEventListener("mouseleave", function () {
    basketPopup.classList.remove("site-popup-show");
  });
}

loginBtn.addEventListener("mouseover", function () {
  loginPopup.classList.add("site-popup-show");

  if (storage) {
    loginInput.value = storage;
    loginPassword.focus();
  } else {
    loginInput.focus();
  }
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginInput.value || !loginPassword.value) {
    evt.preventDefault();
    loginPopup.classList.remove("site-popup-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("site-popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginInput.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (catalogMenu.classList.contains("site-popup-show")) {
      evt.preventDefault();
      catalogMenu.classList.remove("site-popup-show");
    }

    if (searchPopup.classList.contains("site-popup-show")) {
      evt.preventDefault();
      searchPopup.classList.remove("site-popup-show");
    }

    if (basketPopup && basketPopup.classList.contains("site-popup-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("site-popup-show");
    }

    if (loginPopup.classList.contains("site-popup-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("site-popup-show");
      loginPopup.classList.remove("site-popup-error");
    }
  }
});
