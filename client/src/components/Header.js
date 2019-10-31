import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import Payment from './Payment';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
            case false:
                return (
                    <li><a href='/auth/google'>Login With Google</a></li>
                );
            default:
                return [
                    <li key='1'><Payment/></li>,
                    <li key='2'>Credits: {this.props.auth.credits}</li>,
                    <li key='3'><a href='/api/logout'>Logout</a></li>
                ]


        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        Emaily
                    </Link>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

// we can not use the state directly, so we use the mapStateToProps to transfer state to props
function mapStateToProps(state) {
    return {
        // state.auth we already define in index.js under the reducers folder
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);