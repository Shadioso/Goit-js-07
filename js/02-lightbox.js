// Change code below this line
import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(`.gallery`);
//
const addGallaryItem = (images) => {
  return images
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            alt=${description}
          />
        </a></li>`;
    })
    .join(``);
};

gallery.insertAdjacentHTML(`beforeend`, addGallaryItem(galleryItems));
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
