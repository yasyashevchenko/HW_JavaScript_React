//1)Создайте h2 c текущим временем, к примеру " Время: 13:34:45";
//2) Примените setInterval для отображения времени каждую секунду, чтобы были идущие чаcы
//3) Создайте кнопки Start и Stop
//4) Навесьте обработчики события на клик.
//5) При клике на Stop время должно остановиться
//6) При клике на Start время должно продолжить свой ход (скачек времени, это нормально)


const h1 = document.createElement('div');
h1.innerHTML = "<h1 id='title'></h1>";
document.body.appendChild(h1);

const button = document.createElement('div');
button.innerHTML = "<button id='start-btn' style='margin-right: 10px; padding: 10px 15px; color: blue'>Start</button>" + "<button id='stop-btn' style='margin-right: 10px; padding: 10px 15px; color: red'>Stop</button>";
document.body.appendChild(button);

function checkTime(i) {
    if (i < 10)
    {
        i = "0" + i;
    }
    return i;
}


function startTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('title').innerHTML = "Время: " + h + ":" + m + ":" + s;
    time = setInterval('startTime()', 1000);

    document.getElementById('start-btn').addEventListener('click', () => {
        time = setInterval(startTime, 1000);
    });

    document.getElementById('stop-btn').addEventListener('click', () => {
        clearInterval(time);
    });
}

startTime();


