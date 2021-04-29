const searchItems = [
    {
        id: 7,
        category: "infinix",
        name: "Infinix",
        model: "Note 7",
        mobileLink: "https://www.whatmobile.com.pk/Infinix_Note-7",
    },
    {
        id: 6,
        category: "samsung",
        name: "Samsung",
        model: "Galaxy Note 20 Ultra",
        mobileLink: "https://www.whatmobile.com.pk/Samsung_Galaxy-Note-20-Ultra",
    },
    {
        id: 5,
        category: "samsung",
        name: "Samsung",
        model: "Galaxy S10 Plus 512GB",
        mobileLink: "https://www.whatmobile.com.pk/Samsung_Galaxy-S10-Plus-512GB",
    },
    {
        id: 4,
        category: "samsung",
        name: "Samsung",
        model: "Galaxy S20 Ultra",
        mobileLink: "https://www.whatmobile.com.pk/Samsung_Galaxy-S20-Ultra",
    },
    {
        id: 3,
        category: "samsung",
        name: "Samsung",
        model: "Galaxy Z Flip",
        mobileLink: "https://www.whatmobile.com.pk/Samsung_Galaxy-Z-Flip",
    },
    {
        id: 2,
        category: "samsung",
        name: "Samsung",
        model: "Galaxy Z Fold 2",
        mobileLink: "https://www.whatmobile.com.pk/Samsung_Galaxy-Z-Fold-2",
    },
    {
        id: 1,
        category: "samsung",
        name: "Samsung",
        model: "Galaxy Fold",
        mobileLink: "https://www.whatmobile.com.pk/Samsung_Galaxy-Z-Fold-2",
    },
];

searchItems.sort(function compare( a, b ) {
    if ( a.category.toLowerCase() < b.category.toLowerCase() ){
      return -1;
    }
    if ( a.category.toLowerCase() > b.category.toLowerCase() ){
      return 1;
    }
    return 0;
  });

const myUL = document.querySelector('#myUL');

window.addEventListener('DOMContentLoaded', function () {
    displayMobilesListItems(searchItems);
});

function displayMobilesListItems(mobilesListItems) {
    let displayMobileList = mobilesListItems.map(function (mobileList) {

        return `<li><a href=${mobileList.mobileLink}>${mobileList.name} ${mobileList.model}</a></li>`
    });

    displayMobileList = displayMobileList.join("");
    myUL.innerHTML = displayMobileList;
}

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
