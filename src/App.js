import React from 'react';
import {Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Verify from "./components/pages/Verify";
import Profile from "./components/pages/Profile";

import 'semantic-ui-css/semantic.min.css';

function App() {
    return (
        <div className="App">
            <main>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/verify/:id" component={Verify}/>
            </main>
        </div>
    );
}

export default App;
