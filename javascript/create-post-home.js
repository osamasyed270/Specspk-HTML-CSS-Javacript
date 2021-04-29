const latestMobiles = [
    {
        id: 8,
        img: "../mobiles-images/SamsungGalaxyS20FE-s.jpg",
        name: "Samsung",
        model: "Galaxy S20 FE",
        price: "119,999",
        mobileLink: "../mobiles/samsung/samsung-galaxy-s20-fe.html",
    },
    {
        id: 7,
        img: "../mobiles-images/VivoV20-s.jpg",
        name: "Vivo",
        model: "V20",
        price: "59,999",
    },
    {
        id: 6,
        img: "../mobiles-images/SamsungGalaxyS20FE-s.jpg",
        name: "Samsung",
        model: "Galaxy S20 FE",
        price: "119,999",
    },
    {
        id: 5,
        img: "../mobiles-images/Realme7Pro-s.jpg",
        name: "Realme",
        model: "7 Pro",
        price: "54,999",
    },
    {
        id: 4,
        img: "../mobiles-images/SamsungGalaxyS20FE-s.jpg",
        name: "Samsung",
        model: "Galaxy S20 FE",
        price: "119,999",
    },
    {
        id: 3,
        img: "../mobiles-images/Realme7Pro-s.jpg",
        name: "Realme",
        model: "7 Pro",
        price: "54,999",
    },
    {
        id: 2,
        img: "../mobiles-images/SamsungGalaxyS20FE-s.jpg",
        name: "Samsung",
        model: "Galaxy S20 FE",
        price: "119,999",
    },
    {
        id: 1,
        img: "../mobiles-images/VivoV20-s.jpg",
        name: "Vivo",
        model: "V20",
        price: "59,999",
    },
]

const latestNews = [
    {
        id: 8,
        img: "../images/a077f031779be4d73ab7da079c2f0d96_thumb.jpg",
        title: "Samsung Galaxy S21 Series Will Bring Back ....",
        date: "December 5,2020",
    },
    {
        id: 7,
        img: "../images/d36f592f2a85d628427ffad805a22af6_thumb.jpg",
        title: "Realme Ace to Feature Snapdragon 875 and ....",
        date: "December 6,2020",
    },
    {
        id: 6,
        img: "../images/027f02fbee340167f2be8c4a5751834c_thumb.jpg",
        title: "Nokia 5.4 is Coming in December With More ....",
        date: "December 4,2020",
    },
    {
        id: 5,
        img: "../images/a077f031779be4d73ab7da079c2f0d96_thumb.jpg",
        title: "Samsung Galaxy S21 Series Will Bring Back ....",
        date: "December 5,2020",
    },
    {
        id: 4,
        img: "../images/027f02fbee340167f2be8c4a5751834c_thumb.jpg",
        title: "Nokia 5.4 is Coming in December With More ....",
        date: "December 4,2020",
    },
    {
        id: 3,
        img: "../images/d36f592f2a85d628427ffad805a22af6_thumb.jpg",
        title: "Realme Ace to Feature Snapdragon 875 and ....",
        date: "December 3,2020",
    },
    {
        id: 2,
        img: "../images/a077f031779be4d73ab7da079c2f0d96_thumb.jpg",
        title: "Samsung Galaxy S21 Series Will Bring Back ....",
        date: "December 2,2020",
    },
    {
        id: 1,
        img: "../images/027f02fbee340167f2be8c4a5751834c_thumb.jpg",
        title: "Nokia 5.4 is Coming in December With More ....",
        date: "December 1,2020",
    },
]

