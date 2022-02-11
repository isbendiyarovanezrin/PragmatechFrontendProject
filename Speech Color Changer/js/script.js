const recognition = new webkitSpeechRecognition();
recognition.interimResults = "true";
recognition.lang = "en-EN";

function changeColor(e) {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  document.body.style.backgroundColor = transcript;
}

recognition.addEventListener("result", changeColor);
recognition.addEventListener("end", recognition.start);
recognition.start();
