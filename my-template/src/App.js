import React from 'react';
import NavbarTemplate from './components/NavbarTemplate'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component  {
  render(){
    return (
      <div className="App">
        <NavbarTemplate />
      </div>
    );
  }
  
}

export default App;
