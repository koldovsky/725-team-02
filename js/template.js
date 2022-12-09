let activeIndex = 0;
const dots = document.querySelectorAll(".dot");
const sliderLine = document.querySelector(".slider-line");
const slidesCount = sliderLine.children.length;

const setActiveDot = (index) => {
  dots.forEach(dot => {
    dot.classList.remove('is-active');
  });

  dots[index].classList.add('is-active');
}

const setOffset = (index) => {
  sliderLine.style.left = -(index * 100) + "%";

  setActiveDot(index);
}


document.querySelector(".slider-next").addEventListener("click", function () {
  activeIndex++

  if (activeIndex >= slidesCount) {
    activeIndex = 0;
  }

  setOffset(activeIndex);
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  activeIndex--
  
  if (activeIndex < 0) {
    activeIndex = slidesCount - 1;
  }

  setOffset(activeIndex);
});

dots.forEach(dot => {
  dot.addEventListener('click', function handleClick(event) {
    setOffset(dot.getAttribute('data-id'));
  });
});