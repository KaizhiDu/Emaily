import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';

const SurveyFormReview = ({onCancelClick, formValues, submitSurvey, history}) => {
    return (
        <div>
            <h2>Please review the survey!!!</h2>

            <div>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div>
                    <label>Survey Line</label>
                    <div>{formValues.subject}</div>
                </div>
                <div>
                    <label>Email Body</label>
                    <div>{formValues.body}</div>
                </div>
                <div>
                    <label>Recipient List</label>
                    <div>{formValues.recipients}</div>
                </div>
            </div>
            <br/>

            <button
                className="btn btn-danger left"
                onClick={onCancelClick}
            >Back
            </button>
            <button
                className="btn btn-success right"
                // we need to executive submitSurvey after click this button
                onClick={() => submitSurvey(formValues, history)}
            >Send Survey
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values,
    };
}

// we need to use withRouter's history to route back
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));