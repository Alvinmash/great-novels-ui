import { fetchNovels } from '../actions/novels'

export const filterNovels = (list, term) => list.filter(novel => (
  novel.title.toLowerCase().includes(term.toLowerCase())
))

export const retrieveNovels = async () => {
  const novelList = await fetchNovels()

  return novelList
}
