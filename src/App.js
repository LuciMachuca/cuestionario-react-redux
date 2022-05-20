import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from './component/inicio';
import Home from './component/home';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      
      
      <Route exact path='/' component= {Inicio} />
      <Route path='/home' component= {Home} />
      
      {/* <Route exact path='/videogame' component= {NewGame} />
      <Route exact path='/videogame/:id' component= {Detail} /> */}
      
      
      </Switch>

      
    </div>
    </BrowserRouter>
  );
}

export default App;