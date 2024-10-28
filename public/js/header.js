document.addEventListener("DOMContentLoaded", () => {
  const headerLinks = document.querySelectorAll("header .links a");
  const currentActive = document.querySelector(".currentPage");

  currentActive.classList.remove("currentPage");
  switch (window.location.pathname) {
    case "/":
      headerLinks[0].classList.add("currentPage");
      break;
    case "/news":
      headerLinks[1].classList.add("currentPage");
      break;
    case "/tracks":
      headerLinks[2].classList.add("currentPage");
      break;
    case "/drivers":
      headerLinks[3].classList.add("currentPage");
      break;
    case "/teams":
      headerLinks[4].classList.add("currentPage");
    default:
      break;
  }
});
