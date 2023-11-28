const uri = import.meta.env.VITE_API_ENDPOINT_POKEMON;

export async function getPokemon() {
  try {
    const response = await fetch(uri);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("something happened!!!");
  }
}

export const pokemonResults = await getPokemon();
