
import { APP_ROUTES } from "@/shared/constants/routes/app-routes";
import { NavLink } from "react-router-dom";

const AppNavigation = () => {
    const classes = `
        hover:bg-blue-400
        border border-gray-300 
        flex justify-center items-center 
        h-[90%] rounded px-3 py-1
        text-center uppercase font-semibold hover:text-white`
    const activeClasses = `${classes} bg-blue-600 text-white`
    const passiveClasses = `${classes} bg-white`

    return(
        <nav className="flex gap-3">
            <NavLink
                to={APP_ROUTES.MAIN.path}
                className={({ isActive }) =>
                    isActive ? activeClasses : passiveClasses
                }
            >
                {APP_ROUTES.MAIN.title}
            </NavLink>
            <NavLink
                to={APP_ROUTES.FAVORITES.path}
                className={({ isActive }) =>
                    isActive ? activeClasses : passiveClasses
                }
            >
                {APP_ROUTES.FAVORITES.title}
            </NavLink>
        </nav>
    )
}

export default AppNavigation;