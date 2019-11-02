import React, {Component} from "react";
import SurveyForm from './SurveyForm';
import SurveyFormReview from "./SurveyFormReview";
import reduxForm from "redux-form/lib/immutable/reduxForm";

class SurveyNew extends Component {

    state = {showFormReview: false};

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview
                onCancelClick={() => this.setState({showFormReview: false})}
            />
        }
        return <SurveyForm
            onFormSubmit={() => this.setState({showFormReview: true})}
        />
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);