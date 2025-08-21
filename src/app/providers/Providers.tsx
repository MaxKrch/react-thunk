import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "../router/routes"
import GlobalErrorBoundory from "./error-boundory/GlobalErrorBoundory"
import { Provider } from "react-redux"
import store from "../store"

const router = createBrowserRouter(routes, {
    basename: `/react-thunk`
})

const Providers = () => {
    return(
        <GlobalErrorBoundory>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </GlobalErrorBoundory>
    )
}



export default Providers;