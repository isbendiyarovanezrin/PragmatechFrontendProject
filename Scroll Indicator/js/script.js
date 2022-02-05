window.addEventListener("scroll", () => {
  let progressBar = document.getElementById("progress-bar");

  let htmlScrollTop = document.documentElement.scrollTop;

  let ScrollTopMax =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrolled = (htmlScrollTop / ScrollTopMax) * 100;

  progressBar.style.width = scrolled + "%";
});
