import _ from 'lodash';
import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import SurveyField from "./SurveyField";
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
            return <Field type="text" label={label} name={name} component={SurveyField}/>
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);