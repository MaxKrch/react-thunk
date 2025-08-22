export const FILM_TYPE_OPTIONS = {
    ANY: { value: "any", label: "Любой" },
    MOVIE:  { value: "movie", label: "Фильм"},
    SERIES: { value: "series", label: "Сериал"},
    EPISODE: { value: "episode", label: "Эпизод"},
} as const;
export const FILM_TYPE_VALUES = Object.values(FILM_TYPE_OPTIONS).map(item => item.value)
export type FilmType = typeof FILM_TYPE_VALUES[keyof typeof FILM_TYPE_VALUES];