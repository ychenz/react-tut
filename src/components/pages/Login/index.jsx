import React from "react";
import { bindActionCreators } from "redux";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { requestLogin } from "./action";
import { setState } from "../../../actions";
import { isLoggedIn } from "../../../services/localStorage";
import "./style.scss";
import Layout from "../../common/Layout";
import {Button, Form} from "semantic-ui-react";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSignupClick = this.onSignupClick.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onEmailChange(e) {
        this.props.setState("LOGIN_EMAIL", e.target.value);
    }

    onPasswordChange(e) {
        this.props.setState("LOGIN_PASSWORD", e.target.value);
    }

    onSignupClick() {
        this.props.history.push("/signup");
    }

    onLoginClick() {
        const {
            email,
            password
        } = this.props.login;

        this.props.requestLogin(email, password);
    }

    render() {
        const {
            email,
            password,
            loading,
        } = this.props.login;

        if (isLoggedIn()){
            return <Redirect to="/" />
        } else {
            return (
                <Layout>
                    <div className="Login">
                        <div className="Login-title">
                            Login
                        </div>

                        <div className="Login-form-container">
                            <Form loading={loading}>

                                <Form.Field>
                                    <label>Email</label>
                                    <input onChange={this.onEmailChange} defaultValue={email} placeholder='Email'/>
                                </Form.Field>

                                <Form.Field>
                                    <label>Password</label>
                                    <input
                                        onChange={this.onPasswordChange}
                                        defaultValue={password}
                                        placeholder='Password'
                                        type="password"
                                    />
                                </Form.Field>

                                <Button
                                    onClick={this.onLoginClick}
                                    type="submit"
                                    name="Login"
                                >Login</Button>

                            </Form>
                        </div>

                        <div className="Login-signup-text">
                            Not a member yet?&nbsp;
                            <a onClick={this.onSignupClick}>Sign up now!</a>
                        </div>
                    </div>
                </Layout>
            )
        }
    }
}

// redux
function mapStateToProps(state) {
    return {
        login: state.login.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setState, requestLogin }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));