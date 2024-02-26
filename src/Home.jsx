import { Link } from "react-router-dom"
import { RiBriefcase2Line, RiAccountBoxLine } from "react-icons/ri";

function Home() {
    return (
        <div className="bg-[url('https://cdn.dribbble.com/userupload/10093676/file/original-232adf446d5619c49c4ffb6247751762.jpg?resize=1920x1080')] bg-cover bg-center min-h-screen w-full h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-4">잇구인구직</h2>
            <ul className="flex gap-1">
                <li className="">
                    <Link to="/job/create" className="text-lg font-semibold block h-40 w-40 flex justify-center items-center drop-shadow rounded-md bg-white/30 backdrop-blur border text-white hover:bg-white hover:text-black transition duration-300 p-4 m-4">
                    <RiAccountBoxLine /> 구인하기!
                    </Link>
                </li>
                <li className="">
                    <Link to="/job/board" className="text-lg font-semibold block h-40 w-40 flex justify-center items-center drop-shadow rounded-md bg-green-500 text-white text-center hover:bg-green-600 transition duration-300 p-4 m-4">
                    <RiBriefcase2Line /> 구직하기!
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Home