const brands = [
    {
        id: 8,
        img: "../images/apple-iphone-12-pro-max-3.jpg",
        name: "Apple (IPhone)",
        quantity: "20 Mobiles",
    },
    {
        id: 7,
        img: "../images/s20.0.jpg",
        name: "Samsung",
        quantity: "100 Mobiles",
    },
    {
        id: 6,
        img: "../images/huawei_p30_pro_and_p30_1.jpg",
        name: "Huawei",
        quantity: "72 Mobiles",
    },
    {
        id: 5,
        img: "../images/s20.0.jpg",
        name: "Samsung",
        quantity: "100 Mobiles",
    },
    {
        id: 4,
        img: "../images/huawei_p30_pro_and_p30_1.jpg",
        name: "Huawei",
        quantity: "72 Mobiles",
    },
    {
        id: 3,
        img: "../images/apple-iphone-12-pro-max-3.jpg",
        name: "Apple (IPhone)",
        quantity: "20 Mobiles",
    },
    {
        id: 2,
        img: "../images/s20.0.jpg",
        name: "Samsung",
        quantity: "100 Mobiles",
    },
    {
        id: 1,
        img: "../images/huawei_p30_pro_and_p30_1.jpg",
        name: "Huawei",
        quantity: "72 Mobiles",
    },
]

const latestMobileSlider = document.querySelector('.latest-mobile-slider');
const latestNewsSlider = document.querySelector('.latest-news-slider');
const brandsSlider = document.querySelector('.brands-slider');

window.addEventListener('DOMContentLoaded', function () {
    displayLatestMobilesItems(latestMobiles);
    displayLatestNewsItems(latestNews);
    displayBrandsItems(brands);
});

// FUNCTION FOR DISPLAY LATEST MOBILES POST
function displayLatestMobilesItems(latestMobilesItems) {
    let displayLatestMobile = latestMobilesItems.map(function (mobile) {

        return `<div class="post">
            <a href=${mobile.mobileLink}>
                <div class="post-top">
                    <img src=${mobile.img} alt="">
                </div>
                <div class="post-mid">
                    <p>${mobile.name}<br>${mobile.model}</p>
                </div>
                <div class="post-bottom">
                    <p class="price">Rs. ${mobile.price}</p>
                </div>
            </a>

            <div class="mini-specs">
                <div class="title">
                    <p>Mini Specifications</p>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>RAM:</th>
                            <td>8GB RAM</td>
                        </tr>
                        <tr>
                            <th>Storage:</th>
                            <td>128GB Built-in</td>
                        </tr>
                        <tr>
                            <th>Camera:</th>
                            <td>12MP, 8MP, 12MP</td>
                        </tr>
                        <tr>
                            <th>Display:</th>
                            <td>1440x2400 Pixels</td>
                        </tr>
                        <tr>
                            <th>Battery:</th>
                            <td>4500 mAh</td>
                        </tr>
                    </tbody>
                </table>

                <div class="mini-specs-bottom">
                    <a href=${mobile.mobileLink}>Full Specifications</a>
                </div>
            </div>
        
    </div>`
    });
    displayLatestMobile = displayLatestMobile.join("");
    latestMobileSlider.innerHTML = displayLatestMobile;
}

// FUNCTION FOR DISPLAY LATEST NEWS POST
function displayLatestNewsItems(latestNewsItems) {
    let displayLatestNews = latestNewsItems.map(function (news) {

        return `<div class="post" title="${news.title}">
        <a href="#">
            <div class="post-top">
                <img src=${news.img} alt="">
            </div>
            <div class="post-mid">
                <p>${news.title}</p>
            </div>
            <div class="post-bottom">
                <p class="price">${news.date}</p>
            </div>
        </a>
    </div>`
    });
    displayLatestNews = displayLatestNews.join("");
    latestNewsSlider.innerHTML = displayLatestNews;
}

// FUNCTION FOR DISPLAY BRANDS POST
function displayBrandsItems(brandsItems) {
    let displayBrand = brandsItems.map(function (brand) {

        return `<div class="post" title="${brand.name}">
        <a href="#">
            <div class="post-top">
                <img src=${brand.img} alt="">
            </div>
            <div class="post-mid">
                <p>${brand.name}</p>
            </div>
            <div class="post-bottom">
                <p class="price">${brand.quantity}</p>
            </div>
        </a>
    </div>`
    });
    displayBrand = displayBrand.join("");
    brandsSlider.innerHTML = displayBrand;
}