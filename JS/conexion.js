var totalPokes = 10
var pokemones = []

async function conexion (){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
    const data = await res.json();

    console.log(data)
}

// Cargar todos los Pokémon al iniciar
async function General() {
  if (pokemones.length === 0) {
    pokemones = await conexion();
  }
  home();
}