import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryEl = galleryItems.map(({preview, original, description}) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`);

gallery.insertAdjacentHTML("beforeend", galleryEl.join(''));

gallery.addEventListener('click', (event) => {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img      
      src="${event.target.dataset.source}"
     />
`, {
    onShow: (instance) => {
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                instance.close()
            }
        })
    },
    onClose: (instance) => {
        document.removeEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                instance.close()
            }
        })
    }
})
    instance.show()
    
});





