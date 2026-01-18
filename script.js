
const items = document.querySelectorAll(".item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showItem(newIndex) {
  items[index].classList.remove("active");
  index = (newIndex + items.length) % items.length;
  items[index].classList.add("active");
}

nextBtn.addEventListener("click", () => showItem(index + 1));
prevBtn.addEventListener("click", () => showItem(index - 1));

/* 🔥 LUZ + PARALLAX + SOMBRA DINÂMICA */
document.addEventListener("mousemove", e => {
  const activeItem = items[index];
  if (!activeItem) return;

  const img = activeItem.querySelector(".car-img img");

  const x = (window.innerWidth / 2 - e.clientX) / 35;
  const y = (window.innerHeight / 2 - e.clientY) / 35;

  img.style.transform = `
    rotate(-12deg)
    translate(${x}px, ${y}px)
  `;

  img.style.filter = `
    drop-shadow(${-x * 2}px ${y * 2}px 60px rgba(0,0,0,.75))
    brightness(${1 + y / 250})
  `;
});
