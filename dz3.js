//МАССИВЫ. ЗАДАЧИ НА МЕТОДЫ

//Задача 1. Создать функцию, которая прнимает массив, а возвращает новый массив с дублированными элементами входного массива.

function duplicate(arr) {
    let doubleArray = arr.concat(arr);

    return doubleArray;
}

var duplicateRes = duplicate([1, 2, 3]);
console.log(duplicateRes);



//Задача 2. Получить последний элемент массива (массив не менять). Использовать функцию.

function lastEl(arr) {
    return arr.slice(-1);
}

var lastElRes = lastEl([1, 2, 3]);
console.log(lastElRes);



//Задача 3. Создать функцию, которая принимает число N и возвращает массив,
//заполненный числами от 1 до N: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
//
//function restArr() {
//    let args = arguments;
//    let getArray = arguments[0];
//    for (let i = 0, len = args.length; i < len; i++) {
//        if (args.length) {
//            getArray.push(args[i]);
//        }
//    }
//
//    return getArray;
//}
//
//var restArrRes = restArr(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//console.log(restArrRes);



//Задача 4. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.


//function multiply() {
//    let args = arguments;
//    let arr = arguments[0];
//    let changeCollection = [];
//    if (args.length) {
//        for (let i = 0, len = args.length; i < len; i++) {
//            arr.shift();
//            changeCollection.push(arr[i]);
//        }
//    }
//
//    return changeCollection;
//}
//
//var multiplyRes = multiply(['a', 'b', 'c'], [1, 2, 3]);
//console.log(multiplyRes);







//МАССИВЫ. ЗАДАЧИ

//1. Дана произвольная строка “bcdaeflmjgkhi” - упорядочить буквы по алфавиту и вернуть строку с буквами в обратном порядке ("mlkjihgfedcba"). Оформить в виде функции.

function someStr(str) {
    var newArr = str.split('');
    newArr.sort();
    newArr.reverse();
    str = newArr.join('');

    return str;
}

var someStrRes = someStr('bcdaeflmjgkhi');
console.log(someStrRes);


//2. Отсортировать массив [2, 4, 7, 1, -2, 10, -9] в обратном порядке:
// [10, 7, 4, 2, 1, -2, -9]. Используйте функцию.

let arr = [2, 4, 7, 1, -2, 10, -9];

function sortArr(prev, next) {
    return next - prev;
}

arr.sort(sortArr);
console.log(arr);


//3. Написать функцию, которая принимает три аргумента: произвольный массив и два числа, первое из которых означает начальный номер //элемента в массиве, второе - конечный номер. Функция должна вернуть новый массив, состоящий из элементов первой коллекции согласно //аргументам (с - по): getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4) = ["c", "d", "e"]
//Исходный массив не менять. Циклы не использовать.

function trinArr(arr, x, y) {
    let getNewArray = arr.slice(x, y+1);

    return getNewArray;
}

var trinArrRes = trinArr(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4);
console.log(trinArrRes);



//4. Удвоить все элементы массива, не используя циклы [‘one’, 2, ‘three’, 4] → [‘one’, 2, ‘three’, 4, ‘one’, 2, ‘three’, 4]

function dupl(arr) {
    let nevArr = arr.concat(arr);

    return nevArr;
}

var duplRes = dupl(['one', 2, 'three', 4]);
console.log(duplRes);


//5. Удалить из [1,2,3,4,5] второй и третий элементы (3,4)

let arrFive = [1,2,3,4,5];

let res = arrFive.splice(2, 2);
console.log(arrFive);


//6. Удалить из [1,2,3,4,5] второй и третий элементы (3,4) и на их место вставить ‘three’, ‘four’

let arrPaste = [1,2,3,4,5];

let result = arrPaste.splice(2, 2, 'three', 'four');
console.log(arrPaste);


//7. Вставить в произвольный массив после третьего элемента любое
//значение, например:
//['I', 'am', 'an', 'array'] → ["I", "am", "an", "awesome", "array"]

let arrText = ['I', 'am', 'an', 'array'];

let resText = arrText.splice(3, 0, 'awesome');
console.log(arrText);


//8. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной):
//[ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

let arrArr = [ [14, 45], [1], ['a', 'c', 'd'] ];

arrArr.sort(function(prev, next) {
    return prev.length - next.length;
});

console.log(arrArr);


//9. Создать копию произвольного массива (slice, concat)

var aaa = [10, 20, 30, 40];

var firstCopy = aaa.slice(0);
console.log(firstCopy);

var secCopy = aaa.concat();
console.log(secCopy);


//10. Есть массив объектов. Отсортировать их по возрастающему количеству ядер (cores).

let assort = [
    {cpu: 'intel',info: {cores:2,сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];

assort.sort(function(prev, next) {

    return prev.info.cores - next.info.cores;
});

console.log(assort);




//11. Создать функцию, которая будет принимать массив продуктов и две цены.
//    Функция должна вернуть все продукты, цена которых находится в
//указанном диапазоне, и отсортировать от дешевых к дорогим:
//filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

//function arrPrice(arr, a, b) {
//    let arrSortNew = [];
//    for (var i = 0; i < arr.length; i++) {
//        if (arr.price >= a && arr.price <= b) {
//            arrSortNew.push(products[i]);
//        }
//    }
//
//    return arrSortNew;
//
//}
//
//var arrPriceRes = arrPrice([
//    {title: 'prod1', price: 5.2},
//    {title: 'prod2', price: 0.18},
//    {title: 'prod3', price: 15},
//    {title: 'prod4', price: 25},
//    {title: 'prod5', price: 18.9},
//    {title: 'prod6', price: 8},
//    {title: 'prod7', price: 19},
//    {title: 'prod8', price: 63}
//], 15, 30);
//console.log(arrPriceRes);