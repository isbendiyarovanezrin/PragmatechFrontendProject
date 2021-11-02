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

// oninvalid Event
function showAlert() {
  alert("Formu boş buraxmaq olmaz!");
}

// onreset Event
function Reset() {
  alert("Formda olan hər şey silindi.");
}

// onselect Event
function selectText() {
  alert("Bu hissə artıq seçilib!");
}

// onchange Event
function textChange() {
  let text = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = `Bunu seçdin: ${text}`;
}

// onfocus Event
function textFocus() {
  document.getElementById("input").style.backgroundColor = "yellow";
}

function textBlur() {
  document.getElementById("input").style.backgroundColor = "white";
}
