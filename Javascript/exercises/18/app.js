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
