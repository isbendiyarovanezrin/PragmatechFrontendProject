// oninput Event
function myFunction() {
  let text = document.getElementById("text").value;
  document.getElementById("sametext").innerHTML = `Yazıldı: ${text}`;
}

// onblur Event
function uppercase() {
  let surname = document.getElementById("surname");
  surname.value = surname.value.toUpperCase();
}
