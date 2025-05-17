const pages = [
  `It all started when i was just laying on my bed, i was so bored...`,
  `...but then, the moment i met you, something changed in my heart.`,
  `You were sweet, fun, and made me smile even on my worst days.`,
  `I'd still choose you, in every world, in every universe, every multiverse, I'd still choose you.`
];

let currentPage = 0;

function enterFullscreen() {
  const docElm = document.documentElement;
  if (docElm.requestFullscreen) docElm.requestFullscreen();
  else if (docElm.mozRequestFullScreen) docElm.mozRequestFullScreen();
  else if (docElm.webkitRequestFullscreen) docElm.webkitRequestFullscreen();
  else if (docElm.msRequestFullscreen) docElm.msRequestFullscreen();

  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("book-section").style.display = "flex";
  renderPages();
}

function renderPages() {
  document.getElementById('left-page').textContent = pages[currentPage] || "";
  document.getElementById('right-page').textContent = pages[currentPage + 1] || "";
}

document.getElementById('next').addEventListener('click', () => {
  if (currentPage + 2 < pages.length) {
    currentPage += 2;
    renderPages();
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (currentPage - 2 >= 0) {
    currentPage -= 2;
    renderPages();
  }
});
