import React, {Component} from "react";
import {connect} from "react-redux";

const SurveyFormReview = ({ onCancelClick }) => {
    return (
        <div>
            <h2>Please review the survey!!!</h2>
            <br />
            <div>
                <label>Survey Title</label>
            </div>
            <button
                className="btn btn-danger"
                onClick={onCancelClick}
            >Back</button>
        </div>
    );
}

function mapStateToProps(state) {
    console.log(state);
    return {
       // formValues: state.form
    };
}

export default connect(mapStateToProps)(SurveyFormReview);