let aa = prompt("Задайте значение для a")
let bb = prompt("Задайте значение для b")
let a = Number(aa);
let b = Number(bb);
document.write("a=" + a + "<br>");
document.write("b=" + b + "<br>");
document.write("a+b=" + (a + b) + "<br>");
document.write("a-b=" + (a - b) + "<br>");
document.write("a*b=" + (a * b) + "<br>");
document.write("a/b=" + (a / b) + "<br>");
document.write("частное от деления a/b=" + Math.trunc(a / b) + "<br>");
document.write("остаток от деления a/b=" + (a % b) + "<br>");
document.write("a^b=" + (a ** b) + "<br>");
console.log(a/b);