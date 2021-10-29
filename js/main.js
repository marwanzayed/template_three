/*
 ** Countdown Timer
 ** Video URL: https://www.youtube.com/watch?v=eFsiOTJrrE8
 */

// The End Of The Year Date
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

/*
 ** Animate Width On Scrolling
 ** Video URL: https://youtu.be/sbIoIKI9FOc
 */

/*
 ** Increase Numbers On Scrolling
 ** Video URL: https://youtu.be/PLsUdgLnzgQ
 */

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

let arrowUp = document.getElementById("top");

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  /*
    Scroll To Top
  */
  if (window.scrollY >= 500) {
    arrowUp.style.cssText = "opacity: 1; visibility: visible;";
  } else {
    arrowUp.style.cssText = "opacity: 0; visibility: hidden;";
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

/*
  Show And Hidden Megamenu
*/
let li = document.getElementById("menu");
let megaMenu = document.getElementById("mega-menu");
let linkA = document.getElementById("active");

li.onclick = () => {
  li.classList.toggle("open");
  if (li.classList.contains("open") === true) {
    linkA.classList.add("active");
    megaMenu.style.cssText = "opacity: 1; z-index: 100; top: calc(100% + 1px);";
  } else {
    linkA.classList.remove("active");
    megaMenu.style.cssText = "opacity: 0; z-index: -1; top: calc(100% + 50px);";
  }
};

// Scroll To Top

arrowUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
