/* ==================================================
   HAMBURGER MENU
================================================== */

function toggleMenu() {

  const menu =
    document.getElementById("mobile-menu");

  if (!menu) {
    return;
  }

  menu.classList.toggle("open");
}


/* ==================================================
   HERO CAROUSEL
================================================== */

const heroCarousel =
  document.querySelector(".hero-carousel");

const heroSlides =
  document.querySelectorAll(".hero-slide");

const heroDots =
  document.querySelectorAll(".hero-dot");

let currentSlide = 0;

let touchStartX = 0;
let touchEndX = 0;


/* SLIDE DISPLAY */

function showSlide(index) {

  if (!heroSlides.length) {
    return;
  }

  heroSlides.forEach(function (slide) {

    slide.classList.remove("active");

  });


  heroDots.forEach(function (dot) {

    dot.classList.remove("active");

  });


  heroSlides[index].classList.add("active");


  if (heroDots[index]) {

    heroDots[index].classList.add("active");

  }


  currentSlide = index;
}


/* NEXT */

function nextSlide() {

  if (!heroSlides.length) {
    return;
  }

  currentSlide++;


  if (currentSlide >= heroSlides.length) {

    currentSlide = 0;

  }


  showSlide(currentSlide);
}


/* PREVIOUS */

function prevSlide() {

  if (!heroSlides.length) {
    return;
  }

  currentSlide--;


  if (currentSlide < 0) {

    currentSlide = heroSlides.length - 1;

  }


  showSlide(currentSlide);
}


/* AUTO SLIDE */

if (heroSlides.length > 1) {

  setInterval(nextSlide, 5000);

}


/* HERO TOUCH */

if (heroCarousel) {

  heroCarousel.addEventListener(
    "touchstart",
    function (event) {

      touchStartX =
        event.changedTouches[0].screenX;

    },
    { passive: true }
  );


  heroCarousel.addEventListener(
    "touchend",
    function (event) {

      touchEndX =
        event.changedTouches[0].screenX;

      handleSwipe();

    },
    { passive: true }
  );

}


/* HERO SWIPE */

function handleSwipe() {

  const distance =
    touchEndX - touchStartX;


  if (distance < -50) {

    nextSlide();

  }


  if (distance > 50) {

    prevSlide();

  }

}


/* ==================================================
   PHOTO MODAL
================================================== */

const photos = [
  "IMG_7628.jpeg",
  "IMG_7629.jpeg",
  "IMG_7630.jpeg"
];

let currentPhoto = 0;


/* OPEN PHOTO */

function openPhoto(index) {

  const modal =
    document.getElementById("photo-modal");

  const image =
    document.getElementById("modal-image");


  if (!modal || !image) {
    return;
  }


  currentPhoto = index;

  image.src = photos[currentPhoto];

  modal.style.display = "flex";
}


/* CLOSE PHOTO */

function closePhoto() {

  const modal =
    document.getElementById("photo-modal");


  if (!modal) {
    return;
  }


  modal.style.display = "none";
}


/* NEXT PHOTO */

function nextPhoto() {

  if (!photos.length) {
    return;
  }


  currentPhoto++;


  if (currentPhoto >= photos.length) {

    currentPhoto = 0;

  }


  updateModalPhoto();
}


/* PREVIOUS PHOTO */

function previousPhoto() {

  if (!photos.length) {
    return;
  }


  currentPhoto--;


  if (currentPhoto < 0) {

    currentPhoto = photos.length - 1;

  }


  updateModalPhoto();
}


/* UPDATE PHOTO */

function updateModalPhoto() {

  const image =
    document.getElementById("modal-image");


  if (!image) {
    return;
  }


  image.src = photos[currentPhoto];
}


/* PHOTO SWIPE */

const photoModal =
  document.getElementById("photo-modal");


let photoTouchStartX = 0;
let photoTouchEndX = 0;


if (photoModal) {

  photoModal.addEventListener(
    "touchstart",
    function (event) {

      photoTouchStartX =
        event.changedTouches[0].screenX;

    },
    { passive: true }
  );


  photoModal.addEventListener(
    "touchend",
    function (event) {

      photoTouchEndX =
        event.changedTouches[0].screenX;

      const distance =
        photoTouchEndX - photoTouchStartX;


      if (Math.abs(distance) < 50) {
        return;
      }


      if (distance < 0) {

        nextPhoto();

      } else {

        previousPhoto();

      }

    },
    { passive: true }
  );

}