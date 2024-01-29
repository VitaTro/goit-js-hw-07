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


 const openGallery = (event) => {
  event.preventDefault();
  
  const imageTarget = event.target;
  if (event.target.nodeName !== "IMG") 
    return;

  
  const lightbox = basicLightbox.create(`
      <img src="${event.target.dataset.source}" />
    `, {
     
      onShow: () => {
        addEventListener ('keydown', closeGallery);
     },
      onClose: () => {
        removeEventListener ('keydown', closeGallery);
      },

    });
  
    lightbox.show();

  function closeGallery(event){
  if (event.key === 'Escape') {
    lightbox.close();
}
}
 };
 gallery.addEventListener("click", openGallery);
  console.log(galleryItems);
