import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

for (const img of galleryItems) {
  const listEl = `<div class="gallery__item">
    <a class="gallery__link" href=${img.original}>
      <img
        class="gallery__image"
        src=${img.preview}
        data-source=${img.original}
        alt=${img.description}
      />
    </a>
  </div>`;
  galleryEl.insertAdjacentHTML("beforeend", listEl);
}
galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  const box = new SimpleLightbox(`<img src="${event.target.dataset.source}">`);
  box.show();
});