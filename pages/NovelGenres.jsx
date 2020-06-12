import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import Genres from '../components/Genres'
import GoBack from '../components/GoBack'
import NotFound from '../components/NotFound'
import NovelDetails from '../components/NovelDetails'
import Title from '../components/Title'
import { retrieveNovelWithAuthorAndGenres } from '../utils/genres'

export default ({ location }) => {
  const [novelId, setNovelId] = useState(0)
  const [novel, setnovel] = useState({})
  const [genreList, setgenreList] = useState([])

  const UlName = styled.div`
    font-size: 24px;
    text-align: center;
    margin-left: -20px;
  `

  useEffect(() => {
    async function pullData() {
      const { id, details, genres } = await retrieveNovelWithAuthorAndGenres(location)

      setNovelId(id)
      setnovel(details)
      setgenreList(genres)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      <GoBack />
      {
        novelId
          ? (
            <>
              <NovelDetails title={novel.title} author={novel.author} />
              <UlName>Genres:</UlName>
              <ul>
                {
                  genreList.map(genre => (
                    <Genres key={genre.id} id={genre.id} name={genre.name} />
                  ))
                }
              </ul>
            </>
          )
          : <NotFound message="Sorry, it apears the novel you are looking for does not exist." />
      }
    </Page>
  )
}