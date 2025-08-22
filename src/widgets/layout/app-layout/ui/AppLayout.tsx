import Header from "@/widgets/header/ui/Header"
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return(
        <div className="max-w-[1280px] min-w-[320px] w-[90%]  min-h-[100vh] m-auto bg-gray-100 flex flex-col gap-4">
            <Header />
            <Outlet />
        </div>
    )
}
export default AppLayout;