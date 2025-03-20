"use client"

import { useParams } from "next/navigation"
import Navbar from "@/components/Navbar"
import { fetchPokemon } from "@/utils/fetchPokemon"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

const PokemonDetails = () => {
    const { id } = useParams()

    const [data, setData] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData = await fetchPokemon(id)
            console.log(pokemonData)
            if (pokemonData === null) {
                setError(true)
                return
            }
            setData(pokemonData)
        }

        fetchData()
    }, [])

    if (error) {
        return (
            <div>
                <Navbar />

                <div className="max-w-7xl mt-10 mx-auto flex flex-col items-center">
                    <Image
                        src="/images/notFound.png"
                        width={400}
                        height={400}
                        alt="notFound"
                    />

                    <h1 className="mt-8 text-2xl text-red-500 font-bold">
                        The Pokemon you were looking for could not be found!
                    </h1>
                    <p className="mt-4 text-xl text-red-500 font-semibold">
                        Change the search term and try again.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-3 mt-10">
                <Link
                    className="flex items-center space-x-2 cursor-pointer text-lg"
                    href="/"
                >
                    <ChevronLeftIcon />
                    <h1>Back</h1>
                </Link>

                <div className="mt-4">
                    <h1 className="capitalize font-bold text-4xl">
                        {data?.name}
                    </h1>

                    <div className="flex flex-col items-start md:flex-row">
                        <Image
                            src={data?.sprites?.front_default}
                            width={100}
                            height={100}
                            className="md:w-1/2 w-full mx-auto"
                            alt="pokemonImage"
                        />

                        <div>
                            <h1 className="text-3xl font-bold mb-6">Types:</h1>
                            <div className="gap-4 flex flex-wrap">
                                {data?.types.map((type) => (
                                    <p className="text-xl bg-gray-400 px-4 py-2 rounded-md">
                                        {type.type.name}
                                    </p>
                                ))}
                            </div>

                            <h1 className="mt-2 text-lg">
                                Base experience: {data?.base_experience}
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-start justify-between flex-col md:flex-row space-y-8 md:space-y-0">
                        <div className="mt-10 md:mt-0">
                            <h1 className="font-bold text-xl">Abilities:</h1>
                            <ul className="list-decimal ml-5 mt-2 text-lg">
                                {data?.abilities.map((ability) => (
                                    <li key={ability.ability.name}>
                                        {ability.ability.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h1 className="font-bold text-xl">Attributes</h1>
                            <ul className="list-disc ml-5 mt-2 text-lg">
                                <li>Height: {data?.height}</li>
                                <li>Weight: {data?.weight}</li>
                                <li>Species: {data?.species.name}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="my-8">
                        <h1 className="font-bold text-xl">Stats</h1>
                        {data?.stats.map((stat) => (
                            <div key={stat.stat.name}>
                                <div className="flex justify-between mt-4">
                                    <span className="capitalize italic">
                                        {stat.stat.name}
                                    </span>
                                    <span className="italic">
                                        {stat.base_stat}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-700 h-3">
                                    <div
                                        className="bg-yellow-500 h-3"
                                        style={{
                                            width: `${
                                                (stat.base_stat / 255) * 100
                                            }%`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails
