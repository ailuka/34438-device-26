// Letter popup

var letterLink = document.querySelector(".letter-link");

var letterPopup = document.querySelector(".modal-letter");
var letterClose = letterPopup.querySelector(".modal-close");

var letterForm = letterPopup.querySelector(".letter-form");
var letterSenderName = letterPopup.querySelector("[name=name]");
var letterSenderEmail = letterPopup.querySelector("[name=email]");
var letterSenderMessage = letterPopup.querySelector("[name=message]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

letterLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.add("modal-show");

  letterSenderName.value = storageName;
  letterSenderEmail.value = storageEmail;

  if (storageName && storageEmail) {
    letterSenderMessage.focus();
  } else if (storageName) {
    letterSenderEmail.focus();
  } else {
    letterSenderName.focus()
  }
});

letterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.remove("modal-show");
  letterPopup.classList.remove("modal-error");
});

letterForm.addEventListener("submit", function (evt) {
  if (!letterSenderName.value || !letterSenderEmail.value || !letterSenderMessage.value) {
    evt.preventDefault();
    letterPopup.classList.remove("modal-error");
    letterPopup.offsetWidth = letterPopup.offsetWidth;
    letterPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", letterSenderName.value );
      localStorage.setItem("email", letterSenderEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (letterPopup.classList.contains("modal-show")) {
      letterPopup.classList.remove("modal-show");
      letterPopup.classList.remove("modal-error");
    }
  }
});


// Map popup

var mapLink = document.querySelector(".map-link");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
