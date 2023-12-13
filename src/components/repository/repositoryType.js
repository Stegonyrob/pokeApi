const uri = import.meta.env.VITE_API_ENDPOINT_POKEMON_TYPE;

export async function getPokemonType() {
  try {
    const response = await fetch(uri);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("something happened!!!");
  }
}

export const pokemonResults = await getPokemonType();


