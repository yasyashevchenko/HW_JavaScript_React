// Выполнить дз из прошлого урока в прототипном стиле или с помощью классов

'use strict'

 
class Figure {
    constructor(x1, y1, x2, y2, color) {
    this._x1 = x1;
    this._y1 = y1;
    this._x2 = x2;
    this._y2 = y2;
    this._color = color;
    };
};


class Line extends Figure {
    constructor(x1, y1, x2, y2, color) {
        super(x1, y1, x2, y2, color);
    };

    draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this._x1, this._y1);
    ctx.lineTo(this._x2, this._y2);
    ctx.lineWidth = "0.5";
    ctx.strokeStyle = this._color;
    ctx.stroke();
    };
};


class Circle extends Figure {
    constructor(x, y, r, color) {
        super(x, y, x, y, color);
        this._x = x;
        this._y = y;
        this._r = r;
    };

    draw (ctx) {
    ctx.beginPath();
    ctx.arc(this._x, this._y, this._r, 0, 2*Math.PI);
    ctx.strokeStyle = this._color;
    ctx.fillStyle = this._color;
    ctx.globalAlpha = 0.3;
    ctx.fill();
    ctx.stroke();
    };
};


class Rect extends Figure {
    constructor(x, y, w, h, color) {
        super(x, y, x, y, color);
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
    };

    draw(ctx) {
    ctx.beginPath();
    ctx.rect(this._x, this._y, this._w, this._h)
    ctx.strokeStyle = this._color;
    ctx.fillStyle = this._color;
    ctx.globalAlpha = 0.3;
    ctx.fill();
    ctx.stroke();
    };
};

class Canvas {
    constructor(id) {
    var c = document.querySelector(id)
    this._ctx = c.getContext("2d");
    c.height = 300;
    c.width  = 500;
    }

    add() {
    var ctx = this._ctx;
    [].forEach.call(arguments, function(el) {
        el.draw(ctx);
    });    
    };
};



var drawArea = new Canvas('#canvasID');

var line = new Line(50, 250, 200, 200, 'red');
var line2 = new Line(210, 220, 60, 270, 'blue');

var circle = new Circle( 120,  120, 50, 'green' );
var circle2 = new Circle(100, 80, 30, 'blue');

var rect = new Rect( 260, 130, 60, 120, 'blue');
var rect2 = new Rect(370, 160, 70, 40, 'yellow');
var rect3 = new Rect(280, 120, 110, 60, 'violet');

drawArea.add(line, line2, circle, circle2, rect, rect2, rect3);


for (let count = 0, x1 = 0, x2 = 10; x1 < 500; count++, x1 += 10, x2 +=10) {
    if (count % 2) drawArea.add(new Line(x1, 10, x2, 0, 'red'));
    else drawArea.add(new Line(x1, 0, x2, 10, 'red'));
}