for (let column = 1; column <= 30; column++) {
  for (let row = 1; row <= 31 - column; row++) {
    document.write(`&nbsp`);
  }
  for (let row = 1; row <= column; row++) {
    document.write(`*`);
  }
  document.write(`<br>`);
}
