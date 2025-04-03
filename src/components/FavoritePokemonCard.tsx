import { createSignal, Show, type Component } from "solid-js";
import type { FavoritePokemon } from "../interfaces/favorite-pokemons";

interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {
    const [isVisible, setIsVisible] = createSignal(true)
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

    const deleteFavorite = () => {
        const favoritePokemons = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[]
        const newFavorites = favoritePokemons.filter(p => p.id !== pokemon.id)
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        setIsVisible(false)
    }
        

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col items-center w-full">
                <a href={`/pokemons/${pokemon.name}`} class="rounded-2xl flex flex-col items-center p-4 border bg-slate-900 w-full h-full">
                    <img
                        src={imgSrc}
                        alt={pokemon.name}
                        class="w-40 h-40 object-contain"
                        style={`view-transition-name: ${pokemon.name}-image`}
                    />
                    <span class="capitalize mt-2">#{pokemon.id} {pokemon.name}</span>
                </a>

                <button onclick={deleteFavorite} class="mt-2 px-3 py-1 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                    Eliminar
                </button>
            </div>
        </Show>
    )
}