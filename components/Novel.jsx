import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Novel = styled.div`
  font-size: 20px;
  margin: 10px;
  text-align: center;
`

const Link = styled(NavLink)`
  text-decoration: none;
`

export default (({ id, name, title }) => (
  <Novel key={id}>
    <Link to={`/novel-genres/${id}`}>{`${title} by ${name}`}</Link>
  </Novel>
))
