// Show Our Work section
const ourWorkBtn = document.getElementById("ourWorkBtn");
const mainContent = document.getElementById("mainContent");
const ourWork = document.getElementById("ourWork");
const backBtn = document.getElementById("backBtn");

ourWorkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mainContent.classList.add("hidden");
  ourWork.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  ourWork.classList.add("hidden");
  mainContent.classList.remove("hidden");
});

// Modal functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const closeModal = document.getElementById("closeModal");
const images = document.querySelectorAll(".gallery img");

let currentIndex = 0;

images.forEach((img, i) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
    currentIndex = i;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Prev / Next
document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
  caption.innerHTML = images[currentIndex].alt;
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
  caption.innerHTML = images[currentIndex].alt;
});
