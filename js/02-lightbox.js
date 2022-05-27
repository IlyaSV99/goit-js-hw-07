import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');


function renderGalleryMarkup(arr) {

    const renderImgList = arr.map(({ description, preview, original }) => `
    <div class="gallery__item"><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" loading='lazy'/></a></div>`).join('\n');

    
    gallery.insertAdjacentHTML('beforeend', renderImgList);
}
renderGalleryMarkup(galleryItems);


let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250, });