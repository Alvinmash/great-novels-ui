import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Novels from './pages/Novels'
import NovelGenres from './pages/NovelGenres'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/novel-genres" component={NovelGenres} />
      <Route exact path="/" component={Novels} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
