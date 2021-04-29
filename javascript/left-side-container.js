const rankings = [
    {
        id: 1,
        title: "COMING SOON",
        no1: "Xiaomi Redmi Note 8 Pro",
        no2: "Sony Xperia 1 II",
        no3: "Samsung Galaxy Note10+",
        no4: "Realme X2 Pro",
        no5: "Samsung Galaxy S20 Ultra 5G",
        no6: "Asus ROG Phone II ZS660KL",
        no7: "OnePlus 8 Pro",
        no8: "Xiaomi Mi 10 Pro 5G",
        no9: "Samsung Galaxy A51",
        no10: "Apple iPhone 11 Pro Max",
    },
    {
        id: 2,
        title: "TOP 10 BRANDS",
        no1: "Xiaomi Redmi Note 8 Pro",
        no2: "Sony Xperia 1 II",
        no3: "Samsung Galaxy Note10+",
        no4: "Realme X2 Pro",
        no5: "Samsung Galaxy S20 Ultra 5G",
        no6: "Asus ROG Phone II ZS660KL",
        no7: "OnePlus 8 Pro",
        no8: "Xiaomi Mi 10 Pro 5G",
        no9: "Samsung Galaxy A51",
        no10: "Apple iPhone 11 Pro Max",
    },
    {
        id: 3,
        title: "TOP 10 MOBILES ON FACEBOOK",
        no1: "Xiaomi Redmi Note 8 Pro",
        no2: "Sony Xperia 1 II",
        no3: "Samsung Galaxy Note10+",
        no4: "Realme X2 Pro",
        no5: "Samsung Galaxy S20 Ultra 5G",
        no6: "Asus ROG Phone II ZS660KL",
        no7: "OnePlus 8 Pro",
        no8: "Xiaomi Mi 10 Pro 5G",
        no9: "Samsung Galaxy A51",
        no10: "Apple iPhone 11 Pro Max",
    },
    {
        id: 4,
        title: "TOP 10 MOBILES ON INSTAGRAM",
        no1: "Xiaomi Redmi Note 8 Pro",
        no2: "Sony Xperia 1 II",
        no3: "Samsung Galaxy Note10+",
        no4: "Realme X2 Pro",
        no5: "Samsung Galaxy S20 Ultra 5G",
        no6: "Asus ROG Phone II ZS660KL",
        no7: "OnePlus 8 Pro",
        no8: "Xiaomi Mi 10 Pro 5G",
        no9: "Samsung Galaxy A51",
        no10: "Apple iPhone 11 Pro Max",
    },
]

const ratingsContainer = document.querySelector('.ratings-container');

window.addEventListener('DOMContentLoaded', function () {
    displayRankingItems(rankings);
  });

function displayRankingItems(rankingItems) {
    let displayRanking = rankingItems.map(function (item) {

        return `<div class="rankings">
        <div class="ranking-title">
            ${item.title}
        </div>
        <table>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td><a href="#">${item.no1}</a></td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td><a href="#">${item.no2}</a></td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td><a href="#">${item.no3}</a></td>
                </tr>
                <tr>
                    <td>4.</td>
                    <td><a href="#">${item.no4}</a></td>
                </tr>
                <tr>
                    <td>5.</td>
                    <td><a href="#">${item.no5}</a></td>
                </tr>
                <tr>
                    <td>6.</td>
                    <td><a href="#">${item.no6}</a></td>
                </tr>
                <tr>
                    <td>7.</td>
                    <td><a href="#">${item.no7}</a></td>
                </tr>
                <tr>
                    <td>8.</td>
                    <td><a href="#">${item.no8}</a></td>
                </tr>
                <tr>
                    <td>9.</td>
                    <td><a href="#">${item.no9}</a></td>
                </tr>
                <tr>
                    <td>10.</td>
                    <td><a href="#">${item.no10}</a></td>
                </tr>
            </tbody>
        </table>
    </div>`
    });
    displayRanking = displayRanking.join("");
    ratingsContainer.innerHTML = displayRanking;
}