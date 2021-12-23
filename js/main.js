/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-moon";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

if (selectedTheme) {
  document.body.classList[selectedTheme === "light" ? "add" : "remove"](
    lightTheme
  );

  themeButton.classList[selectedIcon === "bx bx-sun" ? "add" : "remove"](
    iconTheme
  );
}

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "light" : "dark";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  // themeButton.classList.toggle(iconTheme);

  if (getCurrentIcon() === "bx bx-sun") {
    themeButton.classList.remove("bx-sun");
    themeButton.classList.add("bx-moon");
  } else {
    themeButton.classList.remove("bx-moon");
    themeButton.classList.add("bx-sun");
  }

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
