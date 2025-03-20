"use client"

import { useState, useEffect } from "react"
import { fetchAllPokemon } from "@/utils/fetchAllPokemon"
import PokemonCard from "./PokemonCard"
import Link from "next/link"

const PokemonGrid = () => {
    const [data, setData] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [sortBy, setSortBy] = useState("name")

    const totalPages = 10

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData = await fetchAllPokemon(currentPage, 32)

            const filteredData = pokemonData.sort((a, b) => {
                if (sortBy === "name") return a.name.localeCompare(b.name)
                return b.base_experience - a.base_experience
            })

            setData(() => {
                return filteredData
            })
            setLoading(false)
        }

        fetchData()
    }, [currentPage, sortBy])

    if (!data || loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500" />
            </div>
        )
    }

    return (
        <div>
            <div className="mb-8 flex text-xl items-center">
                <h1 className="font-bold text-xl">Sort by:</h1>
                <div className="space-x-3 flex ml-4 items-center">
                    <option
                        className={`cursor-pointer ${
                            sortBy === "name" &&
                            "text-white bg-gray-400 px-4 py-2 rounded-xl"
                        }`}
                        onClick={() => setSortBy("name")}
                    >
                        Name
                    </option>
                    <option
                        className={`cursor-pointer ${
                            sortBy === "base_experience" &&
                            "text-white bg-gray-400 px-4 py-2 rounded-xl"
                        }`}
                        onClick={() => setSortBy("base_experience")}
                    >
                        Base experience
                    </option>
                </div>
            </div>

            <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 shadow-md rounded-xl">
                {data?.map((pokemon) => (
                    <Link
                        href={`/pokemon/${pokemon.name}`}
                        key={pokemon.name}
                        className="bg-white border border-gray-300 shadow-md cursor-pointer hover:scale-105 transition duration-200 rounded-md p-4"
                    >
                        <PokemonCard pokemon={pokemon} />
                    </Link>
                ))}
            </div>

            <div className="my-6 flex justify-center space-x-2">
                <button
                    type="button"
                    onClick={() => {
                        setLoading(true)
                        setCurrentPage(currentPage - 1)
                    }}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-black bg-yellow-500 rounded disabled:bg-gray-700 disabled:text-gray-500"
                >
                    Previous
                </button>
                <span className="px-4 py-2 text-black">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    type="button"
                    onClick={() => {
                        setLoading(true)
                        setCurrentPage(currentPage + 1)
                    }}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-yellow-500 text-black rounded disabled:bg-gray-700 disabled:text-gray-500"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default PokemonGrid
