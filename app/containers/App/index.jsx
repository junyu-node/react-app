import React, { Component } from 'react';
import SearchGithub from '../../components/SearchGithub/SearchGithub.jsx';
import 'bootstrap/dist/css/bootstrap.css'



const App=({children,history})=>{
  return(
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-lg-7 col-sm-offset-2" style={{marginTop:15}}>
            <SearchGithub history={history}/>
          </div>
        </nav>
        <div className="container">
          {children}
        </div>
      </div>
  )
}
export default App;

