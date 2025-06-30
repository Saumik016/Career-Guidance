function handleSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const categoryGrid = document.getElementById("categoryGrid");

  // Store all category data in an array
  const categories = [
    { name: "Engineering", key: "engineering" },
    { name: "Medical", key: "medical" },
    { name: "Commerce", key: "commerce" },
    { name: "Arts & Humanities", key: "arts" },
    { name: "Design & Creativity", key: "design" },
    { name: "IT & Software", key: "it" }
  ];

  // Filter based on input
  const filtered = categories.filter(cat =>
    cat.name.toLowerCase().includes(input)
  );

  // Clear grid before rendering results
  categoryGrid.innerHTML = "";

  if (filtered.length === 0) {
    categoryGrid.innerHTML = `<p style="padding: 1rem;">No categories found.</p>`;
    return;
  }

  // Re-render filtered categories
  filtered.forEach(cat => {
    const card = document.createElement("a");
    card.className = "category-card";
    card.href = `category.html?cat=${cat.key}`;
    card.textContent = cat.name;
    categoryGrid.appendChild(card);
  });
}
