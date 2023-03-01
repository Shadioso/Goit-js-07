import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(`.gallery`);
//
const addGallaryItem = (images) => {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link">
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </div>`;
    })
    .join(``);
};

//
const openLargePhoto = (evt) => {
  if (evt.target.nodeName !== `IMG`) {
    return;
  }
  const modal = basicLightbox.create(
    `<img
    class="gallery__image"
    src=${evt.target.dataset.source}

  />`,
    {
      onShow: () => window.addEventListener(`keydown`, escapeBtn),
      onClose: () => window.removeEventListener(`keydown`, escapeBtn),
    }
  );

  modal.show();
  function escapeBtn(evt) {
    if (evt.code !== `Escape`) {
      return;
    }
    modal.close();
  }
};

//

gallery.insertAdjacentHTML(`beforeend`, addGallaryItem(galleryItems));
gallery.addEventListener(`click`, openLargePhoto);
