const topBtn = document.querySelector(".top__left-btn");
const sectionMenu = document.getElementById("menu");

topBtn.addEventListener("click", function () {
  sectionMenu.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const coffeeBtn = document.getElementById("coffee-btn");
const dessertBtn = document.getElementById("dessert-btn");
const snacksBtn = document.getElementById("snacks-btn");

const coffeeContent = document.getElementById("coffee-content");
const dessertContent = document.getElementById("dessert-content");
const snacksContent = document.getElementById("snacks-content");

coffeeBtn.addEventListener("click", function () {
  coffeeBtn.classList.add("active");
  dessertBtn.classList.remove("active");
  snacksBtn.classList.remove("active");
  coffeeContent.classList.remove("hidden");
  dessertContent.classList.add("hidden");
  snacksContent.classList.add("hidden");
});

dessertBtn.addEventListener("click", function () {
  dessertBtn.classList.add("active");
  coffeeBtn.classList.remove("active");
  snacksBtn.classList.remove("active");
  dessertContent.classList.remove("hidden");
  coffeeContent.classList.add("hidden");
  snacksContent.classList.add("hidden");
});

snacksBtn.addEventListener("click", function () {
  snacksBtn.classList.add("active");
  coffeeBtn.classList.remove("active");
  dessertBtn.classList.remove("active");
  snacksContent.classList.remove("hidden");
  coffeeContent.classList.add("hidden");
  dessertContent.classList.add("hidden");
});
