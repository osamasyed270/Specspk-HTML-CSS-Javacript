const searchMobiles = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();

    let ul = document.getElementById('myUL');

    let li = ul.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        let textValue = a.textContent || a.innerHTML;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}


let openSearch = document.querySelector('.open-search');
let closeSearch = document.querySelector('#crossbtn-search');
let searchBox = document.querySelector('.search-box');
let searchBtn = document.querySelector('.search-btn');
let menuBtn = document.querySelector('.menu-btn');
let closeMenu = document.querySelector('#crossbtn-menu');
let menu = document.querySelector('.menu');

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


var myUL = document.querySelector('#myUL');
import {mobiles} from '/javascript/all-mobiles.js';
const product = mobiles;
// console.log(product);

window.addEventListener('DOMContentLoaded', function () {
    displayMobilesListItems(product);
});

function displayMobilesListItems(mobilesListItems) {
    let displayMobileList = mobilesListItems.map(function (mobileList) {

        return `<li><a href=${mobileList.mobileLink}>${mobileList.name} ${mobileList.model}</a></li>`
    });

    displayMobileList = displayMobileList.join("");
    myUL.innerHTML = displayMobileList;
}
