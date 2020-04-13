// Left Container
const left_btn_container = document.getElementById("left-btn-container");
const about_me_btn = document.getElementById("left-btn");
const about_me_container = document.getElementById("about-me-container");

about_me_btn.addEventListener("click", () => {
  left_btn_container.style.visibility = "hidden";
  left_btn_container.style.opacity = "0";
  left_btn_container.style.transition = "opacity 0.7s linear";
  setTimeout(() => {
    about_me_container.style.visibility = "visible";
    about_me_container.style.opacity = "1";
    about_me_container.style.transition = "opacity 3s";
  }, 700);
});

// Right Container
const right_btn_container = document.getElementById("right-btn-container");
const my_works_btn = document.getElementById("right-btn");
const my_works_container = document.getElementById("my-works-container");

my_works_btn.addEventListener("click", () => {
  right_btn_container.style.visibility = "hidden";
  right_btn_container.style.opacity = "0";
  right_btn_container.style.transition = "opacity 0.7s linear";
  setTimeout(() => {
    my_works_container.style.visibility = "visible";
    my_works_container.style.opacity = "1";
    my_works_container.style.transition = "opacity 3s";
  }, 700);
});

// Middle Line
const middle_line = document.getElementById("middle-line");
let n = null;

const show_shadow = () => {
  // n = Math.floor(Math.random() * 3) + 1; // random numer between 1 and 3

  // while (n != 0) {
  //   console.log(n);
  //   middle_line.classList.toggle("line-shadow");
  //   // setTimeout(() => {
  //   //   middle_line.classList.toggle("line-shadow");
  //   // }, 1000);

  //   n = n - 1;
  // }

  n = Math.floor(Math.random() * 20) + 1; // random numer between 1 and 10
  if (n >= 15) {
    middle_line.classList.toggle("line-shadow");
    //middle_line.classList.toggle("line-shadow");
  }
};

setInterval(show_shadow, 100);
