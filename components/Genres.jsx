import React from 'react'
import styled from 'styled-components'

const Genres = styled.li`
  font-size: 20px;
  list-style-position: inside;
  padding: 4px 0;
  text-align: center;
`

export default ({ id, name }) => (
  <Genres key={id}>{name}</Genres>
)
