// Создайте h2 c текстом "События"
// Создайте блок div размером 400px на 400px
// Создайте над блоком текст с отображением координат по примеру X: 150 Y: 120
// Добавьте внизу блока еще один текст с содержанием "Координаты внутри блока: х 180, у 200"
// При движении мышки над блоком должны обновляться данные о расположении курсора и отображаться координаты в тексте соответственно осям х и у по отношению к странице
// Внизу должны отображаться текущие координаты по x и y, но по отношению блока


const h2 = document.createElement('div');
h2.innerHTML = "<h2 id='title'>Событие</h2>";
document.body.appendChild(h2);

const secondCoordinate = document.createElement('p');
secondCoordinate.innerHTML = "X: <span> 0 </span>" + " Y: <span> 0 </span>";
document.body.appendChild(secondCoordinate);
secondCoordinate.classList.add('secondCoordinate');

const div = document.createElement('div');
div.innerHTML = "<div id='block' style='width:400px; height:400px; background-color:#8CB6C0'>";
document.body.appendChild(div);

const firstCoordinate = document.createElement('p');
firstCoordinate.innerHTML = "Координаты внутри блока: X: <span> 0 </span>" + " Y: <span> 0 </span>";
document.body.appendChild(firstCoordinate);
firstCoordinate.classList.add('firstCoordinate');

const firstCoordinateX = document.querySelector('.firstCoordinate span:first-child');
const firstCoordinateY = document.querySelector('.firstCoordinate span:last-child');
const secondCoordinateX = document.querySelector('.secondCoordinate span:first-child');
const secondCoordinateY = document.querySelector('.secondCoordinate span:last-child');


document.querySelector('html').onmousemove = function (event) {
    event = event || window.onload;
    secondCoordinateX.innerHTML = event.pageX;
    secondCoordinateY.innerHTML = event.pageY;
}

const divLeft = div.offsetLeft; //Содержит расстояние от offsetParent до границы элемента.
const divTop = div.offsetTop;

div.onmousemove = function (event) {
    event = event || window.onload;
    firstCoordinateX.innerHTML = `${event.pageX - divLeft}`;
    firstCoordinateY.innerHTML = `${event.pageY - divTop}`;
}



