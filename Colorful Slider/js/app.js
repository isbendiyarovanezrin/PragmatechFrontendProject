const song = document.getElementById("song");
song.play();

let glide = new Glide(".glide", {
  autoplay: 1400,
  perView: 1,
});

glide.mount();
