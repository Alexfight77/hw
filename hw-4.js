//МЕТОДЫ ОБХОДА МАССИВА

//let users = [
//    {
//        "name": "Paul Carrillo",
//        "id": 0
//    },
//    {
//        "name": "Prince Dejesus",
//        "id": 1
//    },
//    {
//        "name": "Carey Bates",
//        "id": 2
//    },
//    {
//        "name": "Moses Ballard",
//        "id": 3
//    },
//    {
//        "name": "Rowe Bolton",
//        "id": 4
//    },
//    {
//        "name": "Beck Atkinson",
//        "id": 5
//    },
//    {
//        "name": "Rose Travis",
//        "id": 6
//    },
//    {
//        "name": "Monica Goff",
//        "id": 7
//    },
//    {
//        "name": "Mcfadden Nelson",
//        "id": 8
//    },
//    {
//        "name": "Luann Carney",
//        "id": 9
//    },
//    {
//        "name": "Cheri Buck",
//        "id": 10
//    },
//    {
//        "name": "Paul Carrillo",
//        "id": 0
//    },
//    {
//        "name": "Prince Dejesus",
//        "id": 1
//    },
//    {
//        "name": "Carey Bates",
//        "id": 2
//    },
//    {
//        "name": "Moses Ballard",
//        "id": 3
//    },
//    {
//        "name": "Rowe Bolton",
//        "id": 4
//    },
//    {
//        "name": "Beck Atkinson",
//        "id": 5
//    },
//    {
//        "name": "Hartman Potts",
//        "id": 11
//    },
//    {
//        "name": "Farley Austin",
//        "id": 12
//    },
//    {
//        "name": "Jerri Richardson",
//        "id": 13
//    },
//    {
//        "name": "Burnett Sharp",
//        "id": 14
//    },
//    {
//        "name": "Katy Madden",
//        "id": 15
//    },
//    {
//        "name": "Kristine Payne",
//        "id": 16
//    },
//    {
//        "name": "Ashlee Wilson",
//        "id": 17
//    },
//    {
//        "name": "Jan Pugh",
//        "id": 18
//    },
//    {
//        "name": "Michael King",
//        "id": 19
//    },
//    {
//        "name": "Patty Rivas",
//        "id": 20
//    },
//    {
//        "name": "Bridges Oneil",
//        "id": 21
//    },
//    {
//        "name": "Walters Vazquez",
//        "id": 22
//    },
//    {
//        "name": "English Andrews",
//        "id": 23
//    },
//    {
//        "name": "Woodard Cardenas",
//        "id": 24
//    },
//    {
//        "name": "Mercado Chan",
//        "id": 25
//    },
//    {
//        "name": "Guerra Lawson",
//        "id": 26
//    },
//    {
//        "name": "Riley Gray",
//        "id": 27
//    },
//    {
//        "name": "Romero Sampson",
//        "id": 28
//    },
//    {
//        "name": "Reva Carroll",
//        "id": 29
//    },
//    {
//        "name": "Carey Mckenzie",
//        "id": 30
//    },
//    {
//        "name": "Miles Raymond",
//        "id": 31
//    },
//    {
//        "name": "Ray Underwood",
//        "id": 32
//    },
//    {
//        "name": "Maude Norris",
//        "id": 33
//    },
//    {
//        "name": "Brigitte Kirkland",
//        "id": 34
//    },
//    {
//        "name": "Graham Russell",
//        "id": 35
//    },
//    {
//        "name": "Sonia Holcomb",
//        "id": 36
//    },
//    {
//        "name": "Hopper Garrison",
//        "id": 37
//    },
//    {
//        "name": "Butler Harrison",
//        "id": 38
//    },
//    {
//        "name": "Grant Wheeler",
//        "id": 39
//    },
//    {
//        "name": "Stout Barker",
//        "id": 40
//    },
//    {
//        "name": "Merritt Kelley",
//        "id": 41
//    },
//    {
//        "name": "Kari Holman",
//        "id": 42
//    },
//    {
//        "name": "Tamra Howell",
//        "id": 43
//    },
//    {
//        "name": "Good Harvey",
//        "id": 44
//    },
//    {
//        "name": "Hendrix Webb",
//        "id": 45
//    },
//    {
//        "name": "Hammond Harris",
//        "id": 46
//    },
//    {
//        "name": "Ester Hamilton",
//        "id": 47
//    },
//    {
//        "name": "Lopez Hopper",
//        "id": 48
//    },
//    {
//        "name": "Newton Cantrell",
//        "id": 49
//    }
//];
//
//users.forEach(function (element, index, arr) {
//    //console.log(element, index, arr);
//    //покажет элемент массива, индекс id и весь массив
//
//    //console.log(users.indexOf(element));
//    //покажет индексы элементов
//
//    //console.log(element, index);
//    //покажет элемент массива, индекс id и весь массив
//});


