import Image from "next/image"

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="flex flex-col items-center">
            <Image
                src={pokemon?.sprites?.front_default}
                width={200}
                height={200}
                className="object-contain"
                alt="pokemonImage"
            />

            <div className="w-full">
                <h1 className="font-bold capitalize text-xl">{pokemon.name}</h1>

                <div>
                    <h1 className="font-semibold my-2">Abilities</h1>
                    <div className="flex flex-wrap gap-4">
                        {pokemon.abilities.map((ability) => (
                            <p
                                key={ability.ability.name}
                                className="border border-gray-400 rounded-xl px-4 py-2"
                            >
                                {ability.ability.name}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="flex items-center">
                    <h1 className="font-semibold my-2">Type:</h1>

                    {pokemon.types.map((type) => (
                        <p key={type.type.name} className="ml-2 italic">
                            {type.type.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokemonCard
