import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainerRef = document.querySelector('.gallery');

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `        
        <a class="gallery__item" href="${original}">
          <img class="gallery__image"
          src="${preview}"
          alt="${description}" />
        </a>
        `;
    })
    .join('');
}

galleryContainerRef.insertAdjacentHTML(
  'beforeend',
  createGallery(galleryItems)
);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionType: 'attr',
  captionDelay: 300,
});



lightbox.on('show.simplelightbox');
