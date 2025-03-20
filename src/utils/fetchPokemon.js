export const fetchPokemon = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        if (!response.ok) {
            throw new Error("Pokemon not found!")
        }

        const data = await response.json()

        return data
    } catch (error) {
        console.error(error.message)
        return null
    }
}
