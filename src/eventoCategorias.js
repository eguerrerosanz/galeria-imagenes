const contenedorCategorias = document.getElementById('categorias');

contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.closest('a')) {
        console.log('ejecuta');
    }
});