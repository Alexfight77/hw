//3. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы,
//    равные нулю. Если да - вернуть false

var arrNum = ['yes', 'hello', 'no', 'easycode', 'what'];

var res = arrNum.every(function (el) {
    return el === 0;
});

console.log(res);




//4. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what']
//хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

var arr = ['yes', 'hello', 'no', 'easycode', 'what'];

var res = arr.some(function (el) {
    return el.length > 3;
});

console.log(res);




