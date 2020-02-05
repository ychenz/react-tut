import React from "react";
import {withRouter} from "react-router-dom";
import {Input, Menu} from "semantic-ui-react";
import { clearSession, isLoggedIn } from "../../../services/localStorage";
import "./style.scss";

class NavigationSimple extends React.Component {

    constructor(props) {
        super(props);
        this.onTitleClick = this.onTitleClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleProfileClick = this.handleProfileClick.bind(this);
    }

    onTitleClick() {
        this.props.history.push("/");
    }

    state = {activeItem: ''};
    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    handleLoginClick () {
        this.props.history.push("/login");
    }

    handleLogoutClick () {
        clearSession();
        this.props.history.push("/login");
    }

    handleProfileClick () {
        this.props.history.push("/profile");
    }

    render() {
        const {activeItem} = this.state;

        return (
            <div className="Navigation">
                <div className="Navigation-title-container">
                    <div
                        className="Navigation-site-title"
                        onClick={this.onTitleClick}
                    >
                        Template
                    </div>
                </div>
                <Menu secondary className="Navigation-menu">
                    <Menu.Item
                        name='Plans'
                        active={activeItem === 'Plans'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='News'
                        active={activeItem === 'News'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...'/>
                        </Menu.Item>
                        {isLoggedIn() ? (
                                <>
                                    <Menu.Item
                                        name="profile"
                                        onClick={this.handleProfileClick}
                                    />
                                    <Menu.Item
                                        name="logout"
                                        onClick={this.handleLogoutClick}
                                    />
                                </>
                            )
                            :
                            <Menu.Item
                                name="login"
                                onClick={this.handleLoginClick}
                            />
                        }

                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default withRouter(NavigationSimple);
