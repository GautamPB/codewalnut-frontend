import Navbar from "@/components/Navbar"

const Loading = () => {
    return (
        <div>
            <Navbar />

            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500" />
            </div>
        </div>
    )
}

export default Loading
