// 🔹 Arreglo inicial
const personajes = [
  { id: 1, nombre: "A-Bomb", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" },
  { id: 2, nombre: "Abe Sapien", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
  { id: 3, nombre: "Abin Sur", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" },
  { id: 4, nombre: "Abomination", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" },
  { id: 5, nombre: "Abraxas", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" }
];

let lista = [...personajes];

//  Renderizado dinámico
function renderizar(listaPersonajes) {
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = "";

  listaPersonajes.forEach(({ id, nombre, imagen }) => {
    const card = `
      <div class="col-md-4 mb-3">
        <div class="card h-100">
          <img src="${imagen}" class="card-img-top" alt="${nombre}">
          <div class="card-body text-center">
            <h5 class="card-title">${nombre}</h5>
          </div>
        </div>
      </div>
    `;
    galeria.innerHTML += card;
  });
}

// Render inicial
renderizar(lista);

//  Filtro por nombre
document.getElementById("btnFiltrar").addEventListener("click", () => {
  const filtro = document.getElementById("filtroNombre").value.toLowerCase();
  const filtrados = lista.filter(p => p.nombre.toLowerCase().includes(filtro));
  renderizar(filtrados);
});
