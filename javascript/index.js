const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "/.images/item1.jpeg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 2,
        title: "dinner double",
        category: "lunch",
        price: 13.99,
        img: "/.images/item2.jpeg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 5.99,
        img: "/.images/item3.jpeg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 9.99,
        img: "/.images/item4.jpeg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 17.99,
        img: "/.images/item5.jpeg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 16.99,
        img: "/.images/item6.jpeg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "/.images/item7.jpeg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 13.99,
        img: "/.images/item8.jpeg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 21.99,
        img: "/.images/item9.jpeg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 23.99,
        img: "/.images/item10.jpeg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function(){

});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
    });
}