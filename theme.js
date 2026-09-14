(function () {
  const savedTheme = localStorage.getItem("eagleHospitalTheme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");

  if (!toggle || !icon) return;

  function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-mode");

    icon.textContent = isDark ? "☀️" : "🌙";

    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to day mode" : "Switch to night mode"
    );
  }

  updateThemeButton();

  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem(
      "eagleHospitalTheme",
      isDark ? "dark" : "light"
    );

    updateThemeButton();
  });
})();
