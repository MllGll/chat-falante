import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from './App';
import Main from './pages/main'

const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route component={App} exact path="/"/>
                <Route component={Main} path="/chat"/>
            </Switch>
        </Router>
    );
}

export default Routes;