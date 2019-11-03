import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";

class SurveysList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.map(survey => {
            return (
                <div className="card darken-1" key={survey._id}>
                    <div className="card-content">
                         <span className="card-title">
                             {survey.title}
                         </span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Send on: {survey.dateSent}
                        </p>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {surveys: state.surveys}
}

export default connect(mapStateToProps, actions)(SurveysList);