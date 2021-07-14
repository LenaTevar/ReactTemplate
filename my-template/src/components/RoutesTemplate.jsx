import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About'
import FormTeamplate from '../views/FormTemplate'
export const RoutesTemplate = () => {
        return(<>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/">
                <Redirect to="/Home" />
            </Route>
            <Route exact path="/About" component={About} />
            <Route exact path="/Form" component= {FormTeamplate}/>
        </>)
    }

export default RoutesTemplate