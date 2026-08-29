// AstraVizion AI Solutions — site interactions

document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  var btn = document.querySelector("[data-menu-btn]");
  var nav = document.querySelector("[data-mobile-nav]");
  var iconMenu = document.querySelector("[data-icon-menu]");
  var iconClose = document.querySelector("[data-icon-close]");

  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      if (iconMenu && iconClose) {
        iconMenu.style.display = open ? "none" : "block";
        iconClose.style.display = open ? "block" : "none";
      }
    });
  }

  // Active nav highlight
  var page = document.body.getAttribute("data-page");
  document.querySelectorAll("[data-nav]").forEach(function (link) {
    if (link.getAttribute("data-nav") === page) link.classList.add("active");
  });

  // FAQ accordion (first item open by default)
  var questions = Array.prototype.slice.call(document.querySelectorAll(".faq-q"));
  questions.forEach(function (q, i) {
    var answer = q.nextElementSibling;
    var open = i === 0;
    q.setAttribute("aria-expanded", String(open));
    answer.classList.toggle("open", open);

    q.addEventListener("click", function () {
      var isOpen = q.getAttribute("aria-expanded") === "true";
      questions.forEach(function (other) {
        other.setAttribute("aria-expanded", "false");
        other.nextElementSibling.classList.remove("open");
      });
      if (!isOpen) {
        q.setAttribute("aria-expanded", "true");
        answer.classList.add("open");
      }
    });
  });

  // Contact form
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector("[data-form-status]");
      if (status) status.hidden = false;
    });
  }

  // Footer year
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
});
