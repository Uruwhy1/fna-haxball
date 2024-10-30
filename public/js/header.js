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

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".links");
  const links = document.querySelectorAll(".links a");

  function moveIndicator(target) {
    const { left, width } = target.getBoundingClientRect();
    const parentLeft = target.parentNode.getBoundingClientRect().left;

    container.style.setProperty("--opacity", "1");
    container.style.setProperty("--width", width);
    container.style.setProperty(
      "--translate",
      `translateX(${left - parentLeft}px)`
    );
  }

  links.forEach((link) => {
    link.addEventListener("mouseenter", (e) => moveIndicator(e.target));
  });

  document.querySelector(".links").addEventListener("mouseleave", () => {
    container.style.setProperty("--opacity", "0");
  });
});
