import React, { useEffect, useState } from 'react'
import Novel from '../components/Novel'
import Page from '../components/Page'
import Search from '../components/Search'
import Title from '../components/Title'

import { filterNovels, retrieveNovels } from '../utils/novels'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [novelList, setNovelList] = useState([])
  const [filterNovelList, setFilterNovelList] = useState([])

  useEffect(() => {
    async function pullData() {
      const returnedList = await retrieveNovels()

      setNovelList(returnedList)
      setFilterNovelList(returnedList)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterNovels(novelList, searchTerm)

    setFilterNovelList(filtered)
  }, [searchTerm])

  return (
    <Page>
      <Title />
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filterNovelList.map(novel => (
          <Novel
            key={novel.id}
            name={`${novel.author.nameFirst} ${novel.author.nameLast}`}
            title={novel.title}
            id={novel.id}
          />
        ))
      }
    </Page>
  )
}