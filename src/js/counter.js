const numbers = document.querySelectorAll('[data-key="number"]');
let countingStarted = false;

function counting(number) {
  let target = parseInt(number.getAttribute("data-target"));
  let count = 0;
  let speed = 15;

  let counting = setInterval(() => {
    if (count <= target) {
      count += Math.ceil(target / 100);
      number.innerHTML = count;
    } else {
      number.innerHTML = `${target}+`;
      clearInterval(counting);
    }
  }, speed);
}

window.addEventListener("scroll", () => {
  let sectionPosition =
    numbers[0].closest("section").getBoundingClientRect().top * 1.3;
  let screenHeight = window.innerHeight;

  if (sectionPosition < screenHeight && !countingStarted) {
    numbers.forEach((number) => counting(number));
    countingStarted = true;
  }
});
