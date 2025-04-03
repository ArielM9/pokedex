import { createSignal, For } from "solid-js"
import type { FavoritePokemon } from "../interfaces/favorite-pokemons"
import PokemonCard from "./PokemonCard.astro"
import { FavoritePokemonCard } from "./FavoritePokemonCard"

const getLocalStoragePokemon = (): FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(localStorage.getItem('favorites') ?? '[]')
    
    return favoritePokemons
}


export const FavoritePokemons = () => {

    const [favoritePokemons, setFavoritePokemons] = createSignal(getLocalStoragePokemon())

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
            <For each={favoritePokemons()}>
                {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
            </For>
        </div>

    )
}