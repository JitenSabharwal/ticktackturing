import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router 
}   from 'react-router-dom'
// import history from './routes/history'
import Routes from './routes'

const elem = document.getElementById('root')
ReactDOM.render(
  <Router>
      {Routes}  
  </Router>,
  elem,
)
