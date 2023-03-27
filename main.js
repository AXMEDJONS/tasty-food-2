let doc = document

function showMenu(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}


showMenu('nav-toggle', 'nav-menu')

// remove menu mobile

const navlink = document.querySelectorAll('.nav__link');

function lineAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navlink.forEach(n => n.addEventListener('click', lineAction));

let window_scroll_top = window.pageYOffset // Эта функция показывает на сколько мы прокрутили сайт
console.log(window_scroll_top);

// window.onscroll = () => {
//     let links = doc.querySelectorAll('.nav__link')
//     for (let item of links) {
//         item.classList.remove('active-link')
//         item.style.color = '#707070'
//     }
//     if (window_scroll_top < 588 || window_scroll_top == 0) {
//         links[0].style.color = '#069C54'
//     }
//     if (window_scroll_top > 587 && window_scroll_top < 888) {
//         links[1].style.color = '#069C54'
//     }
//     if (window_scroll_top > 887 && window_scroll_top < 1490) {
//         links[2].style.color = '#069C54'
//     }
//     if (window_scroll_top > 1490 && window_scroll_top < 2048) {
//         links[3].style.color = '#069C54'
//     }
//     if (window_scroll_top > 2048 && window_scroll_top < 3227) {
//         links[4].style.color = '#069C54'
//     }
// }

window.onscroll = () => {
    let links = doc.querySelectorAll('.nav__link')
    for (let item of links) {
        item.classList.remove('active-link')
    }
    if (window_scroll_top < 588 || window_scroll_top == 0) {
        links[0].classList.add('active-link')
    }
    if (window_scroll_top > 587 && window_scroll_top < 888) {
        links[1].classList.add('active-link')
    }
    if (window_scroll_top > 887 && window_scroll_top < 1490) {
        links[2].classList.add('active-link')
    }
    if (window_scroll_top > 1490 && window_scroll_top < 2048) {
        links[3].classList.add('active-link')
    }
    if (window_scroll_top > 2048 && window_scroll_top < 3227) {
        links[4].classList.add('active-link')
    }
}

window.onscroll = function () { myFunction() };

function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

let yakor__home = doc.querySelectorAll('.nav__link')[0]
let yakor__about = doc.querySelectorAll('.nav__link')[1]
let yakor__services = doc.querySelectorAll('.nav__link')[2]
let yakor__menu = doc.querySelectorAll('.nav__link')[3]
let yakor__contact = doc.querySelectorAll('.nav__link')[4]

let page__1 = doc.querySelector('.home__container')
let page__2 = doc.querySelector('.about__container')
let page__3 = doc.querySelector('.services__container')
let page__4 = doc.querySelector('.menu__container')
let page__5 = doc.querySelector('.contact__container')


yakor__home.addEventListener('click', () => {
    event.preventDefault()
    let links = doc.querySelectorAll('.nav__link')
    for (let item of links) {
        item.classList.remove('active-link')
    }
    yakor__home.classList.add('active-link')
    window.scrollTo({ top: page__1.offsetTop - 0, behavior: 'smooth' })
})

yakor__about.addEventListener('click', () => {
    event.preventDefault()
    let links = doc.querySelectorAll('.nav__link')
    for (let item of links) {
        item.classList.remove('active-link')
    }
    yakor__about.classList.add('active-link')
    window.scrollTo({ top: page__2.offsetTop - 180, behavior: 'smooth' })
})

yakor__services.addEventListener('click', () => {
    event.preventDefault()
    let links = doc.querySelectorAll('.nav__link')
    for (let item of links) {
        item.classList.remove('active-link')
    }
    yakor__services.classList.add('active-link')
    window.scrollTo({ top: page__3.offsetTop - 270, behavior: 'smooth' })
})

yakor__menu.addEventListener('click', () => {
    event.preventDefault()
    let links = doc.querySelectorAll('.nav__link')
    for (let item of links) {
        item.classList.remove('active-link')
    }
    yakor__menu.classList.add('active-link')
    window.scrollTo({ top: page__4.offsetTop - 260, behavior: 'smooth' })
})

yakor__contact.addEventListener('click', () => {
    event.preventDefault()
    let links = doc.querySelectorAll('.nav__link')
    for (let item of links) {
        item.classList.remove('active-link')
    }
    yakor__contact.classList.add('active-link')
    window.scrollTo({ top: page__5.offsetTop - 240, behavior: 'smooth' })
})

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 100,
    pagination: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
});

let modal__window = doc.querySelector('.wrap__okno')
let body = doc.body
let button__contact = doc.querySelector('#button__contact')
let button__cross = doc.querySelector('.button__cross')

button__contact.addEventListener('click', () => {
    modal__window.classList.toggle('not__active')
    body.style.overflow = 'hidden'
})

button__cross.addEventListener('click', () => {
    modal__window.classList.toggle('not__active')
    body.style.overflow = 'auto'
})

let main__form = doc.forms.main__form // Обращаемся к самой 'form' с помощью атрибута 'name'

let input__man = main__form.man
let input__women = main__form.women

input__man.addEventListener('click', () => {
    input__women.checked = false
})
input__women.addEventListener('click', () => {
    input__man.checked = false
})

main__form.addEventListener('submit', (event) => {
    event.preventDefault()
    let form__data = {} // Создаем пустой объект
    let inputs = doc.querySelectorAll('input') // Обращаемся ко всем инпутам которые имеют значение в виде текста
    let input__man = main__form.man
    let input__women = main__form.women // Обращаемся с помощью атрибута текст к инпуту checkbox
    for (let item of inputs) { // Создаем цикл for of для inputs
        let { name, value } = item // Создаем две переменные name и value которые равны item
        form__data[name] = value
        form__data.man = input__man.checked
        form__data.women = input__women.checked
        item.value = '' // Очищаем введенные данные в форме
    }
    input__man.checked = false // Очищаем введенные данные в форме
    input__women.checked = false // Очищаем введенные данные в форме
    console.log(form__data); // Проверяем результат
    let form__data__json = JSON.stringify(form__data) // Переводим form__data в JSON формат
    console.log(form__data__json); // Проверяем результат
})

let button_menu = doc.querySelector('.burg_menu')
let top_line = doc.querySelector('.top')
let center_line = doc.querySelector('.mid')
let bottom_line = doc.querySelector('.bot')
let nav__menu = doc.querySelector('.nav__menu')

button_menu.addEventListener('click', function () {
    nav__menu.classList.toggle('active')
    top_line.classList.toggle('top_active')
    center_line.classList.toggle('mid_active')
    bottom_line.classList.toggle('bot_active')
})

// const namesContainer = document.querySelector('.names');
// let draggedName = null;
// namesContainer.addEventListener('dragstart', (event) => {
//     draggedName = event.target;
//     event.target.style.opacity = '0.5';
// });
// namesContainer.addEventListener('dragend', (event) => {
//     event.target.style.opacity = '';
//     draggedName = null;
// });
// namesContainer.addEventListener('dragover', (event) => {
//     event.preventDefault();
// });
// namesContainer.addEventListener('drop', (event) => {
//     event.preventDefault();
//     if (event.target.classList.contains('name')) {
//         const droppedName = event.target;
//         const temp = document.createElement('div');
//         draggedName.parentNode.insertBefore(temp, draggedName);
//         droppedName.parentNode.insertBefore(draggedName, droppedName);
//         temp.parentNode.insertBefore(droppedName, temp);
//         temp.parentNode.removeChild(temp);
//     }
// });