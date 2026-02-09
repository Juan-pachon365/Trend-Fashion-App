const trends = [
{
title: "Oversize Street Outfit",
category: "streetwear",
desc: "Ropa oversize con zapatillas chunky y accesorios urbanos.",
img: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
link: "https://www.pinterest.com/search/pins/?q=streetwear%20oversize"
},
{
title: "Gym Minimal Fit",
category: "gym",
desc: "Conjuntos monocromáticos fitness minimalistas.",
img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
link: "https://www.pinterest.com/search/pins/?q=gym%20outfit%20men"
},
{
title: "Formal Modern Suit",
category: "formal",
desc: "Trajes modernos slim fit con colores claros.",
img: "https://images.unsplash.com/photo-1593032465171-8e9d5cbb6d03",
link: "https://www.pinterest.com/search/pins/?q=modern%20formal%20men"
},
{
title: "Street Techwear",
category: "streetwear",
desc: "Estilo futurista urbano con telas técnicas.",
img: "https://images.unsplash.com/photo-1544441893-675973e31985",
link: "https://www.pinterest.com/search/pins/?q=techwear"
},
{
title: "Athleisure Pro",
category: "gym",
desc: "Ropa deportiva que también sirve para salir.",
img: "https://images.unsplash.com/photo-1517964603305-11c0f6f66012",
link: "https://www.pinterest.com/search/pins/?q=athleisure"
}
];


const container = document.getElementById("trendContainer");


function renderTrends(list) {
container.innerHTML = "";
list.forEach(trend => {
container.innerHTML += `
<div class="card" onclick='openModal(${JSON.stringify(trend)})'>
<img src="${trend.img}" />
<div class="card-content">
<h3>${trend.title}</h3>
<p>${trend.desc}</p>
</div>
</div>
`;
});
}


function filterCategory(category, btn) {
document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
btn.classList.add("active");


if (category === "all") renderTrends(trends);
else renderTrends(trends.filter(t => t.category === category));
}


function openModal(trend) {
document.getElementById("modal").style.display = "flex";
document.getElementById("modalImg").src = trend.img;
document.getElementById("modalTitle").innerText = trend.title;
document.getElementById("modalDesc").innerText = trend.desc;
document.getElementById("modalLink").href = trend.link;
}


function closeModal() {
document.getElementById("modal").style.display = "none";
}


renderTrends(trends);