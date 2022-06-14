const img = [
  `<img src="images/pexels-abdullah-ghatasheh-3703813.jpg" alt="" />`,
  `<img src="images/pexels-abdullah-ghatasheh-3789026 (1).jpg" alt="" />`,
  `<img src="images/pexels-asad-photo-maldives-9394644 (1).jpg" alt="" />`,
  `<img src="images/pexels-asad-photo-maldives-9482125 (1).jpg" alt="" />`,
  `<img src="images/pexels-laura-the-explaura-8675649 (1).jpg" alt="" />`,
];

// console.log(img[2]);

const image = document.querySelector(".flex1");

let count = 0;

// image[4].src = img[1];
window.addEventListener("DOMContentLoaded", () => {
  image.innerHTML = img[0];
});
setInterval(carousel, 3000);
const btnRight = document.querySelector(".flex-right");
const btnLeft = document.querySelector(".flex-left");
function carousel() {
  count++;

  image.innerHTML = img[count];

  if (count > 3) {
    count = 0;
  }
}

// btnRight.addEventListener("click", (e) => {
//   count++;
//   image.innerHTML = img[count];
//   if (count > img.length - 1) {
//     count = 0;
//   }
// });
// btnLeft.addEventListener("click", (e) => {
//   count--;
//   e.src = img[count];
//   if (count === 0) {
//     count = img.length - 1;
//   }
// });
const change = ["football", "qatar", "asia"];
const exploreSpan = document.querySelector("span");
// console.log(exploreSpan);

// console.log(exploreSpan.textContent);
let count2 = 0;
function changeHead() {
  count2++;
  exploreSpan.textContent = change[count2];
  if (count2 > change.length - 1) {
    exploreSpan.textContent = change[0];
    count2 = 0;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  exploreSpan.textContent = change[0];
  setInterval(changeHead, 1050);
});

const backgroundDiv = document.querySelector(".bg-attach");
const art1 = document.querySelector(".art1");
const art2 = document.querySelector(".art2");
const art3 = document.querySelector(".art3");
window.addEventListener("scroll", () => {
  const height = backgroundDiv.getBoundingClientRect().y;
  if (height >= 550) {
    art1.classList.add("art1-slide");

    art2.classList.add("art2-slide");

    art3.classList.add("art3-slide");
  }
});

const age = document.querySelector(".age");
const name1 = document.querySelector(".name");
const country = document.querySelector(".country");
const description = document.querySelector(".desc2");
const rightBtn = document.querySelector(`.fa-chevron-right`);
const leftBtn = document.querySelector(`.fa-chevron-left`);
const photo = document.querySelector(`.revImage`);
const d = document.querySelectorAll(".d");

// console.log (description.textContent);

const reviewArr = [
  {
    id: 1,
    name: "anna nekrashevich",
    age: 29,
    country: "UAE",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Numquam laboriosam a, qui asperiores eveniet, est iusto
            quibusdam, quisquam itaque deserunt id veritatis beatae
            doloribus nemo sequi corrupti error eligendi officia?`,
    image: `<img src="./images/portraits/pexels-anna-nekrashevich-8993792.jpg" alt="a portrait"/>`,
  },
  {
    id: 2,
    name: "tony schnagl",
    age: 27,
    country: "minnesota, uk",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Numquam laboriosam a, qui asperiores eveniet, est iusto
            quibusdam, quisquam itaque deserunt id veritatis beatae
            doloribus nemo sequi corrupti error eligendi officia?`,
    image: `<img src="./images/portraits/pexels-tony-schnagl-5588224.jpg" alt="">`,
  },
  {
    id: 3,
    name: `polina tanklievitch`,
    age: 46,
    country: "vienna, austria",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Numquam laboriosam a, qui asperiores eveniet, est iusto
            quibusdam, quisquam itaque deserunt id veritatis beatae
            doloribus nemo sequi corrupti error eligendi officia?`,
    image: `<img src="./images/portraits/pexels-polina-tankilevitch-5473070.jpg" alt="">`,
  },

  {
    id: 4,
    name: "john lopes",
    age: 32,
    country: "mexico",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Numquam laboriosam a, qui asperiores eveniet, est iusto
            quibusdam, quisquam itaque deserunt id veritatis beatae
            doloribus nemo sequi corrupti error eligendi officia?`,
    image: ` <img src="./images/portraits/pexels-a-frame-in-motion-11346907.jpg" alt="">`,
  },
  {
    id: 5,
    name: "aisha maji",
    age: 24,
    country: "nigeria",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Numquam laboriosam a, qui asperiores eveniet, est iusto
            quibusdam, quisquam itaque deserunt id veritatis beatae
            doloribus nemo sequi corrupti error eligendi officia?`,
    image: `     <img src="./images/portraits/pexels-muhammadtaha-ibrahim-ma'aji-10476512.jpg" alt="">`,
  },
];

let count3 = 0;

rightBtn.addEventListener("click", () => {
  if (count3 === reviewArr.length - 1) {
    count3 = 0;
  } else {
    count3++;
  }

  // "this code works too"

  // age.textContent = reviewArr[count3].age;
  // name1.textContent = reviewArr[count3].name;
  // country.textContent = reviewArr[count3].country;
  // description.textContent = reviewArr[count3].description;
  // photo.innerHTML = reviewArr[count3].image;

  d.forEach((e) => {
    if (e.classList.contains("name")) {
      e.textContent = reviewArr[count3].name;
    } else if (e.classList.contains("age")) {
      e.textContent = reviewArr[count3].age;
    } else if (e.classList.contains("country")) {
      e.textContent = reviewArr[count3].country;
    } else if (e.classList.contains("desc2")) {
      e.textContent = reviewArr[count3].description;
    } else {
      e.innerHTML = reviewArr[count3].image;
    }
  });
});

leftBtn.addEventListener("click", () => {
  if (count3 === 0) {
    count3 = reviewArr.length - 1;
  } else {
    count3--;
  }

  // 'this code works too'

  // name1.textContent = reviewArr[count3].name;
  // age.textContent = reviewArr[count3].age;
  // country.textContent = reviewArr[count3].country;
  // description.textContent = reviewArr[count3].description;
  // photo.innerHTML = reviewArr[count3].image;

  d.forEach((e) => {
    if (e.classList.contains("name")) {
      e.textContent = reviewArr[count3].name;
    } else if (e.classList.contains("age")) {
      e.textContent = reviewArr[count3].age;
    } else if (e.classList.contains("country")) {
      e.textContent = reviewArr[count3].country;
    } else if (e.classList.contains("desc2")) {
      e.textContent = reviewArr[count3].description;
    } else {
      e.innerHTML = reviewArr[count3].image;
    }
  });
});
console.log(d);
