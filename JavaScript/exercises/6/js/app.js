// Qeyd olunan massivin 3-ə qalıqsız bölünən elementlərini tapın
const arr = [59, 88, 40, 3, 9, 93, 33, 46, 103, 29, 1, 234];

const showNum = arr.filter((n) => n % 3 == 0);
document.write(`3-ə qalıqsız bölünən ədədlər: ${showNum}<br />`);

// Qeyd olunan massivin 9-a qalıqsız bölünən elementlərini tapın
const arrs = [590, 18, 44, 32, 99, 36, 43, 48, 50, 29, 9];

const findNum = arrs.filter((n) => n % 9 == 0);
document.write(`9-a qalıqsız bölünən ədədlər: ${findNum}`);
