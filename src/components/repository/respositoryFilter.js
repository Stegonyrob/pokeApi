const uri =import.meta.env.VITE_API_ENDPOINT_POKEMON_TYPE;

export async function getType() {
    try {
        const response = await fetch(uri);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log("ups!")
    }
}

export const pokemonType = await getType();

