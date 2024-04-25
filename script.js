let next = document.getElementById('next');
let prev = document.getElementById('prev');
let interval;
// let img = document.getElementById('image');


const imageNames = ['ai-generated-8674235_1280.png', 'car-5548242_1280.jpg', 'vw-1835506_1280.jpg', 'audi-8336484_1280.jpg', 'fiat-500-4322521_1280.jpg'];
let currentImage = 0;

/**
 * Every 5 seconds, update the image
 */
function updateImageSource(nextImage = 'next') {
    const img = document.getElementById('image');
    nextImage && nextImage == 'next' ? currentImage++ : currentImage--;

    if (currentImage === -1) {
        currentImage = imageNames.length - 1;
    } else if (currentImage == imageNames.length){
        currentImage = 0;
    }
    img.src = `img/${imageNames[currentImage]}`;
}

const resetSlidingInterval = () => {interval = setInterval(updateImageSource, 5000)};

resetSlidingInterval();

function nextClick() {
    updateImageSource('next');
    clearTimeout(interval);
    resetSlidingInterval();
}

function prevClick() {
    updateImageSource('prev');
    clearTimeout(interval);
    resetSlidingInterval();
}

