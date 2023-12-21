const bootleImg = document.querySelector(".bootle");
const socialMediaContainer = document.querySelector(".social-media__container");
console.log(bootleImg);
console.log(socialMediaContainer.clientWidth);

window.addEventListener("load", () => {
  bootleImg.style.left = socialMediaContainer.clientWidth + "px";
  console.log(bootleImg.style.left);
});
