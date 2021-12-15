// practice
function filter(func, arr) {
  const list = [];
  for (element of arr) {
    if (func(element)) {
      list.push(element);
    }
  }
  return list;
}

let nums = filter((x) => x % 2 === 0, [1, 2, 3, 4, 5, 6, 7, 8]);
console.log(nums);

// "addCSS" metod
function addCSS(selector, properties) {
  let text = document.querySelector(selector);
  for (prop in properties) {
    text.style[prop] = properties[prop];
  }
  return text;
}

addCSS(".text", {
  font: "400 2rem Arial",
  color: "purple",
});
