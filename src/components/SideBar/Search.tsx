import { FaSearch } from "react-icons/fa"

export default function Search() {

    return (
        <>
            <div className="bg-stone-100 ml-1 mr-1 mb-4 p-2 rounded flex items-center px-2 py-1.5 text-sm">
                <FaSearch className="mr-2"/>
                <input type="text" placeholder="Search" className="focus:outline-none"/>
            </div>
        </>
    )
}