//Задачи (слайд 36-40)

//1. Что выведет код, почему?

function getList(){
    return this.list;
}

let users = {
    length: 4,
    list: ['Abraham', 'James', 'John', 'Steven']
}

console.log(getList);
//вернет функцию

users.getList = getList;
users.getList();
//вернет массив данных



//2. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

function getTotalCost(price, quantity){
    return this.price * this.quantity;
}

var products = {
    price: 120,
    quantity: 100,
    getTotalCost: getTotalCost
}
console.log(products.getTotalCost());
//12000


//3. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого "позаимствовать" метод из предыдущего объекта.

var obj2 = {
    quantity: 100,
    price: 80
}

obj2.getTotalCost = products.getTotalCost;
console.log(obj2.getTotalCost());
//8000



//4. Даны объект и функция. Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes.

function getSquare(){
    return this.width * this.height
}

let sizes = {
    width: 5,
    height: 10
}

console.log(getSquare.call(sizes));
/


//5. Дан массив let numbers = [4, 12, 0, 10, -2, 4]. Используя ссылку на массив numbers  и Math.min, найти минимальный элемент массива.

let number = [4, 12, 0, 10, -2, 4];
var res = Math.min.apply(null, [4, 12, 0, 10, -2, 4]);
console.log(res);
//-2



//6. Исправить метод таким образом, чтобы можно было вычислить суму трех слагаемых (высота плюс отступы).
//Для другого объекта вычислить полную высоту, используя для этого предыдущий объект. В объект ничего не дописывать.

const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function() {
        return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom);
    }
}
console.log(element.getFullHeight());
//25

const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px'
}

console.log(element.getFullHeight.call(block));
//11



//7. Измените функцию таким образом, чтобы можно было вызвать  getElementsHeight() и получить 25.

let elements = {
    height: 25,
    getHeight: function(){
        return elements.height; /*замена this на elements*/
    }
}

let getElementsHeight = elements.getHeight;
console.log(getElementsHeight());
//25
