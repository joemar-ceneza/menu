const menu = [
    {
        id: 1,
        title: "pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        id: 2,
        title: "dinner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 5.99,
        img: "./images/item-3.jpg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 9.99,
        img: "./images/item-4.jpg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 17.99,
        img: "./images/item-5.jpg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 16.99,
        img: "./images/item-6.jpg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 13.99,
        img: "./images/item-8.jpg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 21.99,
        img: "./images/item-9.jpg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 23.99,
        img: "./images/item-10.jpg",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayMenuButtons();
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
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item){
            if(!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
                ${category}
            </button>`
    })
    .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if(menuItem.category === category) {
                    return menuItem;
                }
            });
            if(category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}