const container = document.getElementById("trends-container");

async function loadTrends() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    container.innerHTML = "";

    data.slice(0, 8).forEach(item => {
      const card = document.createElement("div");
      card.className = "trend-card";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>$${item.price}</p>
        <button onclick="window.open('${item.image}', '_blank')">
          Ver referencia
        </button>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    container.innerHTML = "Error cargando tendencias";
    console.error(error);
  }
}

loadTrends();
