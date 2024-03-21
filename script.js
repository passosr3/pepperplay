"use strict";

const panels = document.querySelectorAll(".panel");

panels.forEach((panels) => {
  panels.addEventListener("click", () => {
    removeActiveClass();
    panels.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwuT55C4UEbXJY3Bc2FxkpbgaySaPm-T66OlJwgZo6hAOqRJoXhBeS8H4eqa-lFKcyY/exec";

const form = document.forms["formul"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert(
        "Obrigado, seu contato foi enviado e em breve traremos mais informações"
      )
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
