"use client"

import Image from "next/image"
import SearchIcon from "@mui/icons-material/Search"
import { useState } from "react"
import { useRouter } from "next/navigation"

const Navbar = () => {
    const [search, setSearch] = useState("")

    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault()

        if (search.trim()) {
            router.push(`/pokemon/${search}`)
        }
    }

    return (
        <div className="bg-white w-full shadow-md sticky top-0 z-50 px-6 py-3">
            <div className="max-w-7xl mx-auto flex items-center space-x-12">
                <Image
                    onClick={() => router.push("/")}
                    src="/images/logo.png"
                    width={100}
                    height={100}
                    className="cursor-pointer"
                    alt="pokemonLogo"
                />

                <form
                    onSubmit={handleSearch}
                    className="flex items-center space-x-4 border border-gray-500 rounded-xl p-2 w-full"
                >
                    <SearchIcon />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border-none outline-none w-full"
                        placeholder="Search through ID or name..."
                    />
                </form>
            </div>
        </div>
    )
}

export default Navbar
