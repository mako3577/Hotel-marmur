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

let i = 1;
let currentDistance = 0;
const imgWidth = 65;
const images = document.querySelectorAll(".gallery-image");

const transformLeft = function (imm) {
  imm.style.transform = `translateX(-${currentDistance + imgWidth}rem)`;
};
let imgZindex = 0;

const moveLeft = function () {
  if (i < images.length) {
    images[i].style.zIndex = `${imgZindex}`;
    images[i].style.animation = "moveRight";
    images[i].style.animationDuration = "1s";
    images[i].style.opacity = "1";

    for (let step = 0; step < i; step++) {
      images[step].style.animation = "moveLeftAgain";
      images[step].style.animationDuration = "1s";
    }

    i++;
    imgZindex += 1;
  } else {
    i = 0;
    images[i].style.zIndex = `${imgZindex}`;
    images[i].style.animation = "moveRight";
    images[i].style.animationDuration = "1s";
    images[i].style.opacity = "1";
    images[5].style.animation = "moveLeftAgain";
    images[5].style.animationDuration = "1s";

    for (let step = 0; step < i; step++) {
      images[step].style.animation = "moveLeftAgain";
      images[step].style.animationDuration = "1s";
    }
    imgZindex += 1;
    i++;
  }
  console.log(i);
  return imgZindex;
};

// setInterval(moveLeft, 3000);

const galleryBtn = document.querySelector(".gallery-btn");

galleryBtn.addEventListener("click", moveLeft);
