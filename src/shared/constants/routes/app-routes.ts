export const APP_ROUTES = {
    MAIN: {
        path: "/",
        alias: "main",
        title: "Главная",
    },
    FAVORITES: {
        path: "/favorites",
        alias: "favorites",
        title: "Избранные фильмы",
    },
    FILM: {
        path: "/film/:id",
        alias: "film",
        title: "О фильме",
    },
    SEARCH: {
        path: "/search",
        alias: "search",
        title: "Найденные фильмы",
    },
} as const

export type AppRoute = keyof typeof APP_ROUTES
export type AppRoutePath = typeof APP_ROUTES[keyof typeof APP_ROUTES]['path']