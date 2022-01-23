// find_paths funksiyası yaradırsınız. Parametri bir tacirin gəzməli olduğu şəhərlərin sayıdır. Tacir müəyyən sayıda şəhərlər gəzməlidir. Siz tacirin hansı şəhərdən şəhərə keçərək gedə biləcəyi yolların ehtimalını tapacaqsınız. Misal, find_paths(3) 6 qaytaracaq:
// A -> B -> C
// A -> C -> B
// B -> A -> C
// B -> C -> A
// C -> B -> A
// C -> A -> B

// factorial(n)=n∗(n−1)∗...∗1
// const num = 4;
// 4! = 1 * 2 * 3 * 4 = 24
// {1,2,3,4}, {2,1,3,4}, {2,3,1,4}, {2,3,4,1}, {1,3,2,4} və s.

const num = prompt("Tacirin gəzməli olduğu şəhərlərin sayını qeyd edin: ");

function find_paths(num) {
  if (num < 0) return;
  if (num == "") return document.write("Bir şey deyin.");

  let m = 1;
  for (let i = 1; i <= num; i++) {
    m *= i;
  }
  document.write(m);
}

find_paths(num);
