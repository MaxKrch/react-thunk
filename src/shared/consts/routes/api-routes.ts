import { OMD } from "@/config";

const API_ROUTES = {
    SEARCH: (query: string, page?: string) => {
        let params = `?apikey=${OMD.API_KEY}&s=${query}`
        if(Number(page) > 1)  params += ``
        return ({
            method: 'GET',
            url: `${OMD.BASE_URL}`
        })
    ),

    FILM_BY_ID: (id: string) =>({
        method: 'GET',
        url: `${OMD.BASE_URL}`
    })
    `${API_CONFIG.OMDB.BASE_URL}?apikey=${API_CONFIG.OMDB.API_KEY}&i=${id}`,
  
  FILM_BY_TITLE: (title: string, year?: string) =>
    `${API_CONFIG.OMDB.BASE_URL}?apikey=${API_CONFIG.OMDB.API_KEY}&t=${encodeURIComponent(title)}${year ? `&y=${year}` : ''}`,

  POSTER: (url: string) =>
    `${API_CONFIG.OMDB.IMG_URL}?apikey=${API_CONFIG.OMDB.API_KEY}&url=${encodeURIComponent(url)}`
} as const;
}

