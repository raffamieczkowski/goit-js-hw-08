import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

for (const img of galleryItems) {
  const listEl = `<div class="gallery__item">
    <li class="gallery__link" href=${img.original}>
      <img
        class="gallery__image"
        src=${img.preview}
        data-source=${img.original}
        alt=${img.description}
      />
    </li>
  </div>`;
  galleryEl.insertAdjacentHTML("beforeend", listEl);
}
const lightbox = new SimpleLightbox(".gallery li", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
});