import AcountToggle from "./AcountToggle";
import Search from "./Search";
import Route from "./RouteSelect";
import Plan from "./Plan";


export default function SideBar() {

    return (
        <div className=" rounded-lg shadow-lg ">
            {/*MAIN SIDEBAR CONTENT*/}
            <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
                <AcountToggle />
                <Search />
                <Route />
            </div>
            {/*SIDEBAR FOOTER*/}
            <Plan />
        </div>
    )
}