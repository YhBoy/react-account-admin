import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Empty from './Views/Empty' 
import Home from './Views/Home' 
import Login from './Views/Login' 
// import App from './App';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

ReactDOM.render(
  <Router>
      <Switch>
          <Route path="/" exact render={()=>{
              return <Redirect to="/home" />
          }}></Route>
          <Route path="/home" exact render={(props)=>{
                  return (<Home {...props} />)
          }}>
          </Route>
          <Route path="/login" component={ Login }></Route>
          <Route component={ Empty }></Route>
      </Switch>  
  </Router>,
  document.getElementById('root')
);


