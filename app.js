const dark = document.querySelector(".dark");
const sun = document.querySelector(".sun");
const container = document.querySelector("body");

dark.addEventListener("click", function () {
  container.classList.toggle("light");
});
sun.addEventListener("click", function () {
  container.classList.toggle("light");
 
});


