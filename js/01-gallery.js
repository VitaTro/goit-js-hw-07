import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery'); 

const items = galleryItems.map((galleryItem) => {
  return   `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`;
 }).join(''); 
 gallery.innerHTML = items;

gallery.addEventListener('click', (event) => {
event.preventDefault();

if (event.target.nodeName !== "IMG") {
return;
}

const lightboxShow = basicLightbox.create(`
    <img src="${event.target.dataset.source}" />
  `);

  lightboxShow.show();

  const lightboxClose = basicLightbox.create(`
  <img src="${event.target.dataset.source}" />
`);

lightboxShow.close();
  

});

console.log(galleryItems);


gallery.addEventListener('click', (event) => {
event.preventDefault();

if (event.target.nodeName !== "IMG") {
  return;
}

const lightbox = basicLightbox.create(`
    <img src="${event.target.dataset.source}" />
  `);

  lightbox.show();

 document.addEventListener('keydown', (event) => {
if(event.key === 'Escape') {
    lightbox.close();
}
 });
});

console.log(galleryItems);


