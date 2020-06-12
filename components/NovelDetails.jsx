import React from 'react'
import styled from 'styled-components'

const Details = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`

export default ({ title, author }) => (
  <Details>{`${title} by ${author}`}</Details>
)
