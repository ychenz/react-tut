import React from 'react';
import {Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import Navigation from "./components/common/Navigation";
import Community from "./components/pages/Community";
import Resources from "./components/pages/Resources";

import 'semantic-ui-css/semantic.min.css';

function App() {
    return (
        <div className="App">
            <Navigation />
            <main>
                <Route exact path="/" component={Home}/>
                <Route exact path="/community" component={Community}/>
                <Route exact path="/resources" component={Resources}/>
            </main>
        </div>
    );
}

export default App;
