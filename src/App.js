import React from 'react'
import {Switch, Route, Redirect, useParams} from 'react-router-dom'
import HomePage from './components/homePage'
import UsersListPage from './components/usersListPage'
import UserPage from './components/userPage'
import EditUserPage from './components/editUserPage'

function App() {

  return (
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/users" exact component={UsersListPage}/>
      <Route path="/users/:userId?" exact component={UserPage}/>
      <Route path="/users/:userId?/edit" component={EditUserPage}/>
      <Redirect to="/"/>
    </Switch>
  )
}

export default App
