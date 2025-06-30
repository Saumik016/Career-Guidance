const urlParams = new URLSearchParams(window.location.search);

const category = urlParams.get("cat");

fetch("assets/data/careers.json")
  .then(res => res.json())
  .then(data => {
    const categoryData = data[category]; // e.g., data["engineering"]
    if (!categoryData) {
      console.error("Category not found:", category);
      return;
    }

    const careers = categoryData.careers;
    const career = careers.find(c => c.id === careerId); // ✅ Make sure careers is an array

    if (!career) {
      console.error("Career not found:", careerId);
      return;
    }

    // Now render career detail
    document.getElementById("careerDetail").innerHTML = `
      <img src="${career.image}" alt="${career.title}" style="max-width: 150px; margin-bottom: 1rem;" />
      <h3>${career.title}</h3>
      <p>${career.description}</p>
      <ul>
        <li><strong>Skills:</strong> ${career.skills.join(", ")}</li>
        <li><strong>Education:</strong> ${career.education}</li>
        <li><strong>Salary:</strong> ${career.salary}</li>
        <li><strong>Growth:</strong> ${career.growth}</li>
      </ul>
    `;
  })
  .catch(err => console.error("Failed to load data:", err));
