import LoadingPage from "@/pages/loading-page/ui/LoadingPage";
import MainPage from "@/pages/main-page";
import NotFoundPage from "@/pages/not-found-page";
import { APP_ROUTES } from "@/shared/consts/routes/app-routes";
import GlobalError from "@/widgets/error-handling/global-error";
import RouteError from "@/widgets/error-handling/route-error";
import AppLayout from "@/widgets/layout/app-layout/ui/AppLayout";
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <GlobalError />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: APP_ROUTES.FAVORITES.path,
                lazy: async () => ({
                    Component: (await import('@/pages/favorites-page')).default,
                    loading: <LoadingPage />,
                    errorElement: <RouteError />
                }),
            },
            {
                path: APP_ROUTES.SEARCH.path,
                lazy: async () => ({
                    Component: (await import('@/pages/search-page')).default,
                    loading: <LoadingPage />,
                    errorElement: <RouteError />
                }),
            },
            {
                path: APP_ROUTES.FILM.path,
                lazy: async () => ({
                    Component: (await import('@/pages/film-page')).default,
                    loading: <LoadingPage />,
                    errorElement: <RouteError />
                }),
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
]

export default routes