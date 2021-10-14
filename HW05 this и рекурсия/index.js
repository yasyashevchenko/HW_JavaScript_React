// Методы объектов и контекст исполнения функции

// 1.	
// Создайте объект calculator с методами:
// a.	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// b.	sum() возвращает сумму этих двух значений
// c.	multi() возвращает произведение этих двух значений
// d.	diff() возвращает разницу
// e.	div() возвращает частное
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.multi() );

// let calculator = {
//     sum() {
//       return this.x + this.y;
//     },
  
//     mul() {
//       return this.x * this.y;
//     },

//     diff() {
//       return this.x - this.y;
//     },

//     div() {
//       return this.x / this.y;
//     },
  
//     read() {
//       this.x = +prompt('x?', 0);
//       this.y = +prompt('y?', 0);
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


// 2.	
// Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), 
// при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, 
// записанным в свойстве объекта message.

// let coffeeMachine = {
//   message: 'Your coffee is ready!',
//   start: function() {
//     return this.message;
//   }
// }

// setTimeout(() => alert( coffeeMachine.start()), 3000);


// 3.	
// Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения. 
// Используйте концепцию chaining для создания цепочки вызовов.
// var current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current); // 1

// let counter = {
//   count: 0,
//   inc: function () {
//       this.count++;
//       return this;
//   },
//   dec: function () {
//       this.count--;
//       return this;
//   },
//   getValue: function () {
//       return this.count;
//   }
// };
// let current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current);


// 4.	
// Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют, 
// а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. 
// Для расчетов все методы используют функционал ранее созданного калькулятора.
// alert(me.getSum(1, 1));
// alert(me.getDiv(1, 0));

// let me = {
//     getSum: function (x, y) {
//         this.x = x;
//         this.y = y;
//         return this.x + ' + ' + this.y + ' = ' + calculator.sum.call(this, this.x, this.y);
//     },
//     getDiff: function (x, y) {
//         this.x = x;
//         this.y = y;
//         return this.x + ' - ' + this.y + ' = ' + calculator.diff.call(this, this.x, this.y);
//     },
//     getMulti: function (x, y) {
//         this.x = x;
//         this.y = y;
//         return this.x + ' * ' + this.y + ' = ' + calculator.multi.call(this, this.x, this.y);
//     },
//     getDiv: function (x, y) {
//         this.x = x;
//         this.y = y;
//         return this.x + ' / ' + this.y + ' = ' + calculator.div.call(this, this.x, this.y);
//     }
// };

// alert(me.getSum(1, 1));
// alert(me.getDiv(1, 0));


// 5.	
// Есть следующий код:
// var country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };
// function format(start, end) {
//     console.log(start + this.name + end);
// }
// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
// format.call(/* Ваш код */); // Ukraine
// format.apply(/* Ваш код */); // [Ukraine]
// format.call(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // undefined


// let country = {
//   name: 'Ukraine',
//   language: 'ukrainian',
//   capital: {
//       name: 'Kiev',
//       population: 2907817,
//       area: 847.66
//   }
// };
// function format(start, end) {
//   console.log(start + this.name + end);
// }

// format.call(country, '', '');
// format.apply(country, ['[',']']);
// format.call(country.capital, '', '');
// format.apply(country.capital, ['', '']);
// format.apply();


// 6.	
// Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
// function format(start, end) {
//     console.log(start + this.name + end);
// }
// Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал 
// отформатированное имя пользователя
// userFormat('<<<', '>>>'); // <<<John>>>
// Реализуйте решение текущего задания используя метод bind().

// const user = {
//   name: 'John'
// };

// function format(start, end) {
//     console.log(start + this.name + end);
// }

// let userFormat = format.bind(user);
// userFormat('<<<', '>>>');


// 7.	Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: 
// разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, 
// которая которая выводит приветствие тому, кто передан в ее параметре:
// hello('World'); // Hello World
// hello('John'); // Hello John

// function concat(str1, str2, del = '/') {
//   return console.log(str1 + del + str2);
// }

// let hello = concat.bind(null, 'Hello');
// hello('World');
// hello('John');


// Level Up
// Рекурсия

// 1.	Напишите функцию, которая возвращает куб переданного числа, 
// аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:
// console.log( cube(2) ); // 8

// function cub(number, pow = 3) {
//   if(pow !== 1) {
//     return number * cub(number, pow-1);
//   }
//   return number;
// }

// function cubFor(number) {
//   let sum = number;
//   for (let i = 1; i < 3; i++) {
//     sum *= number;
//   }
//   return sum;
// }

// console.log( cub(2) );
// console.log( cubFor(2) );
  

// 2.	Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:
// console.log( sum(1, 2, 3, 4, 5) ); // 15

// function sum(...args) {
//   if (args.length > 0) {
//     return args[0] + sum(...args.slice(1));
//   }
//   return 0;
// }

// console.log( sum(1, 2, 3, 4, 5) );