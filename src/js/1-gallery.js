const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
const gallery = document.querySelector('ul');
const galleryNew = images
  .map(
    elem =>
      `<li class="gallery-item">
     <a class="gallery-link" href="${elem.original}"> 
      <img class="gallery-image" src="${elem.preview}" alt ="${elem.description}"
      data-source="${elem.original}" width= "360" height="200"/>
      </a>
      </li>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', galleryNew);
const itemPicture = document.querySelector('.gallery');
let currentImageIndex = null;
let modalWindow = null;

itemPicture.addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const galleryCard = event.target.closest('.gallery-image');
  const linkCard = galleryCard.dataset.source;
  currentImageIndex = images.findIndex(image => image.original === linkCard);

  modalWindow = basicLightbox.create(
    `
    <img class="image-modal" src="${linkCard}" />`,
    {
      className: 'modal',
      onShow: () => {
        window.addEventListener('keydown', onKeyPress);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeyPress);
      },
    }
  );
  modalWindow.show();
});

function onKeyPress(event) {
  if (currentImageIndex === null) return;

  if (event.key === 'ArrowRight') {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateModalImage();
  } else if (event.key === 'ArrowLeft') {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateModalImage();
  } else if (event.key === 'Escape') {
    if (modalWindow && modalWindow.visible()) {
      modalWindow.close();
    }
  }
}

function updateModalImage() {
  const newImage = images[currentImageIndex].original;

  const modalImage = document.querySelector('.image-modal');
  if (modalImage) {
    modalImage.src = newImage;
  }
}
