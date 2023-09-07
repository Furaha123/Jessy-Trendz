const menu = [
  {
    id: 1,
    title: "Arsenal Home kit",
    category: "Arsenal",
    price: 50.0,
    img: "/images/arsenalhomekit.png",
    desc: "Arsenal FC, founded in 1886, is a London-based football club known for its red and white colors and historic achievements.",
  },
  {
    id: 2,
    title: "Arsenal Away kit",
    category: "Arsenal",
    price: 50.0,
    img: "/images/arsenalawaykit.png",
    desc: "Arsenal FC, founded in 1886, is a London-based football club known for its red and white colors and historic achievements.",
  },
  {
    id: 3,
    title: "Arsenal Third kit",
    category: "Arsenal",
    price: 50.0,
    img: "/images/arsenalthirdkit.png",
    desc: "Arsenal FC, founded in 1886, is a London-based football club known for its red and white colors and historic achievements.",
  },
  {
    id: 4,
    title: "Fc Bayern Munich Home kit ",
    category: "Bayern",
    price: 50.0,
    img: "/images/bayernhomekit.png",
    desc: "Bayern Munich, commonly known as Bayern, is a top-tier German football club based in Munich. Known for its dominance in Germany.",
  },
  {
    id: 5,
    title: "Fc Bayern Munich Away kit",
    category: "Bayern",
    price: 50.0,
    img: "/images/bayernawaykit (1).png",
    desc: "Bayern Munich, commonly known as Bayern, is a top-tier German football club based in Munich. Known for its dominance in Germany.",
  },
  {
    id: 6,
    title: "Fc Bayern Munich Third kit",
    category: "Bayern",
    price: 50.0,
    img: "/images/bayernthirdkit.png",
    desc: "Bayern Munich, commonly known as Bayern, is a top-tier German football club based in Munich. Known for its dominance in Germany.",
  },
  {
    id: 7,
    title: "Paris Saint-Germain Home kit",
    category: "PSG",
    price: 50.0,
    img: "/images/parishomekit.png",
    desc: `Paris Saint-Germain Football Club (PSG) is a top-tier professional football club based in Paris, France, known for its success and star-studded roster. `,
  },
  {
    id: 7,
    title: "Paris Saint-Germain Away kit",
    category: "PSG",
    price: 50.0,
    img: "/images/parisawaykit.png",
    desc: `Paris Saint-Germain Football Club (PSG) is a top-tier professional football club based in Paris, France, known for its success and star-studded roster. `,
  },
  {
    id: 7,
    title: "Paris Saint-Germain Third kit",
    category: "PSG",
    price: 50.0,
    img: "/images/paristhirdkit.png",
    desc: `Paris Saint-Germain Football Club (PSG) is a top-tier professional football club based in Paris, France, known for its success and star-studded roster. `,
  },
];

const sectionCenter = document.querySelector(".section-center");

const filterBtn = document.querySelectorAll(".filter-btn");
//loading items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});
//filtering items
// ...

filterBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    if (category === "all") {
      // If "All" button is clicked, display all items
      displayMenuItems(menu);
    } else {
      // Filter items by category
      const menuCategory = menu.filter(function (menuItem) {
        return menuItem.category === category;
      });
      displayMenuItems(menuCategory);
    }
  });
});

// ...

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
          <article class="menu-item">
            <img
              src="${item.img}"
              class="photo"
              alt="menu-item"
            />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>
        `;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
