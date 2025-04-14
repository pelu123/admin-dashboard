import { FaCalendar } from "react-icons/fa6"

export default function TopBar() {
    return (
        <div className="border-b mb-4 px-4 mt-3 border-stone-300">
            <div className="flex items-center justify-between p-1">
                <div>
                    <span className="text-sm font-bold block">
                    🚀 Hey Tomás!
                    </span>
                    <span className="text-xs block text-stone-500">
                        Date
                    </span>
                </div>
                <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 cursor-pointer px-3 py-1.5 rounded">
                  <FaCalendar />  
                  <span>Prev 6 months</span>
                </button>               
            </div>
        </div>
    )
}