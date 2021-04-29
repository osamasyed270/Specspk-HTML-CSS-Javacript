const mobiles = [
    {
        id: 11,
        category: "huawei",
        name: "Huawei",
        model: "P30 Pro",
        price1: 157,               // FIRST HALF PART OF PRICE 
        price2: "600",            // SECOND HALF PART OF PRICE 
        img: "/mobiles-images/HuaweiP30Pro-s.jpg",
        ram: "8GB RAM",
        storage: "256GB Built-in",
        camera: "108MP, 12MP, 12MP",
        display: "1440x3088 Pixels",
        battery: "4500 mAh",
        mobileLink: "https://www.whatmobile.com.pk/Apple_iPhone-11-Pro",
    },
    {
        id: 10,
        category: "apple",
        name: "Apple",
        model: "Iphone 11 Pro",
        price1: 214,               // FIRST HALF PART OF PRICE 
        price2: "999",            // SECOND HALF PART OF PRICE 
        img: "/mobiles-images/AppleiPhone11Pro-s.jpg",
        ram: "8GB RAM",
        storage: "256GB Built-in",
        camera: "108MP, 12MP, 12MP",
        display: "1440x3088 Pixels",
        battery: "4500 mAh",
        mobileLink: "https://www.whatmobile.com.pk/Huawei_P30-Pro",
    },
    {
        id: 9,
        category: "oppo",
        name: "Oppo",
        model: "Reno 3",
        price1: 46,               // FIRST HALF PART OF PRICE 
        price2: "999",            // SECOND HALF PART OF PRICE 
        img: "/mobiles-images/OppoReno3-s.jpg",
        ram: "8GB RAM",
        storage: "256GB Built-in",
        camera: "108MP, 12MP, 12MP",
        display: "1440x3088 Pixels",
        battery: "4500 mAh",
        mobileLink: "https://www.whatmobile.com.pk/Oppo_Reno-3",
    },
    {
        id: 8,
        category: "tecno",
        name: "Tecno",
        model: "Spark 5 Pro",
        price1: 18,               // FIRST HALF PART OF PRICE 
        price2: "999",            // SECOND HALF PART OF PRICE 
        img: "/mobiles-images/TecnoSpark5Pro-s.jpg",
        ram: "8GB RAM",
        storage: "256GB Built-in",
        camera: "108MP, 12MP, 12MP",
        display: "1440x3088 Pixels",
        battery: "4500 mAh",
        mobileLink: "https://www.whatmobile.com.pk/Tecno_Spark-5-Pro",
    },
    {
        id: 7,
        category: "infinix",
        name: "Infinix",
        model: "Note 7",
        price1: 219,               // FIRST HALF PART OF PRICE 
        price2: "999",            // SECOND HALF PART OF PRICE 
        img: "/mobiles-images/InfinixNote764GB-s.jpg",
        ram: "8GB RAM",
        storage: "256GB Built-in",
        camera: "108MP, 12MP, 12MP",
        display: "1440x3088 Pixels",
        battery: "4500 mAh",
        mobileLink: "https://www.whatmobile.com.pk/Infinix_Note-7",
    },
    {
        id: 6,
        category: "samsung",
        name: "Samsung",
        model: "Galaxy Note 20 Ultra",
        price1: 219,               // FIRST HALF PART OF PRICE 
        price2: "999",            // SECOND HALF PART OF PRICE 
        img: "/mobiles-images/SamsungGalaxyNote20Ultra-s.jpg",
        ram: "8GB RAM",
        storage: "256GB Built-in",
        camera: "108MP, 12MP, 12MP",
        display: "1440x3088 Pixels",
        battery: "4500 mAh",
        mobileLink: "https://www.whatmobile.com.pk/Samsung_Galaxy-Note-20-Ultra",
    },
    {
        id: 5,
        category: "samsung",
        name: "Samsung",
        model: "Galaxy S10 Plus 512GB",
        price1: 219,               // FIRST HALF PART OF PRICE 
        price2: "999",            // SECOND HALF PART OF PRICE 
        img: "/mobiles-images/SamsungGalaxyS10Plus512GB-s.jpg",
        ram: "8GB RAM",
        storage: "512GB Built-in",
        camera: "12MP, 12MP, 16MP",
        display: "1440x3040 Pixels",
        battery: "4100 mAh",
        mobileLink: "https://www.whatmobile.com.pk/Samsung_Galaxy-S10-Plus-512GB",
    },
    {
        id: 4,
        category: "samsung",
        name: "Samsung",
        model: "Galaxy S20 Ultra",
        price1: 226,               // FIRST HALF PART OF PRICE 
        price2: "999",            // SECOND HALF PART OF PRICE 
        img: "/mobiles-images/SamsungGalaxyS20Ultra-s.jpg",
        ram: "12GB RAM",
        storage: "128GB Built-in",
        camera: "108MP, 48MP, 12MP, 0.3MP",
        display: "1440x3200 Pixels",
        battery: "5000 mAh",
        mobileLink: "https://www.whatmobile.com.pk/Samsung_Galaxy-S20-Ultra",
    },
    {
        id: 3,
        category: "samsung",
        name: "Samsung",
        model: "Galaxy Z Flip",
        price1: 249,               // FIRST HALF PART OF PRICE 
        price2: "999",            // SECOND HALF PART OF PRICE 
        img: "/mobiles-images/SamsungGalaxyZFlip-s.jpg",
        ram: "8GB RAM",
        storage: "256GB Built-in",
        camera: "12MP, 12MP",
        display: "1080x2636 Pixels",
        battery: "3300 mAh",
        mobileLink: "https://www.whatmobile.com.pk/Samsung_Galaxy-Z-Flip",
    },
    {
        id: 2,
        category: "samsung",
        name: "Samsung",
        model: "Galaxy Z Fold 2",
        price1: 339,               // FIRST HALF PART OF PRICE 
        price2: "000",            // SECOND HALF PART OF PRICE 
        img: "/mobiles-images/SamsungGalaxyZFold2-s.jpg",
        ram: "12GB RAM",
        storage: "256GB Built-in",
        camera: "12MP, 12MP, 12MP",
        display: "1536x2208 Pixels",
        battery: "4500 mAh",
        mobileLink: "https://www.whatmobile.com.pk/Samsung_Galaxy-Z-Fold-2",
    },
    {
        id: 1,
        category: "samsung",
        name: "Samsung",
        model: "Galaxy Fold",
        price1: 339,               // FIRST HALF PART OF PRICE 
        price2: "000",            // SECOND HALF PART OF PRICE 
        img: "/mobiles-images/SamsungGalaxyFold-s.jpg",
        ram: "12GB RAM",
        storage: "512GB Built-in",
        camera: "12MP, 12MP, 16MP",
        display: "1536x2152 Pixels",
        battery: "4380 mAh",
        mobileLink: "https://www.whatmobile.com.pk/Samsung_Galaxy-Fold",
    },
]