//МЕТОД Фильтр

//Продублируем несколько первых элементов в середине массива


//const products = [
//    {title: 'prod1', price: 5.2},
//    {title: 'prod2', price: 0.18},
//    {title: 'prod3', price: 15},
//    {title: 'prod4', price: 25},
//    {title: 'prod5', price: 18.9},
//    {title: 'prod6', price: 8},
//    {title: 'prod7', price: 19},
//    {title: 'prod8', price: 63}
//];
//
//function filterProducts(arr, x = 0, y = 100) {
//
//    var res = [];
//
//    products.forEach(function (element, index, arr) {
//        if (element.price >= x && element.price <= y) res.push(element);
//
//        //console.log(element, index);
//    });
//
//    return res;
//
//}



//Написать через функцию:

//const products = [
//    {title: 'prod1', price: 5.2},
//    {title: 'prod2', price: 0.18},
//    {title: 'prod3', price: 15},
//    {title: 'prod4', price: 25},
//    {title: 'prod5', price: 18.9},
//    {title: 'prod6', price: 8},
//    {title: 'prod7', price: 19},
//    {title: 'prod8', price: 63}
//];
//
//function forEach(arr, func) {
//    for (var i = 0; i < arr.length; i++){
//        func(arr[i]), i, arr);
//    }
//}
//
//forEach(products, function (element, index, arr) {
//
//    console.log(element, index, arr);
//});


//Метод filter

//var arr = [1,3,2,4,2,4,15,2,'one','two'];
//
//var newArr = arr.filter(function(element, index, arr) {
//    return typeof element === 'string';
//});
//
//console.log(newArr);



//Если бы писали функцию. Пример с числами

//const arr = [1,3,2,4,2,4,15,2,'one','two'];
//
//function filter(array, func) {
//    var res = [];
//    for (var i = 0; i < array.length; i++){
//        if(func(array[i], i, array)) {
//            res.push(array[i]);
//        }
//    }
//
//    return res;
//
//}
//
//var newArr = filter(arr, function (element, index, arr) {
//    return typeof element === 'string';
//
//});
//
//console.log(newArr);



//Если бы писали функцию. Пример с Именами

//var users = [
//    {
//        name: 'Denis',
//        gender: 'men'
//    },
//    {
//        name: 'Oleg',
//        gender: 'men'
//    },
//    {
//        name: 'Jlga',
//        gender: 'woomen'
//    },
//    {
//        name: 'Maks',
//        gender: 'men'
//    },
//    {
//        name: 'Ira',
//        gender: 'woomen'
//    }
//];

//function filter(array, func) {
//    var res = [];
//
//    for (var i = 0; i < array.length; i++){
//        if(func(array[i], i, array)) {
//            res.push(array[i]);
//        }
//    }
//
//    return res;
//}

//var menArray = filter(users, function (user, index, arr) {
//    return user.gender === 'men';
//
//});
//
//console.log(menArray);


//Записать задачу СТРЕЛКАМИ
//
//var users = [
//    {
//        name: 'Denis',
//        gender: 'men'
//    },
//    {
//        name: 'Oleg',
//        gender: 'men'
//    },
//    {
//        name: 'Jlga',
//        gender: 'woomen'
//    },
//    {
//        name: 'Maks',
//        gender: 'men'
//    },
//    {
//        name: 'Ira',
//        gender: 'woomen'
//    }
//];
////var menArray = users.filter(users, (user, index, arr) => user.gender === 'men');
////
////console.log(users);


//Записать задачу обычной ФУНКЦИЕЙ

//var users = [
//    {
//        name: 'Denis',
//        gender: 'men'
//    },
//    {
//        name: 'Oleg',
//        gender: 'men'
//    },
//    {
//        name: 'Jlga',
//        gender: 'woomen'
//    },
//    {
//        name: 'Maks',
//        gender: 'men'
//    },
//    {
//        name: 'Ira',
//        gender: 'woomen'
//    }
//];
//var menArray = users.filter(users, function (user, index, arr) {
//    return user.gender === 'men';
//});
//
//console.log(menArray);




//Метод every

//var arr = [1,3,2,4,2,4,15,2,'one','two'];
//
//var res = arr.every(function (element) {
//    return typeof element === 'string';
//});
//
//console.log(res);



