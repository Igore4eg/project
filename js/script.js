/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)  ++

2) Изменить жанр фильма, поменять "комедия" на "драма"  ++

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.   ++
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.   ++
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов  ++
*/

'use strict';

const movieDB = {
    movies: [
        "Ла-ла лэнд",
        "АЛоган",
        "Лига справедливости",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const   reklamaImg = document.querySelectorAll('.promo__adv img'),
        bg = document.querySelector('.promo__bg'),
        ganr = bg.querySelector('.promo__genre'),
        list  = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('.add'),
        inputFilm = form.querySelector('.adding__input'),
        inputCheck = form.querySelector('input[type=checkbox]');

reklamaImg.forEach(item => item.remove());

ganr.textContent = "драма";

bg.style.background = "url('../img/bg.jpg') center center/cover no-repeat";

function movieDBAdd() {
    movieDB.movies.sort();

    list.innerHTML = "";
    
    movieDB.movies.forEach((item, i) => {
        list.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${item}
                <div class="delete"></div>
            </li>
        `;
    });
    document.querySelectorAll('.delete').forEach( (elem, i) => {
        elem.addEventListener('click', () => {
            elem.parentElement.remove();
            movieDB.movies.splice(i, 1);
            movieDBAdd();
        });
    });
}

movieDBAdd();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let nameAddFilm = inputFilm.value;
    if (nameAddFilm) {
        if (nameAddFilm.length > 21) {
            nameAddFilm = `${nameAddFilm.substring(0 , 21)}...`;
        }
        if (inputCheck.checked) {
            console.log(`Добавляем любимый фильм - ${nameAddFilm}`);
        }
        movieDB.movies.push(nameAddFilm);
    }
    movieDBAdd();
    form.reset();
});


