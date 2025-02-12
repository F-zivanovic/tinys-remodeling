let slideIndices = {
  slider1: 0,
  slider2: 0,
  slider3: 0,
  slider4: 0,
  slider5: 0,
  slider6: 0,
};

function moveSlide(step, sliderId) {
  const slider = document.querySelector(`#${sliderId} .projects__slides`);
  const totalSlides = slider.children.length;

  slideIndices[sliderId] += step;

  if (slideIndices[sliderId] >= totalSlides) {
    slideIndices[sliderId] = 0;
  } else if (slideIndices[sliderId] < 0) {
    slideIndices[sliderId] = totalSlides - 1;
  }

  slider.style.transform = `translateX(-${slideIndices[sliderId] * 100}%)`;
}
