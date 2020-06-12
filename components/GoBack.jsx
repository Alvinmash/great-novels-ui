import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
`

export default () => (
  <Link to="/">&lt;&lt; Go Back</Link>
)
