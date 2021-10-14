// Необходимо написать страницу поиска и отображения видео-клипов.
// Страница должна содержать заголовок страницы, инпут для поиска, карусель на сладе которой будет находится один клип.

// Требования к карусели:
// 1.	Карусель должна иметь возможность переключения слайдов по кликам на стрелочки вправо/влево. 
// При переключении слайда видео, которое проигрывалось, должно быть остановлено, 
// чтобы не допустить воспроизведения сразу двух видео.
// 2.	При переключении слайда должно появиться следующее видео.

// URL для получения видео: https://itunes.apple.com/search
// Параметры которые необходимо передать в get запросе: “limit=10&entity=musicVideo&term=” 
// В term= должно содержатся то что ввел пользователь в инпуте

"use strict" 

const $form = $('#search-form');
const $inner = $('.carousel-inner');
const $input = $('[name="video-name"]');
const $prev = $('.carousel-control-prev');
const $next = $('.carousel-control-next');
let allVideo = [];

$form.on('submit', function (e) {
    e.preventDefault();
    const text = $input.val();
    getVideo(text);
});

function getVideo(text) {

    $.ajax({
        url: 'https://itunes.apple.com/search',
        method: 'GET',
        data: 'limit=10&entity=musicVideo&term=' + text,
        dataType: 'json'
    }).done((response) => {
        allVideo = response.results;

        $inner.empty();

        allVideo.forEach((item) => {
            $('<div>')
                .addClass('carousel-item')
                .appendTo($inner);
        });

        let $carouselItem = $('.carousel-item');
        $('.carousel-item:first').addClass('active');

        allVideo.forEach((item, i, allVideo) => {
            $('<video>')
                .attr('src', allVideo[i].previewUrl)
                .attr('controls', 'controls')
                .attr('loop', 'loop')
                .attr('width', '100%')
                .attr('height', '500px')
                .appendTo($carouselItem[i]);

            $next.on('click', function () {
                $('video')[i].pause();
            });

            $prev.on('click', function (){
                $('video')[i].pause();
            });
        });
    })

        .fail ((error) => {
            console.log ('error', error);
        })
}


