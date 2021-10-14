// ООП в функциональном стиле

// Создайте базовый класс Figure, который будет хранить координаты (x, y) и цвет фигуры. 
// На базе класса Figure создайте три класса – Line, Rect, Circle, каждый из которых создает соответствующую фигуру. 
// Пример создания экземпляров каждого класса и параметры фигур:

// var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
// var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
// var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color

// Все три класса-наследника имеют метод draw для рисования фигуры с соответствующими параметрами 
// (координаты, размеры, цвет).

// Фигуры рисуются на Canvas. Для рисования на канвасе создайте еще один класс – Canvas, 
// в котором инициализируется элемент <canvas> из DOM. Класс Canvas – final, он не наследуется. 
// В этом классе есть метод add, который и отображает созданные вами фигуры на странице. 
// Обратите внимание, добавлять фигуры на канвас можно как по отдельности, так и списком.

// var drawArea = new Canvas('canvasID');
// drawArea.add(line);
// drawArea.add(circle, rect);

// <canvas id="canvasID"></canvas>

'use strict'

 
function Figure(x1, y1, x2, y2, color) {
    this._x1 = x1;
    this._y1 = y1;
    this._x2 = x2;
    this._y2 = y2;
    this._color = color;
}


function Line(x1, y1, x2, y2, color) {
    Figure.apply(this, arguments);
}
Line.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this._x1, this._y1);
    ctx.lineTo(this._x2, this._y2);
    ctx.lineWidth = "0.5";
    ctx.strokeStyle = this._color;
    ctx.stroke();
}


function Circle(x, y, r, color) {
    Figure.apply(this, arguments);
    this._x = x;
    this._y = y;
    this._r = r;
}
Circle.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this._x, this._y, this._r, 0, 2*Math.PI);
    ctx.strokeStyle = this._color;
    ctx.fillStyle = this._color;
    ctx.globalAlpha = 0.3;
    ctx.fill();
    ctx.stroke();
}


function Rect(x, y, w, h,  color) {
    Figure.apply(this, arguments);
    this._x = x;
    this._y = y;
    this._w = w;
    this._h = h;
}
Rect.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.rect(this._x, this._y, this._w, this._h)
    ctx.strokeStyle = this._color;
    ctx.fillStyle = this._color;
    ctx.globalAlpha = 0.3;
    ctx.fill();
    ctx.stroke();
}


function Canvas(sel) {
    var c = document.querySelector(sel)
    this._ctx = c.getContext("2d");
    c.height = 300;
    c.width  = 500;
};
Canvas.prototype.add = function() {
    var ctx = this._ctx;
    [].forEach.call(arguments, function(el) {
        el.draw(ctx);
    });    
}


var drawArea = new Canvas('#canvasID');

var line = new Line(50, 250, 200, 200, 'red');
var line2 = new Line(210, 220, 60, 270, 'blue');

var circle = new Circle(120, 120, 50, 0, 'green');
var circle2 = new Circle(100, 80, 30, 0, 'blue');

var rect = new Rect(260, 130, 60, 120, 'blue');
var rect2 = new Rect(370, 160, 70, 40, 'yellow');
var rect3 = new Rect(280, 120, 110, 60, 'violet');

drawArea.add(line, line2, circle, circle2, rect, rect2, rect3);


for (let count = 0, x1 = 0, x2 = 10; x1 < 500; count++, x1 += 10, x2 +=10) {
    if (count % 2) drawArea.add(new Line(x1, 10, x2, 0, 'red'));
    else drawArea.add(new Line(x1, 0, x2, 10, 'red'));
}