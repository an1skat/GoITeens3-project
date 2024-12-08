const refs = {
  themeBtn: document.querySelector(".theme-btn"),
  themeImg: document.querySelector(".theme-img"),
};

function toggleTheme() {
  const isLight = refs.themeImg.classList.toggle("light");
  refs.themeImg.classList.toggle("dark", !isLight);
  refs.themeImg.src = isLight ? "./img/themeDark.png" : "./img/themeLight.png";
}

refs.themeBtn.addEventListener("click", toggleTheme);

document.querySelectorAll('.nav-item').forEach((item) => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown');
  
    link.addEventListener('click', (event) => {
      event.preventDefault();
  
      const isActive = dropdown.classList.contains('active');
      document.querySelectorAll('.dropdown').forEach((dd) => dd.classList.remove('active'));
  
      if (!isActive) {
        dropdown.classList.add('active');
      }
    });
  });
  