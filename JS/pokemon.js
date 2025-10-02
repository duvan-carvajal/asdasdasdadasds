async function pokemon(id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();

        var root = document.getElementById("root");
        
        let tipoPoke = data.types.map(type => `<span>${type.type.name}</span>`).join(', ');

        root.innerHTML = `
        <section class="c-detalle">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="Imagen de ${data.name}" height="120" width="auto">
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Altura:</strong> ${data.height / 10} m / <strong>Peso:</strong> ${data.weight / 10} kg</p>
            <p><strong>HP:</strong> ${data.stats[0].base_stat}</p>
            <p><strong>Velocidad:</strong> ${data.stats[5].base_stat}</p>
            <p><strong>Ataque:</strong> ${data.stats[1].base_stat} / <strong>Defensa:</strong> ${data.stats[2].base_stat}</p>
            <p><strong>Ataque Especial:</strong> ${data.stats[3].base_stat} / <strong>Defensa Especial:</strong> ${data.stats[4].base_stat}</p>
            <p><strong>Tipos:</strong> ${tipoPoke}</p>
        </section>
        `;
    } catch (error) {
        console.error('Error:', error);
        var root = document.getElementById("root");
        root.innerHTML = `<p>Error al cargar los datos del Pokémon. Intenta nuevamente.</p>`;
    }
}

pokemon(9);