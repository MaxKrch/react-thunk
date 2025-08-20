import Header from "@/widgets/header/ui/Header"
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return(
        <div>
            <header>
                <Header />
            </header>
            <main>
                Тут будет Аутлет
                {/* <Outlet /> */}
            </main>
        </div>
    )
}

export default AppLayout;