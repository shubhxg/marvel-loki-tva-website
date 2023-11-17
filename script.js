var scrollToTopButton = document.querySelector("#arrow-box");

// function to scrolltop which does that using queryselector
function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

scrollToTopButton.onclick = function () {
  scrollToTop();
};
