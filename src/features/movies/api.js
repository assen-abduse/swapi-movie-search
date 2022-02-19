// movie fetching axios
import { movieAxios } from "utils/fetch"

// fetch movies and return the data we are interested in
export const fetchMovies = async () => {
  const { data } = await movieAxios.get("films")
  const results = data.results.map((film) => ({
    id: parseInt(film.url.split("/").filter(Boolean).pop(), 10),
    title: film.title,
    description: film.opening_crawl,
    releaseDate: film.release_date,
    director: film.director,
  }))
  return results
}

// fetch details of a film with id movieId
export const fetchMovie = async (movieId) => {
  const { data } = await movieAxios.get(`films/${movieId}`)

  const characters = data.characters.map(async (url) => {
    const characterId = parseInt(url.split("/").filter(Boolean).pop(), 10)
    const { data: characterData } = await movieAxios.get(`people/${characterId}`)
    return {
      name: characterData.name,
      height: characterData.height,
      gender: characterData.gender,
    }
  })
  const charactersList = await Promise.all(characters)
  return {
    characters: charactersList,
    title: data.title,
    releaseDate: data.release_date,
    description: data.opening_crawl,
    director: data.director,
  }
}
