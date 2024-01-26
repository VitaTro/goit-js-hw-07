import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery'); 

for (let item of galleryItems) {
    const itemGallery = document.createElement('div');
    itemGallery.classList.add('gallery__item');

    const linkGallery = document.createElement('a');
    linkGallery.classList.add('gallery__link');
    linkGallery.href = item.original;

const imageGallery = document.createElement('img');
imageGallery.classList.add('gallery__image');
imageGallery.src = item.preview;
imageGallery.alt = item.description;
imageGallery.dataset.source = item.original;

linkGallery.append(imageGallery);
itemGallery.append(linkGallery);
gallery.append(itemGallery);
};



console.log(galleryItems);
