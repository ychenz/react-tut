import React from "react";
import {bindActionCreators} from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { requestVerify } from "./action";
import "./style.scss";
import Layout from "../../common/Layout";
import {Loader, Message} from "semantic-ui-react";

class Verify extends React.Component {

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.requestVerify(id);
    }

    render() {
        const {
            verified,
            email,
            errors
        } = this.props.verify;


        if (! errors){
            return (
                <Layout>
                    <div className="Verify">
                        { verified ?
                            <div className="Verify-title">
                                Your email: {email} has been successfully verified, please use it to log in
                            </div>
                            :
                            <Loader active inline='centered'/>
                        }
                    </div>
                </Layout>
            )
        } else {
             return (
                 <Layout>
                     <div className="Verify">
                         <Message
                            error
                            content="Verification not found or already verified"
                         />
                     </div>
                 </Layout>
             )
        }

    }
}

// redux
function mapStateToProps(state) {
    return {
        verify: state.verify.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({requestVerify}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Verify));