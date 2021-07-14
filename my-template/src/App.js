import React from 'react'; 
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarTemplate from './components/NavbarTemplate'; 
import RoutesTemplate from './components/RoutesTemplate';
import { GeneralContext } from './context/GeneralContext';
class App extends React.Component  {
  static contextType = GeneralContext;
  constructor(props){
    super(props);
    this.state = {
      name: "Guest",
      surname:"Guesty"
    }
  }

  componentDidMount(){
    let value = this.context
    console.log("appjs")
    console.log(value)
    console.log("==============")
  }
  render(){
    return (
      <GeneralContext.Provider value={this.state}>
        <div className="App">
          <NavbarTemplate />
          <main>
            <Router>
              <RoutesTemplate/>
            </Router>
          </main>
        </div>
      </GeneralContext.Provider>
    );
  }
  
}

export default App;
