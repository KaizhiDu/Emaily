import React, {Component} from "react";
import {Link} from "react-router-dom";
import SurveysList from "./surveys/SurveysList";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <SurveysList />
                <div className="fixed-action-btn">
                    <Link to='/surveys/new' className="btn-floating btn-large red" >
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            </div>

        )
    }
}

export default Dashboard;