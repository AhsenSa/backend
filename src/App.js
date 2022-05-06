import Login from './components/login';
import Signup from './components/signup';
import MapDraw from './components/map';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from "react-router";
import PassworChnage from './components/passwordCh';
import DropZonec from './components/dropZone';
import { useState } from 'react';
import "./App.css";
import SwipeableTemporaryDrawer from './components/sildeDialog';

function App() {
  const [file, setFile] = useState(null);

  return (
    <Router>
      <div className='App' >
        <main className='container'>

          <Switch>
            <Route path='/' exact component={Login}></Route>
            <Route path='/signup' component={Signup}></Route>
            <Route path='/map' component={MapDraw}></Route>
            <Route path='/changepassword' component={PassworChnage}></Route>
            <Route path='/drag' component={DropZonec }></Route>
            <Route path='/silde' component={SwipeableTemporaryDrawer }></Route>
            
          </Switch>
        </main>
      </div>
    </Router>

  );
}

export default App;
