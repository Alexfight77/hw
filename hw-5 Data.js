//Дата и время. Задачи
//1. Написать функцию, которая принимает год, а возвращает день 1го января этого года. День должен быть в русском формате.

function yearFunc(str){
    var date = new Date(str);
    var options = {
        //era: 'long',
        //year: 'numeric',
        //month: 'long',
        //day: 'numeric',
        weekday: 'long'
        //timezone: 'UTC',
        //hour: 'numeric',
        //minute: 'numeric',
        //second: 'numeric'
    };

    return date.toLocaleString('ru', options);
}
var yearFuncRes = yearFunc('2016');
console.log(yearFuncRes);
//пятница


//2. Написать функцию, которая принимает дату в виде строки "29.03.1985", а возвращает день в русском формате. Формат даты в строке "дд.мм.гггг"

function dataFunc(str){
    var date = new Date(str);

    return date.toLocaleString('ru');
}
var dataFuncRes = dataFunc('1985-3-29');
console.log(dataFuncRes);
//29.03.1985, 1:00:00


//3. Узнать, сколько прошло полных недель с начала года(1го января 2017г) до сегодняшней даты

var data = Date.now();
var data1 = +new Date(2017, 0);
var weekMS = 7*24*60*60*1000;
var fullWeek = (((data - data1)/weekMS).toFixed(0));
console.log(weekMS);
console.log(fullWeek);
//27