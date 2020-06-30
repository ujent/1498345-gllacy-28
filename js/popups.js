var nav = document.querySelector(".site-navigation");

var searchBtn = nav.querySelector(".user-navigation-search");
var searchPopup = nav.querySelector(".search-popup-wrapper");
var searchInput = nav.querySelector("#search-input-id");

var basketBtn = nav.querySelector(".user-navigation-basket-full");
var basketPopup = nav.querySelector(".basket-popup-wrapper");

var loginBtn = nav.querySelector(".user-navigation-login");
var loginPopup = nav.querySelector(".login-popup-wrapper");
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

searchBtn.addEventListener("mouseover", function () {
  searchPopup.classList.add("site-popup-show");
  searchInput.focus();
});

searchBtn.addEventListener("mouseleave", function () {
  searchPopup.classList.remove("site-popup-show");
});

if (basketBtn) {
  basketBtn.addEventListener("mouseover", function () {
    basketPopup.classList.add("site-popup-show");
  });

  basketBtn.addEventListener("mouseleave", function () {
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

loginBtn.addEventListener("mouseleave", function () {
  loginPopup.classList.remove("site-popup-show");
  loginPopup.classList.remove("site-popup-error");
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
