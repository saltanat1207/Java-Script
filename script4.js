let aa = prompt('Введите количество сувениров');
let bb = prompt('Введите количество безделушек');
let a = Number(aa);
let b = Number(bb);

const f = 75;
const g = 112;

document.write(`Количество сувениров ${a} <br>`);
document.write(`Количество безделушек ${b} <br>`);
document.write(`Вес одного сувенира ${f} граммов <br>`);
document.write(`Вес одной безделушки ${g} граммов <br>`);

let sum = f*a+g*b;

document.write(`Общий вес сувениров и безделушек: ${sum.toFixed(2)}гр. <br>`);
console.log(sum);



