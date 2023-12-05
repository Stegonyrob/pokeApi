import Pokemon from '../models/Pokemon.js';
import pokemonResults from '../components/repository/repository.js';

class PokemonService {
  constructor(repository) {
    this.repository = repository;
    this.pokemons = [];
  }

  async index() {
    const pokemonData = await this.repository.getPokemonData();

    pokemonData.forEach((pokemon) => {
      const pokemonAddData = new Pokemon(
        pokemon.name,
        pokemon.sprites.front_default,
        pokemon.types[0].type.name
      );
      this.pokemons.push(pokemonAddData);
    });

    return this.pokemons;
  }
}

export default new PokemonService(pokemonResults);
