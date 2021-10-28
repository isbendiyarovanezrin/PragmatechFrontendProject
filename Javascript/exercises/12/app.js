/* 
Bunu yaratdım.

*
**
***
****
*****
******
*******
********
*********
**********

*/

for (let column = 1; column <= 10; column++) {
  for (let row = 1; row <= column; row++) {
    document.write(`*`);
  }
  document.write(`<br>`);
}

document.write(`<br>`);

/*
1
12
123
1234
12345
123456
1234567
12345678
123456789
*/

for (let column = 1; column <= 9; column++) {
  for (let row = 1; row <= column; row++) {
    document.write(row);
  }
  document.write(`<br>`);
}