//Метод every Стрелками
//
//var arr = [1,3,2,4,2,4,15,2,'one','two'];
//
//var res = arr.every (element => typeof element === 'string');
//
//console.log(res);




///Метод some через обычную функцию и Стрелками

//var arr = [1,3,2,4,2,4,15,2,'one','two'];
//
//var res = arr.some(function (element) {
//    return typeof element === 'string';
//});
//
//var res = arr.some(element => typeof element === 'string');
//
//console.log(res);



///Метод map через обычную функцию

//var skils = ['html','js','css'];
//
//
//
//var resMap = skils.map(function (element, index, arr) {
//    return element.length;
//});
//console.log(resMap)
//// <- [4, 2, 3];
//
//
//
//
//var resMap = skils.map(function (element, index, arr) {
//    return element[0];
//});
//console.log(resMap);
////<- ["h", "j", "c"]






///Метод REDUCE через обычную функцию

//var gameInfo = {
//    bets: [
//        {
//            selection: "red",
//            time: 1498302635916,
//            userid: "e588aa85-8ad4-4b81-ac1e-57aced50b842",
//            value: 100
//        },
//        {
//            selection: "green",
//            time: 1498302635916,
//            userid: "e588aa85-8ad4-4b81-ac1e-57aced50b842",
//            value: 211
//        },
//        {
//            selection: "red",
//            time: 1498302635916,
//            userid: "e588aa85-8ad4-4b81-ac1e-57aced50b842",
//            value: 123
//        },
//        {
//            selection: "blu",
//            time: 1498302635916,
//            userid: "e588aa85-8ad4-4b81-ac1e-57aced50b842",
//            value: 300
//        },
//        {
//            selection: "red",
//            time: 1498302635916,
//            userid: "e588aa85-8ad4-4b81-ac1e-57aced50b842",
//            value: 100
//        },
//        {
//            selection: "green",
//            time: 1498302635916,
//            userid: "e588aa85-8ad4-4b81-ac1e-57aced50b842",
//            value: 211
//        },
//        {
//            selection: "red",
//            time: 1498302635916,
//            userid: "e588aa85-8ad4-4b81-ac1e-57aced50b842",
//            value: 123
//        },
//        {
//            selection: "blu",
//            time: 1498302635916,
//            userid: "e588aa85-8ad4-4b81-ac1e-57aced50b842",
//            value: 300
//        }
//    ]
//};
//
////Отфильтруем типы ставки на красное, зеленое и голубое.
////    1. Ставки на красное:
//
//var redBets = [],
//    greenBets = [],
//    bluBets = [];

//redBets = gameInfo.bets.filter(function (el, i, arr) {
//
//    //console.log(el);
//    /*на каждой итерации получили каждый элемент массива*/
////<- Object {selection: "red", time: 1498302635916, userid: "e588aa85-8ad4-4b81-ac1e-57aced50b842", value: 100}
//
//    return el.selection === 'red';
//});
//console.log(redBets);


//РЕШЕНИЕ
/*Через функцию Стрелку.*/

//redBets = gameInfo.bets.filter( el => el.selection === 'red');
//greenBets = gameInfo.bets.filter( el => el.selection === 'green');
//bluBets = gameInfo.bets.filter( el => el.selection === 'blu');
//console.log(redBets, greenBets, bluBets);
//
//
//var totalredBetsValue = 0,
//    totalgreenBetsValue = 0,
//    totalbluBetsValue = 0;

//totalredBetsValue = redBets.reduce(function (returnVal, curentVal, i, arr) {
//
//    console.log('До', returnVal, curentVal.value, i);
//
//    returnVal += curentVal.value;
//
//    console.log('После', returnVal, curentVal.value, i);
//    return returnVal;
//
//
//}, 0);


//totalredBetsValue = redBets.reduce(function (returnVal, curentVal, i, arr) {
//    returnVal += curentVal.value;
//    return returnVal
//
//}, 0);
//
//totalgreenBetsValue = greenBets.reduce(function (returnVal, curentVal, i, arr) {
//    returnVal += curentVal.value;
//    return returnVal
//
//}, 0);
//
//totalbluBetsValue = bluBets.reduce(function (returnVal, curentVal, i, arr) {
//    returnVal += curentVal.value;
//    return returnVal
//
//}, 0);
//
//console.log(totalredBetsValue, totalgreenBetsValue, totalbluBetsValue);


//2. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
//    каждый элемент которого будет хранить информацию о числе и его четности:
//    [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

var arrNumb = [1,2,3,5,8,9,10];

var resMap = arrNumb.map(function (el, i, arr) {
    return el.digit = [el.digit];
});
console.log(resMap);



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




