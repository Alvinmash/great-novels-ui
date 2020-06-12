import React from 'react'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import Title from '../components/Title'

export default () => (
  <Page>
    <Title />
    <NotFound message="Sorry, looks like the page you are looking for does not exist." />
  </Page>
)