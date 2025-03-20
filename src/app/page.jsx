/* eslint-disable react/jsx-filename-extension */
import Navbar from "@/components/Navbar"
import PokemonGrid from "@/components/PokemonGrid"

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-3">
                <h1 className="font-bold text-yellow-600 text-4xl mt-8">
                    Explore our PokeDex
                </h1>

                <div className="mt-8">
                    <PokemonGrid />
                </div>
            </div>
        </div>
    )
}
