console.log("hello world");

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
icon.onclick = function () {
  search.classList.toggle("active");
};

const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");
const navItem = document.querySelector("a.toggle-nav");

function changeImage(e) {
  activeImage.src = e.target.src;
}

function toggleNavigation() {
  this.nextElementSibling.classList.toggle("active");
}


productImages.forEach((image) => image.addEventListener("click", changeImage));
navItem.addEventListener("click", toggleNavigation);



function zoomIn(event) {
  var xImg = document.getElementById("imgZoom");
  var xDiv = document.getElementById("xDiv");
  var pozT = xImg.offsetTop;
  var pozW = xImg.offsetWidth;
  var pozH = xImg.offsetHeight;
  var getImg = xImg.src;
  xDiv.style.width = pozW - 1 + "px";
  xDiv.style.height = pozH - 1 + "px";
  xDiv.style.border = "1px solid blue";
  xDiv.style.display = "block";
  xDiv.style.background = "url('" + getImg + "') no-repeat";
  xDiv.style.backgroundSize = pozW * 3 + "px " + pozH * 3 + "px";
  xDiv.style.position = "absolute";
  xDiv.style.left = pozW + 20 + "px";
  xDiv.style.top = pozT + "px";
  var posX = event.offsetX ? event.offsetX : event.pageX - xImg.offsetLeft;
  var posY = event.offsetY ? event.offsetY : event.pageY - xImg.offsetTop;
  xDiv.style.backgroundPosition = -posX * 2 + "px " + -posY * 2 + "px";
}
function zoomOut() {
  var xDiv = document.getElementById("xDiv");
  xDiv.style.display = "none";
}
