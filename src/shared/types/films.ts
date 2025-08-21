export type FilmTypes = "movie" | "series" | "episode"

export type FilmShort =  {
    Title: string,
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string,
}

export type Film = {
    Title: string,
    Year: number,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: [
        {
            Source: string,
            Value: string,
        },
        {
            Source: string,
            Value: string,
        },
        {
            Source: string,
            Value: string,
        }
    ],
    Metascore: number,
    imdbRating: number,
    imdbVotes: string,
    imdbID: string,
    Type: FilmTypes,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: boolean
}