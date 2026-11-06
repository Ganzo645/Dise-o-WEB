
document.addEventListener('DOMContentLoaded', () => {

   
    const botonCatalogo = document.getElementById('boton-catalogo');
    const seccionCategorias = document.getElementById('categorias');

    if (botonCatalogo && seccionCategorias) {
        botonCatalogo.addEventListener('click', () => {
            seccionCategorias.scrollIntoView({ behavior: 'smooth' });
        });
    }

   
    const categorias = [
        { id: 1, nombre: "Acústicas", img: "img/acustica.png" },
        { id: 2, nombre: "Eléctricas", img: "img/electrica.png" },
        { id: 3, nombre: "Amplificadores", img: "img/amplificador.png" }
    ];

    
    let htmlContent = "";

    
    categorias.forEach(cat => {
        htmlContent += `
            <div class="tarjeta-categoria" onclick="seleccionarCategoria('${cat.nombre}')">
                <img src="${cat.img}" alt="${cat.nombre}">
                <h3>${cat.nombre}</h3>
            </div>
        `;
    });

    
    const contenedor = document.getElementById('contenedor-tarjetas');
    if (contenedor) {
        contenedor.innerHTML = htmlContent;
    }
});


function seleccionarCategoria(nombre) {
    console.log("Categoría seleccionada por el usuario: " + nombre);
    alert("Explorando la sección de: " + nombre);
}