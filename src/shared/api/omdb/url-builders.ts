import { OMD } from "@/config";
import type { FilmShort } from "@/shared/types/films";

const API_KEY_PARAMS = `?apikey=${OMD.API_KEY}`;
type PLOT_REQUEST = 'short' | 'full' 

export const API_ROUTES = {
    SEARCH_FILMS: (query: string, page?: number, year?: FilmShort['Year']) => {
        let params = `${API_KEY_PARAMS}&s=${query}`;
        if(page && page > 1) params += `&page=${page}`;
        if(year) params += `&y=${year}`;
        
        return ({
            method: 'GET',
            url: `${OMD.BASE_URL}${params}`
        })
    },
    GET_FILM_BY_ID: (filmId: FilmShort['imdbID'], plot: PLOT_REQUEST = 'short', year?: FilmShort['Year']) => {
        let params = `${API_KEY_PARAMS}&i=${filmId}&plot=${plot}`;
        if(year) params += `&y=${year}`;

        return ({
            method: 'GET',
            url: `${OMD.BASE_URL}${params}`
        })
    },
    GET_FILM_BY_TITLE: (title: FilmShort['Title'], year?: FilmShort['Year']) => {
        let params = `${API_KEY_PARAMS}&t=${title}`;
        if(year) params += `&y=${year}`;

        return ({
            method: 'GET',
            url: `${OMD.BASE_URL}${params}`
        })
    },
    GET_POSTER: (filmId: FilmShort['imdbID']) => ({
        method: 'GET',
        url: `${OMD.IMG_URL}${API_KEY_PARAMS}&i=${filmId}`
    })
}

