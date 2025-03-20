export const fetchAllPokemon = async (currentPage, itemsPerPage) => {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${
                (currentPage - 1) * itemsPerPage
            }`,
        )

        if (!response.ok) {
            throw new Error("Pokemon not found!")
        }

        const data = await response.json()

        const pokemonDetails = await Promise.all(
            data.results.map(async (pokemon) => {
                const result = await fetch(pokemon.url)
                return result.json()
            }),
        )

        return pokemonDetails
    } catch (error) {
        console.error(error.message)
    }
}
