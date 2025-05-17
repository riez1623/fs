const pages = [
  `It all started when I was just laying on my bed...`, // You know the full story content—include the whole one you already finalized.
  `I then asked my friend named Ahron...`,
  `...`,
  `First love has to be the worst, but if I die and get to live again, I'd still choose you.`,
  `I'd still choose you, in every world, in every universe, every multiverse, I'd still choose you.`
];

let currentPage = 0;

const introScreen = document.getElementById("intro");
const bookSection = document.getElementById("book-section");
const readButton = document.getElementById("read-btn");

const leftPage = document.getElementById("left-page");
const rightPage = document.getElementById("right-page");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

function renderPages() {
  leftPage.textContent = pages[currentPage] || "";
  rightPage.textContent = pages[currentPage + 1] || "";
}

readButton.addEventListener("click", () => {
  introScreen.style.display = "none";
  bookSection.style.display = "flex";
  renderPages();

  // Request fullscreen
  const docElm = document.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.webkitRequestFullscreen) {
    docElm.webkitRequestFullscreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage + 2 < pages.length) {
    currentPage += 2;
    renderPages();
  }
});

prevButton.addEventListener("click", () => {
  if (currentPage - 2 >= 0) {
    currentPage -= 2;
    renderPages();
  }
});
