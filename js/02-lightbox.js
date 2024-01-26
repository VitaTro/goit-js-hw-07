import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

for (let item of galleryItems) {
    
    const linkGallery = document.createElement("a");
    linkGallery.href = item.original;
    linkGallery.classList.add("gallery__link");

    const imageGallery = document.createElement("img");
    imageGallery.classList.add("gallery__image");
    imageGallery.src = item.preview;
    imageGallery.alt = item.description;

    linkGallery.append(imageGallery); 
    gallery.append(linkGallery); 
   
}


