import { IconType } from "react-icons"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { FaDollarSign, FaHome, FaLink, FaUser, FaPaperclip } from "react-icons/fa"


export default function RouteSelect() {
    const location = useLocation()

    return (
        <div className="space-y-1">
            <Link to="/">
            <Route Icon={FaHome} selected={location.pathname === "/"} title="Dashboard" />
            </Link>
            <Link to="/users">
            <Route Icon={FaUser} selected={location.pathname === "/users"} title="Team" />
            </Link>
            <Link to="/invoices">
            <Route Icon={FaPaperclip} selected={location.pathname === "/invoices"} title="Invoices"/>
            </Link>
            <Link to="/integrations">
            <Route Icon={FaLink} selected={location.pathname === "/integrations"} title="Integrations"/>
            </Link>
            <Link to="/finance">
            <Route Icon={FaDollarSign} selected={location.pathname === "/finance"} title="Finance"/>
            </Link>
        </div>
    )
}

const Route = ({
    Icon,
    selected,
    title,
    }: {
        Icon: IconType,
        selected: boolean,
        title: string,
    }) => {
        return (
            <div 
            className={`flex items-center justify-start gap-2 w-full rounded mt-2 px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
                selected
                  ? "bg-white text-stone-950 shadow-md"
                  : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
              }`}>
                <Icon className={selected ? "text-violet-500" : ""} />
                <span>{title}</span>
            </div>
        )
    }