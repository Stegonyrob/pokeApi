import pokemonResults from "../components/repository/repository.js";

//// reocger los datos que quiero obtener de cada enlace dentro de la pokeapi.
///
///
///
/////





function PokemonService {
  pokemons = [];

  constructor(repository) {
    this.repository = repository;
  }

  async index() {
    const pokemons = await this.repository.getPokemonData();

    pokemons.forEach((pokemon) => {
      const pokemonAddData = new Pokemon(
        pokemon.name,
        pokemon.image,
        pokemon.type
      );
      this.pokemons.push(pokemonAddData);
    });

    return this.pokemons;
  }
}