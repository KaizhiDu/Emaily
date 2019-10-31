import _ from 'lodash';
import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "./validateEmails";
import {Link} from "react-router-dom";

// when we change the input, the redux-form will auto save the data to redux store
// this.props.handleSubmit is provide by reduxForm
// SurveyField is a template of Field

const FIELDS = [
    {label: 'Survey Title', name: 'surveyTitle'},
    {label: 'Survey Line', name: 'surveyLine'},
    {label: 'Email Body', name: 'emailBody'},
    {label: 'Recipient List', name: 'recipientList'}
];

class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return <Field key={name} type="text" label={label} name={name} component={SurveyField}/>
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
                    {this.renderFields()}
                    <Link to='/surveys' className='red btn-flat white-text'>
                        Cancel
                    </Link>
                    <button className='btn btn-info right' type='submit'>
                        Next
                        <i className='material-icons right'>done</i>
                    </button>
                </form>
            </div>
        );
    }
}

// the values is the object coming from our form
function validate(values) {
    const errors = {};

    errors.recipientList = validateEmails(values.recipientList || '');

    if (!values.surveyTitle) {
        errors.surveyTitle = "You must provide a title";
    }
    if (!values.surveyLine) {
        errors.surveyLine = "You must provide a survey line";
    }
    if (!values.emailBody) {
        errors.emailBody = "You must provide a email body";
    }
    if (!values.recipientList) {
        errors.recipientList = "You must provide at least one recipient";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);