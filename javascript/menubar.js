let openSearch = document.querySelector('.open-search');
let closeSearch = document.querySelector('#crossbtn-search');
let searchBox = document.querySelector('.search-box');
let searchBtn = document.querySelector('.search-btn');
let menuBtn = document.querySelector('.menu-btn');
let closeMenu = document.querySelector('#crossbtn-menu');
let menu = document.querySelector('.menu');
let socialMediaBtn = document.querySelector('.social-media-heading');
let socialMediaUl = document.querySelector('.social-media ul');

openSearch.addEventListener('click', function () {
    searchBox.classList.toggle('show-search-box');
});

closeSearch.addEventListener('click', function () {
    searchBox.classList.remove('show-search-box');
});

searchBtn.addEventListener('click', function () {
    searchBox.classList.toggle('show-search-box');
    menu.classList.remove('show-side-menu');
});

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('show-side-menu');
    searchBox.classList.remove('show-search-box');
});

closeMenu.addEventListener('click', function () {
    menu.classList.remove('show-side-menu');
});

socialMediaBtn.addEventListener('click', function() {
    socialMediaUl.classList.toggle('show-social-media-names');
})