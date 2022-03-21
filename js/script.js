// let i;
// const columnEnd = function () {
//   for (i = 0, i < 6; i++; ) {
//     images[i].style.gridColumn = "6/7";
//   }
// };
// const animationStyle = function (x) {
//   x.classList.toggle("animation");
// };

// // setInterval(columnEnd, 3000);

// let x;
// let distance = 65;

// const countDistance = function (x) {
//   x.style.transform = `translateX(-${distance}rem)`;
// };

// const fastTransition = function (x) {
//   x.classList.add("hidden");
// };

// const normalTransition = function (x) {
//   x.classList.remove("hidden");
// };

// const styleTransform = function (x) {
//   x.style.transform = "translateX(0)";
// };

// const moveLeft = function () {
//   if (distance < 65 * 6) {
//     images.forEach(countDistance);
//     return (distance += 65);
//   } else {
//     images.forEach(fastTransition);
//     images.forEach(styleTransform);

//     return (distance = 65);
//   }
// };

// const completeF = function () {
//   moveLeft();
//   images.forEach(normalTransition);
// };

let i = 0;
let currentDistance = 0;
const imgWidth = 65;
const images = document.querySelectorAll(".gallery-image");

const transformLeft = function (imm) {
  imm.style.transform = `translateX(-${currentDistance + imgWidth}rem)`;
};
let imgZindex = 0;

let galleryInactivityTimer = 6500;

const moveLeft = function () {
  if (i > 0) {
    images[i].style.animation = "moveLeftAgain";
    images[i].style.animationDuration = "0.8s";
    i--;
  } else {
    i = images.length - 1;

    images[0].style.animation = "moveLeftAgain";
    images[0].style.animationDuration = "0.8s";
  }
  images[i].style.zIndex = `${imgZindex}`;
  images[i].style.animation = "moveLeft";
  images[i].style.animationDuration = "0.8s";
  images[i].style.opacity = "1";
  imgZindex += 1;
  console.log(i);

  return imgZindex;
};

const moveRight = function () {
  if (i < images.length - 1) {
    i++;

    images[i - 1].style.animation = "moveRightAgain";
    images[i - 1].style.animationDuration = "0.8s";
  } else {
    i = 0;
    images[images.length - 1].style.animation = "moveRightAgain";
    images[images.length - 1].style.animationDuration = "0.8s";
  }

  images[i].style.zIndex = `${imgZindex}`;
  images[i].style.animation = "moveRight";
  images[i].style.animationDuration = "0.8s";
  images[i].style.opacity = "1";
  console.log(i);
  imgZindex += 1;

  return imgZindex;
};

// setInterval(moveLeft, 3000);
const gallery = document.querySelector(".gallery-images");

const galleryBtn = document.querySelector(".gallery-btn");
const galleryBtnRight = document.querySelector(".gallery-btn-right");
const galleryBtnLeft = document.querySelector(".gallery-btn-left");

galleryBtnRight.addEventListener("click", moveRight);
galleryBtnLeft.addEventListener("click", moveLeft);
// clearInterval(myTimer);
gallery.addEventListener("mouseenter", function () {
  intervals.forEach(function (interval) {
    clearInterval(interval);
  });
  intervals.pop();
});
gallery.addEventListener("mouseleave", function () {
  intervals.push(setInterval(moveRight, 5000));
});

let intervals = [];
intervals.push(setInterval(moveRight, 5000));
