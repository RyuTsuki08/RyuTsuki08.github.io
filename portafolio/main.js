const grid = new Muuri('.grid', {
    layout: {
        rouding: false
    }
});


    //Listeners de enlaces por categoria

window.addEventListener("load", () => {
    const enlaces = document.querySelectorAll("#categorias a");
    enlaces.forEach( (elemento) => {
        elemento.addEventListener("click", (e) => {

            e.preventDefault();

            enlaces.forEach((enlace) => enlace.classList.remove("active"));
            e.target.classList.add("active");

            const categoria = e.target.innerHTML;
            categoria === 'Todos' ? grid.filter('[data-categoria]') : 
             grid.filter(`[data-categoria="${categoria}"]`);
        });
    });

    //Listeners para filtrar por barra de busqueda

    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
    });
});
 


