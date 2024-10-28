let currentIndex = 0;
const cardContainer = document.getElementById("cardContainer");

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, idx) => {
    console.log(idx, dot, currentIndex);
    dot.classList.toggle("active", idx === currentIndex);
  });
}
const goToSlide = (index) => {
  let cardContainer = document.querySelector(".card-container");
  currentIndex = index;
  updateDots();

  switch (index) {
    case 0:
      cardContainer.style.transform = "translateX(0)";
      break;
    case 1:
      cardContainer.style.transform = "translateX(calc(-100vw))";
      break;
    case 2:
      cardContainer.style.transform = "translateX(calc(-200vw )";
      break;
    default:
      break;
  }
};
