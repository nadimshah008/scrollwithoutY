var shadegreen = document.querySelector(".shadegreen");
var shadered = document.querySelector(".shadered");
var overviewSection = document.querySelector(".overviewSection");
var outlinedTitleText = document.querySelector(".outlinedTitleText");
var titleBlock = document.querySelector(".titleBlock");
var imageArea = document.querySelector(".imageArea");
var overviewDesc = document.querySelector(".overviewDesc");

let moveRadom = setInterval(() => {
  moveRandomly();
}, 1000);

const moveRandomly = () => {
  shadegreen.style.top =
    Math.round(
      Math.random() * overviewSection.clientHeight - shadegreen.clientHeight
    ) + "px";
  shadegreen.style.left =
    Math.round(
      Math.random() * overviewSection.clientWidth - shadegreen.clientWidth
    ) + "px";
  setTimeout(() => {
    shadered.style.top =
      Math.round(
        Math.random() * overviewSection.clientHeight - shadered.clientHeight
      ) + "px";
    shadered.style.left =
      Math.round(
        Math.random() * overviewSection.clientWidth - shadered.clientWidth
      ) + "px";
  }, 500);
};

window.addEventListener("scroll", () => {
  let overviewSectionRect = overviewSection.getBoundingClientRect();

  console.log(overviewSectionRect.y);

  if (overviewSectionRect.y <= 450) {
    imageArea.classList.add("animateActive");
    imageArea.style.opacity = 1;

    setTimeout(() => {
      outlinedTitleText.classList.add("animateActive");
      outlinedTitleText.style.opacity = 1;
    }, 200);

    setTimeout(() => {
      titleBlock.classList.add("animateActive");
      titleBlock.style.opacity = 1;
    }, 400);

    setTimeout(() => {
      overviewDesc.classList.add("animateActive");
      overviewDesc.style.opacity = 1;
    }, 600);
  } else {
    imageArea.classList.remove("animateActive");
    imageArea.style.opacity = 0;

    setTimeout(() => {
      outlinedTitleText.classList.remove("animateActive");
      outlinedTitleText.style.opacity = 0;
    }, 200);

    setTimeout(() => {
      titleBlock.classList.remove("animateActive");
      titleBlock.style.opacity = 0;
    }, 400);

    setTimeout(() => {
      overviewDesc.classList.remove("animateActive");
      overviewDesc.style.opacity = 0;
    }, 600);
  }
});