const allMobiles = document.querySelector('.all-mobiles');
const filterBtns = document.querySelectorAll('.filter-btn');

mobiles.sort(function (a, b) {
    return b.price1 - a.price1;
  });

// LOAD MOBILES
window.addEventListener('DOMContentLoaded', function () {
    displayMobilesItems(mobiles);
});

// FILTER MOBILES
filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const category = e.currentTarget.dataset.id;
      const mobilesCategory = mobiles.filter(function(mobilesItem) {
        if (mobilesItem.category === category) {
          return mobilesItem;
        }
      });
      if (category === 'all') {
        displayMobilesItems(mobiles);
      } else {
        displayMobilesItems(mobilesCategory);
      }
    });
  });


function displayMobilesItems(mobilesItems) {
    let displayMobile = mobilesItems.map(function (mobile) {

        return `<div class="mobile">
            <a href=${mobile.mobileLink}>
                <div class="mobile-top">
                    <img src=${mobile.img} alt="">
                </div>
                <div class="mobile-mid">
                    <p>${mobile.name}<br>${mobile.model}</p>
                </div>
                <div class="mobile-bottom">
                    <p class="price">Rs. ${mobile.price1},${mobile.price2}</p>
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
                            <td>${mobile.ram}</td>
                        </tr>
                        <tr>
                            <th>Storage:</th>
                            <td>${mobile.storage}</td>
                        </tr>
                        <tr>
                            <th>Camera:</th>
                            <td>${mobile.camera}</td>
                        </tr>
                        <tr>
                            <th>Display:</th>
                            <td>${mobile.display}</td>
                        </tr>
                        <tr>
                            <th>Battery:</th>
                            <td>${mobile.battery}</td>
                        </tr>
                    </tbody>
                </table>

                <div class="mini-specs-bottom">
                    <a href=${mobile.mobileLink}>Full Specifications</a>
                </div>
            </div>
        
    </div>`
    });

    displayMobile = displayMobile.join("");
    allMobiles.innerHTML = displayMobile;
}

// const myUL = document.querySelector('#myUL');



// function displayMobilesListItems(mobilesListItems) {
//     let displayMobileList = mobilesListItems.map(function (mobileList) {

//         return `<li><a href=${mobileList.mobileLink}>${mobileList.name} ${mobileList.model}</a></li>`
//     });

//     displayMobileList = displayMobileList.join("");
//     myUL.innerHTML = displayMobileList;
// }



