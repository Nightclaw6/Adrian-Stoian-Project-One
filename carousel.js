// Variables

const carousel = document.querySelector(".carousel");
const nextButton = document.querySelector(".right-btn");
const previousButton = document.querySelector(".left-btn");
const nav = document.querySelector(".nav");
const dots = [...nav.children];
const slides = [...carousel.children];

// getting the image width
let slideWidth = slides[0].getBoundingClientRect().width;

positionSlides(slides);

// Button navigation (left/right)

nextButton.addEventListener("click", function(){
    const currentSlide = carousel.querySelector(".active");
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(carousel, currentSlide, nextSlide);
    hideButton(nextSlide, slides);
    moveToDot(nextSlide, slides, nav, dots);
});

previousButton.addEventListener("click", function(){
    const currentSlide = carousel.querySelector(".active");
    const previousSlide = currentSlide.previousElementSibling;
    
    moveToSlide(carousel, currentSlide, previousSlide);
    hideButton(previousSlide, slides);
    moveToDot(previousSlide, slides, nav, dots);
});

// Dot navigation

nav.addEventListener("click", function(e){

    if(e.target === nav) return;

    const targetDot = e.target;

    const currentDot = nav.querySelector(".active");

    const currentSlide = carousel.querySelector(".active");

    let targetDotIndex = findIndex(targetDot, dots);
    
    const targetSlide = slides[targetDotIndex];

    moveToSlide(carousel, currentSlide, targetSlide);
    toggleActive(currentDot, targetDot);
    hideButton(targetSlide, slides);
})

// Functions

// positioning images orizontally
function positionSlides(slides){
    for(let index = 0; index < slides.length; index++){
        slides[index].style.left = slideWidth * index + "px";
    }
}

// Moving the dots
function moveToDot(targetSlide, slides, nav, dots){
    let slideIndex = findIndex(targetSlide, slides);
    const currentDot = nav.querySelector(".active");
    const targetDot = dots[slideIndex];
    toggleActive(currentDot, targetDot);
}
// Moving images
function moveToSlide(carousel, currentSlide, targetSlide){
    const position = targetSlide.style.left;
    carousel.style.transform = `translateX(-${position})`;
    toggleActive(currentSlide, targetSlide);
}

// Changing active class
function toggleActive(current, target){
    current.classList.remove("active");
    target.classList.add("active");
}

// Hiding buttons
function hideButton(targetSlide, slides){
    
    if(targetSlide === slides[0]){
        previousButton.classList.add("hide");
        nextButton.classList.remove("hide");
    }else if(targetSlide === slides[slides.length - 1]){
        nextButton.classList.add("hide");
        previousButton.classList.remove("hide");
    }else{
        previousButton.classList.remove("hide");
        nextButton.classList.remove("hide");
    }
}

// Getting the current index in the array
function findIndex(item, items){
    for(let index = 0; index < items.length; index++){
        if(item === items[index]){
            return index;
        }
    }
}