import React from 'react'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarTemplate from './components/NavbarTemplate'; 
import RoutesTemplate from './components/RoutesTemplate'
class App extends React.Component  {
  render(){
    return (
      <div className="App">
        <Router>
          <NavbarTemplate />
          <main>
            <RoutesTemplate/>
          </main>
        </Router>
      </div>
    );
  }
  
}

export default App;
