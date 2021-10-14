// Массивы и объекты

// *1
// Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

// let array = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
// let sum = 0;

// function count() {
//     for (i = 0; i < array.length; i++) {
//          array = array.map(i => +i)
//             if(array[i] >= 0 || array[i] <= 0) {
//             sum += array[i];
//         }
//     }
// }

// count();
// alert(sum);


// *2
// Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. 
// Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, 
// не используя функцию Math.pow().

// let arr = [];

// for (let i = 0; i < 10; i++) {
//     arr.push(+(Math.random() * 100).toFixed(2));
// }
// console.log(arr);

// function elevate () {
//     ret = [];
//     for (let i = 0, len = arr.length; i < len; i++) {
//         ret.push(+(arr[i] ** 5).toFixed(2));
//     }
//     return ret;     
// }

// elevate();
// console.log(ret);


// *3
// Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// a.	Добавьте в начало массива значение ‘Backbone.js’
// b.	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// c.	Добавьте в массив значение ‘CommonJS’ вторым элементом
// d.	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

// let arrName = ['AngularJS', 'jQuery'];
// arrName.unshift('Backbone.js');
// arrName.push('ReactJS', 'Vue.js');
// arrName.splice(1, 0, 'CommonJS');

// let value  = 'jQuery';
// arrName = arrName.filter(function(item) {    
//     return item !== 'jQuery'
// })

// console.log(arrName);
// alert(`jQuery - ${arrName['jQuery']} " Это здесь лишнее"`); // *не поняла что именно нужно в alert, только фразу или и само значение


// *4
// Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. 
// Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однажды сломал головой фонарь’ 
// с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку 
// и выведите в alert исходный и итоговый варианты.

// let str = 'Как однажды Жак звонарь сломал фонарь головой';
// let arrStr = str.split(' ');

// function swap(arrStr, a, b) {
//     arrStr[a] = arrStr.splice(b, 1, arrStr[a])[0];
// }
// swap( arrStr, 1, 2);
// swap( arrStr, 2, 3);
// swap( arrStr, 5, 6);

// alert(str + ' - ' + arrStr.join(' '));



// *5
// Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. 
// С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, 
// и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, 
// которое также запрашивается из prompt.

// let person = {
//     возраст: 25,
//     пол: 'мужской',
//     статус: 'не женат'
// };  

// let property = prompt('Введите нужное Вам свойство');
// if (property in person) { 
//     alert(person[property]);
// } else {
//     person[property] = prompt('Такого свойства еще нет. Укажите значения свойства ' + property);
//     alert('Свойство ' + property + ' установлено в значение ' + person[property]);
// };
  
// console.log(person);


// *6 
// Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
// прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. 
// Добавьте этот гаджет персоне, созданной ранее.

// let phone = {};
// phone.brand = prompt('Enter the brand');
// phone.model = prompt('Enter model');
// phone.resolution = prompt('Enter the resolution');
// phone.color = prompt('Enter color');
// person.phone = phone;

// console.log(person);


// *7
// Создайте объект dates для хранения дат. Первая дата – текущая, new Date. 
// Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. 
// Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

// let currDate = new Date();
// let oldDate = new Date();
// let dates = {
//     currDate : currDate,
//     oldDate : new Date(oldDate.setDate(oldDate.getDate() - 365))
// };
// let newDate = new Date(prompt('Enter date in format  yyyy-MM-dd'));
// console.log(dates);
// console.log(newDate);
// console.log(newDate >= dates.oldDate && newDate <= dates.currDate);


// *8 
// Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, 
// полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех 
// чисел массива и выведите в alert полученный результат.

// let arr = [];

// for (; ;) {
//     let val1 = prompt('Enter the number');
//     if (!isNaN(+val1) && val1) {
//         arr.push(+val1);
//     } else if (val1) {
//         alert('You enter NaN');
//     } else {
//         break;
//     }
//     console.log(val1);
// }

// let val2 = arr.reduce((acc, item) => {
//    return acc += item
// }, 0);

// console.log(val2);

// alert('sum of numbers - ' + val2);


// *9 
// Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:

// let arr = [[]];
// for (let i = 1; i < 10; i++) {
//     arr[i-1] = [];
//     for (let j = 1; j < 10; j++) {
//         arr[i-1].push(`${i} x ${j} = ${i * j}`);
//     }
// }

// console.log(arr);


// *10
// Создайте структуру данных, полностью описывающую html-разметку картинки

// let htmlImage = {
//     src: 'https://images.unsplash.com/photo-1622495546323-5dac33dedb01?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
//     alt: 'photo',
//     style: 'border: 2px solid #aaa',
//     width: 800,
//     height: 800
// };