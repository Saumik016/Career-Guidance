const params = new URLSearchParams(window.location.search);
const categoryKey = params.get("cat");

fetch("assets/data/careers.json")
  .then(res => res.json())
  .then(data => {
    const category = data[categoryKey];
    if (!category) return;

    document.title = `${category.title} Careers`;

    const container = document.getElementById("careerList");
    category.careers.forEach(career => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.innerHTML = `
        <a href="detail.html?career=${career.id}&cat=${categoryKey}">
          <img src="${career.image}" alt="${career.title}" class="career-icon" />
          <span>${career.title}</span>
        </a>
      `;
      container.appendChild(card);
    });
  });
