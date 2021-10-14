// Функции
// 1
// Напишите функцию max, которая сравнивает два числа и возвращает большее: 
// console.log( max(0, -1) ); // 0

// let max = (a, b) => {
//     return Math.max(a, b);
// }
// console.log( max(0, -1) );

// 2
// Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:
// console.log( min(0, -1, 100, 500, 100500) ); // -1

// function min() {
//     var result= Infinity;
//     for(var i in arguments) {
//       if(arguments[i] < result) {
//         result = arguments[i];
//       }
//     }
//     return result;
//   }

//   console.log( min(0, -1, 100, 500, 100500) );


// 3
// Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), 
// каждый объект имеет поля firstname, lastname, age с разными значениями. 
// Используя встроенные функции массивов:	
// a.	Отфильтруйте пользователей младше 18 лет
// b.	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
// c.	Сформируйте новый массив, который содержит только полное имя пользователей
	
// let users = [
//     {firstname: 'Anna', lastname: 'Ivanova', age: 18},
//     {firstname: 'Katy', lastname: 'Petrova', age: 25},
//     {firstname: 'Mary', lastname: 'Svicheva', age: 16},
//     {firstname: 'Ivan', lastname: 'Sidorov', age: 14},
//     {firstname: 'Petr', lastname: 'Surkov', age: 20},
//     {firstname: 'Dima', lastname: 'Agarkov', age: 17},
//     {firstname: 'Vasy', lastname: 'Fominov', age: 19},
//     {firstname: 'Oly', lastname: 'Savenkova', age: 30},
// ];

// let minAge = users.filter(function(e) {
//     return e.age < 18;
// });
// console.log(minAge);


// let result  = users.map(function(o) {
//     o.fullName = o.firstname + ' ' + o.lastname;
//     return o;
// })
// console.log(result);


// let newUsers = [];
// users.forEach(function(users) {
//     newUsers.push(users.fullName);
//     });
// console.log(newUsers);


// 4
// Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива 
// первый элемент.

// let arr = [1, 2, 3, 4, 5];
// let arrDel = [];

// function funcShift() {
//     for (let i = 1; i < arr.length; i++) {
//     arrDel[i-1] = arr[i];
//     }
// };
// funcShift();
// console.log(arrDel);


// 5 
// Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив 
// произвольное количество элементов.

// let arr1 = [1, 2, 3, 4, 5];
// let arrIns = [];
// function funcPush() {
//     arrIns = [...arr1, 6, 7, 8, 9, 10];
// };
// funcPush();
// console.log(arrIns);


// 6 Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, 
// поля которого будут изменены или расширены. Остальные параметры - объекты-источники, 
// полями которых будет расширяться целевой объект.
// var source = {firstname: 'Tom', age: 10}
// var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

// var source = {firstname: 'Tom', age: 10}
// var sourceCopy = {};
// function funcAssign (source) {
//     for (let key in source) {
//         sourceCopy[key] = source[key]
//     }
//     sourceCopy.firstname = 'Den';
//     sourceCopy.age = 20;
//     sourceCopy.lastName = 'Mishka';
// }

// funcAssign(source);

// console.log(source);
// console.log(sourceCopy);


// 7 Напишите функцию setComment с параметрами: date, message, author. 
// Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, 
// то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, 
// что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: 
// если параметр не передан, то вместо него подставляется значение ‘Anonymous’. 
// Функция распечатывает в консоле текст в формате: 
// <имя_автора>, <дата>
// <текст_сообщения>

// setComment('2016-11-02', 'Everything is ok', 'John');
// John, 2016-12-22
// Everything is ok

// setComment('2016-11-02', 'You could do it better!');
// Anonymous, 2016-12-22
// You could do it better!


// function setComment(date, message, author = 'Anonymous') {
//     if ((date == '' || date == undefined) || (message == '' || message == undefined))  { 
//         alert('data transferred incorrectly'); 
//     } else {
//         console.log(`${author}, ${date}`);
//         console.log(`${message}`);
//     };
// };

// setComment('2016-12-22','Everything is ok', 'John');



// Замыкания
// 1 
// Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() 
// для получения текущей временной метки и служит для замера времени выполнения другого кода
// (код менять, видоизменять нельзя, как написан так и должен остаться):
// let timer = createTimer();
// alert('!')  // код, время выполнения которого нужно измерить
// alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()


// function createTimer() {
//     let t0 = performance.now();
//     return () => {
//         let t1 = performance.now();
//         return (t1 - t0);
//     }
// }

// let timer = createTimer();
// alert('!')
// alert( timer() );

// 2 
// Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр 
// и возвращает функцию, которая добавляет к первому параметру второй. 
// Функция работает по следующему принципу:

// var hello = createAdder('Hello, ');
// alert( hello('John') ); // Hello, John
// alert( hello('Harry') ); // Hello, Harry

// var plus = createAdder(5);
// alert( plus(1) ); // 6
// alert( plus(5) ); // 10

// function createAdder(a) {
//     return (b) => a + b;
// }

// let hello = createAdder('Hello, ');
// alert(hello('John')); 
// alert(hello('Harry')); 

// let plus = createAdder(5);
// alert(plus(1)); 
// alert(plus(5)); 