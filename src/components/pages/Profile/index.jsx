import React from "react";
import { bindActionCreators } from "redux";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { requestProfile, updateFormField } from "./action";
import { setState } from "../../../actions";
import "./style.scss";
import Layout from "../../common/Layout";
import {Button, Form} from "semantic-ui-react";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this)
    }

    componentWillMount() {
        this.props.requestProfile()
    }

    onInputChange(e, fieldName) {
        this.props.updateFormField(fieldName, e.target.value);
    }

    render() {

        const {
            profileData,
            loading
        } = this.props.profile;

        return (
            <Layout>
                <div className="Profile">
                    <div className="Profile-title">
                        Profile
                    </div>

                    <div className="Profile-form-container">
                        <Form loading={loading}>
                            <Form.Field>
                                <label>Name</label>
                                <input onChange={e => {this.onInputChange(e, 'name')}} value={profileData.name} />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input disabled onChange={e => {this.onInputChange(e, 'email')}} value={profileData.email} />
                            </Form.Field>
                            
                            <Button
                                    onClick={_=>{}}
                                    name="Save"
                                >Save</Button>
                        </Form>
                    </div>
                </div>
            </Layout>
            )
        }
}

// redux
function mapStateToProps(state) {
    return {
        profile: state.profile.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setState, requestProfile, updateFormField }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));