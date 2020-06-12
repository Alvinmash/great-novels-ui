/* eslint-disable import/prefer-default-export */
import { fetchGenresForNovels } from '../actions/genres'

export const getNovelIdFromUrl = location => (location && location.pathname
  ? location.pathname.split('/novel-genres/').pop()
  : 0
)

export const retrieveNovelWithAuthorAndGenres = async (location) => {
  try {
    const novelId = getNovelIdFromUrl(location)
    if (!Number(novelId)) return { id: 0, details: {}, genres: [] }
    const { id, title, author, genres } = await fetchGenresForNovels(novelId)

    if (!id || !title || !author || !genres) return { id: 0, details: {}, genres: [] }

    return { id, genres, details: { title, author: `${author.nameFirst} ${author.nameLast}` } }
  } catch (error) {
    return { id: 0, details: {}, genres: [] }
  }
}
