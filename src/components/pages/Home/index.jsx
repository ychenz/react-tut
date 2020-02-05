import React from 'react';
import "./style.scss";
import Layout from "../../common/Layout";
import { isLoggedIn } from "../../../services/localStorage";

class Home extends React.Component{

    render() {
        const { user_name } = localStorage;
        return (
            <Layout>
                <div className="Home">
                    <div>
                        {isLoggedIn() ? `Welcome ${user_name}, you are logged in.` : 'Welcome, you are not logged in.'}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Home;