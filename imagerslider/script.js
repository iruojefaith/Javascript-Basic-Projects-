const image = document.querySelectorAll(".image");
const nextButton = document.querySelectorAll(".next");
const prevButton = document.querySelectorAll(".prev");
const imageNumber = document.querySelectorAll(".slide-image-number");
const totalImageNumber = document.querySelectorAll(".total-image-number");


//IMAGE ARRAY
const images = [
 "./assets/slider1.jpeg",
 "./assets/slider2.jpeg",
 "./assets/slider3.jpeg",
 "./assets/slider4.jpeg"
];

let currentImage = 0;

window.addEventListener("DOMContentLoaded", () => {
    showImage();
});

//change image onclick button
function showImage() {
    for (i of image) {
        i.src = images[currentImage];
    }

    for (i of imageNumber) {
        i.textContent = currentImage + 1;
    }
     for (i of totalImageNumber) {
        i.textContent = images.length;
    }
}


for (i of nextButton) {
i.addEventListener('click', () => {
    currentImage++;
    if (currentImage > images.length - 1) {
        currentImage = 0;
    }
    showImage(currentImage);
});
}

for (i of prevButton) {
i.addEventListener('click', () => {
currentImage--;
if (currentImage < 0) {
    currentImage = images.length - 1;
}
showImage(currentImage);
});
}