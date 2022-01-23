// count_lone adlı funksiyanız var. Parametr olaraq ədəd yazırsınız. Bu ədəddə siz neçə dənə lone şəklində 1 rəqəminin olduğunu tapırsınız. Lone eyni rəqəmin iki və daha artıq ardıcıllıqla GƏLMƏMƏSİ vəziyyətidir. Misal, 103149 <= burada 2 dənə lone şəklində 1 rəqəmi var, 11431119 <= burada lone şəklində 1 rəqəmi yoxdur, funksiya 0 qaytaracaq, 1123143511132 <= burada yalnızca bir dənə lone şəklində 1 rəqəmi vardır. count_lone(110302103041) // 2 qaytarmalıdır.

const num = 7112131610101019; // 6 qaytarmalıdır

function count_lone(n) {
  const arr = [];
  arr.push(String(n)); // [ '7112131610101019' ]
  const newArr = arr[0].split(""); // [ '7', '1' ... '1', '9' ]
  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == 1 && newArr[i - 1] != 1 && newArr[i + 1] != 1) {
      count++;
    }
  }
  console.log(count); // 6
}
count_lone(num);
