fetch("assets/data/careers.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById("categoryGrid");
    for (let key in data) {
      const category = data[key];
      const card = document.createElement("div");
      card.className = "category-card";
      card.innerHTML = `
        <a href="category.html?cat=${key}">
          <img src="${category.careers[0].image}" alt="${category.title}" class="career-icon" />
          <span>${category.title}</span>
        </a>
      `;
      grid.appendChild(card);
    }
  });
