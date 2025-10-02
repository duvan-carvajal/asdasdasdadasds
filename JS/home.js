function buscadorfunction(cualquiercosa){
    console.log(cualquiercosa);
}

function home (){
    document.getElementById("root").innerHTML = "home"
    //buscador
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Pokémon...";
    buscador.addEventListener("input", () => {
            buscadorfuncion(buscador.value);
    });

    document.getElementById("root").appendChild(buscador);
    
    //contenedor filtro
    const tipos = [
        "normal", "fighting", "flying", "poison", "ground", "rock", "bug",
        "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice",
        "dragon", "dark", "fairy", "stellar", "unknown"
    ];

    function FiltroConexion(otracosa){
        alert(otracosa)
    }

    const contenedorFiltro = document.createElement("section");
    contenedorFiltro.classList.add("tipos-container"); 

    for (let i = 0; i < tipos.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = tipos[i];
        
        // Agregar el evento click para filtrar por tipo
        btn.addEventListener("click", () => {
            FiltroConexion(tipos[i]); 
        });

        // Agregar el botón al contenedor
        contenedorFiltro.appendChild(btn);
    }

    //contenedor
    contenedorFiltro.classList.add("tipos-container");  // Esto es correcto

    contenedorFiltro.appendChild(btn);
}
document.getElementById("root").appendChild(contenedorFiltro)