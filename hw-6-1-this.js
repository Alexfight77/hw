//this. Задачи (слайды 16-19)

//1. Создать oбъект, который описывает ширину и высоту прямоугольника,  а также может посчитать площадь фигуры.

function getArea(width, height){
    return this.width * this.height + ' m2';
}

const rectangle = {
    width: 5,
    height: 7,
    getSquare: getArea
}
console.log(rectangle.getSquare());
//35 m2


//2. Создать объект,  у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки.

function getPr(){
    return this.price;
}

function getPWD(){
    var koeff = parseInt(this.discount) / 100;

    return this.price * koeff;
}

const price = {
    price: 10,
    discount: '15%',
    getPrice: getPr,
    getPriceWithDiscount: getPWD
}
console.log(price.getPrice());
//10
console.log(price.getPriceWithDiscount());
//1.5


//3. Дан объект и функция. Внесите в этот код такие изменения, чтобы можно было вызвать user.getName() и получить 'Abraham'.
function getN(){
    return this.name;
}
const user = {
    name: 'Abraham',
    getName: getN
}
console.log(user.getName());
//Abraham



//4. Создать объект, у которого будет поле высота и метод "увеличить высоту на один". Метод должен возвращать новую высоту //11.
function onePlus(){
    return this.height + 1;
}

const object = {
    height: 10,
    inc: onePlus
}
console.log(object.inc());
//11


//5. Создать объект "вычислитель", у которого есть числовое свойство "значение" и методы "удвоить", "прибавить один", "отнять один". Методы можно вызывать через точку, образуя цепочку методов.

const numerator = {
    value: 1,
    double: function(){
        return numerator.value * 2;
    },
    plusOne: function(){
        return numerator.value + 1;
    },
    minusOne: function(){
        return numerator.value - 1;
    }
}
//console.log(numerator.double(),plusOne(),minusOne());
//не срабатывает

console.log(numerator.double(),numerator.plusOne(),numerator.minusOne());
//2 2 0



//6. Разобрать и объяснить, что тут происходит

//Объект user1 содержит в себе поле-объект otherUser, в котором имеется метод getName, который возвращает имя.
//

let user1 = {
    name: 'Abraham',
    otherUser: {
        name: 'John',
        getName: function(){
            return this.name;
        }
    }
}

//user1.getName()
//undefined
//Идет обращение к функции для объекта user1, для которого она не задана.

//user1.getName = otherUser.getName;
//Одалживание метода

//user1.getName();// "Abraham"
//Функция выводит значение поля name из объекта user1

//otherUser.getName();//"John"
//Функция выводит значение поля из объекта otherUser

