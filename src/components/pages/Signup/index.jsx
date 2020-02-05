import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setState} from "../../../actions";
import {requestRegister} from "./action";
import "./style.scss";
import Layout from "../../common/Layout";
import {Button, Checkbox, Form, Message} from "semantic-ui-react";

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSignupClick = this.onSignupClick.bind(this);
        this.formCompleted = this.formCompleted.bind(this);

        this.state = {
            nameFieldError: false,
            emailFieldError: false,
            passwordFieldError: false,
            checkboxFieldError: false,
        }
    }

    onNameChange(e) {
        this.props.setState("SIGNUP_NAME", e.target.value);
    }

    onEmailChange(e) {
        this.props.setState("SIGNUP_EMAIL", e.target.value);
    }

    onPasswordChange(e) {
        this.props.setState("SIGNUP_PASSWORD", e.target.value);
    }

    formCompleted() {
        const {
            name,
            email,
            password,
        } = this.props.signup;

        this.setState({
            nameFieldError: false,
            emailFieldError: false,
            passwordFieldError: false,
        });

        let completed = true;

        if (name === "") {
            this.setState({nameFieldError: true});
            completed = false;
        }

        if (email === "") {
            this.setState({emailFieldError: true});
            completed = false;

        }

        if (password === "") {
            this.setState({passwordFieldError: true});
            completed = false;
        }

        return completed;
    }

    onSignupClick() {
        const {
            name,
            email,
            password,
        } = this.props.signup;

        if (this.formCompleted()) {
            this.props.requestRegister(name, email, password);
        }
    }

    render() {
        const {
            name,
            email,
            password,
            loading,
            completed,
            errors
        } = this.props.signup;

        if (completed) {
            return (
                <Layout>
                    <div className="Signup">
                        <div className="Signup-title">
                            Sign up success! An email has been sent to your email: {email}
                        </div>
                    </div>
                </Layout>
            )
        } else {
            return (
                <Layout>
                    <div className="Signup">
                        <div className="Signup-title">
                            Sign up
                        </div>

                        <div className="Signup-form-container">
                            { errors
                                && <Message
                                    floating
                                    error
                                    content="This email already exists"
                            />}

                            <Form loading={loading}>
                                <Form.Field required error={this.state.nameFieldError}>
                                    <label>Name</label>
                                    <input onChange={this.onNameChange} defaultValue={name} placeholder='Name'/>
                                </Form.Field>

                                <Form.Field required error={this.state.emailFieldError || errors}>
                                    <label>Email</label>
                                    <input onChange={this.onEmailChange} defaultValue={email} placeholder='Email'/>

                                </Form.Field>


                                <Form.Field required error={this.state.passwordFieldError}>
                                    <label>Password</label>
                                    <input
                                        onChange={this.onPasswordChange}
                                        defaultValue={password}
                                        placeholder='Password'
                                        type="password"
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <Checkbox label='I agree to the Terms and Conditions'/>
                                </Form.Field>

                                <Button
                                    onClick={this.onSignupClick}
                                    type="submit"
                                    name="Sign up"
                                >Sign up</Button>

                            </Form>
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
        signup: state.signup.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setState, requestRegister}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);