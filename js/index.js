const refs = {
  themeBtn: document.querySelector(".theme-btn"),
  themeImg: document.querySelector(".theme-img"),
  modalForm: document.querySelector(".modal-form"),
};

function toggleTheme() {
  const isLight = refs.themeImg.classList.toggle("light");
  refs.themeImg.classList.toggle("dark", !isLight);
  refs.themeImg.src = isLight ? "./img/themeDark.png" : "./img/themeLight.png";
}

refs.themeBtn.addEventListener("click", toggleTheme);

class Modal {
  static overlay;
  static body;
  static isHiddenClass = "is-hidden";
  static noScrollClass = "no-scroll";
  static activeModal = null;

  constructor(modal) {
    this.modal = modal;
  }

  static initializeCommonElemnts(overlay, body) {
    this.overlay = overlay;
    this.body = body;
  }

  toggle() {
    this.modal.classList.contains(Modal.isHiddenClass)
      ? this.open()
      : this.close();
  }

  open() {
    if (Modal.activeModal && Modal.activeModal !== this) {
      Modal.activeModal.close();
    }
    this.modal.classList.remove(Modal.isHiddenClass);
    Modal.overlay.classList.remove(Modal.isHiddenClass);
    Modal.body.classList.add(Modal.noScrollClass);
    Modal.activeModal = this;
  }

  close() {
    this.modal.classList.add(Modal.isHiddenClass);
    Modal.overlay.classList.add(Modal.isHiddenClass);
    Modal.body.classList.remove(Modal.noScrollClass);
    Modal.activeModal = null;
  }

  addEventListeners(openBtn, closeBtn) {
    openBtn.addEventListener("click", () => this.open());
    closeBtn.addEventListener("click", () => this.close());
    Modal.overlay.addEventListener("click", () => this.close());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });
  }
}

Modal.initializeCommonElemnts(
  document.querySelector("[data-modal-overlay]"),
  document.body
);

const welcomeModal = new Modal(document.querySelector("[data-welcome-modal]"));
welcomeModal.addEventListeners(
  document.querySelector("[data-welcome-open]"),
  document.querySelector("[data-welcome-close]")
);

document.querySelectorAll(".nav-item").forEach((item) => {
  const link = item.querySelector(".nav-link");
  const dropdown = item.querySelector(".dropdown");

  link.addEventListener("click", (event) => {
    event.preventDefault();

    const isActive = dropdown.classList.contains("active");
    document
      .querySelectorAll(".dropdown")
      .forEach((dd) => dd.classList.remove("active"));

    if (!isActive) {
      dropdown.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("name");
  if (savedName)
    document.querySelector(
      "[data-welcome-open]"
    ).textContent = `Вітаємо, ${savedName}`;

  refs.modalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{4,20}$/;

    if (!nameRegex.test(name)) {
      alert("Да ебись оно в рот");
      return;
    }

    localStorage.setItem("name", name)

    welcomeModal.close();
    document.querySelector(
      "[data-welcome-open]"
    ).textContent = `Вітаємо, ${name}`;
  });
});
