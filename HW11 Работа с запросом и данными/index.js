// Необходимо получить данные с сервера по урлу 
// https://trevadim.github.io/vue/data/data.json , и отобразить информацию о планетах.
// Необходимо отобразить кнопку и по нажатию на нее делать запрос на сервер для получения данных.
// После того как данные получены, кнопку скрыть и отобразить контент который содержится в свойстве planets
// Сделайте по возможности красиво

const button = document.createElement('div');
button.innerHTML = "<button id='planets' style='padding: 10px 25px; color: #90665A; background: #EFE2D6; font-weight: bold; box-shadow: inset -1px -1px 10px rgba(142, 100, 88, 0.8); border-radius: 6px; border: none'>Planets</button>";
document.body.appendChild(button);

button.addEventListener("click", e => {
    button.hidden=true;
    const body = document.querySelector('body');
    const link = fetch('https://trevadim.github.io/vue/data/data.json');

    link.then(response => response.json())
        .then(({planets}) => {
            let count = 0;
            for (planet in planets) {
                body.innerHTML += `<div class="section-${count}" style="width: auto; text-align: center; margin: 20px 20px"></div>`;
                body.style.background = 'rgba(239, 226, 214, 0.7)'
                createHeader(planets[planet], `.section-${count}`);
                createImg(planets[planet], `.section-${count}`);
                createInfo(planets[planet], `.section-${count}`);
            }
        })
        .catch(error => console.log(error));

    function createHeader({title}, elem) {
        body.querySelector(elem).innerHTML += 
        `<header style="text-align: center; margin:40px 0 40px 0; font-size: 36px; font-weight: 800; color: #90665A">${title}</header>`;
    }

    function createInfo({info}, elem) {
        let infoHTML = info.map(paragraph =>
            `<p style="font-size: 16px; line-height: 20px; color: #3C3A42; font-weight: 400; width: 50%; text-align: left; margin: 0 auto">${paragraph}</p>`);
        body.querySelector(elem).innerHTML += infoHTML.join('');
    }

    function createImg({url, title}, elem) {
        body.querySelector(elem).innerHTML +=
            `<img src="${url}" alt="${title}" style="text-align: center; width: 50%; height: auto; border-radius: 12px; box-shadow: 10px 10px 50px rgba(76, 83, 99, 0.5); margin-bottom: 40px;">`;
    }
})