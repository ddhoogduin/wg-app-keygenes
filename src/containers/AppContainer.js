import React, {Component} from 'react'
import {connect} from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import App from "../components/App";
import {getInputList} from "../actions/client/inputClientActions"
import {getForm} from "../actions/client/formClientActions"
import listInputReducer from "../reducers/client/input/listInputReducer";
import {Route, Router, Switch, withRouter} from "react-router-dom";
import history from '../history'
import {mainMenu} from '../constants/menus'
import {spring, AnimatedSwitch} from 'react-router-transition';
import {mapStyles, bounceTransition} from '../constants/routAnimations'

import WhatIs from '../components/pages/WhatIs'
import HowToUse from '../components/pages/HowToUse'
import Downloads from '../components/pages/Downloads'
import Tool from '../components/pages/Tool'

import {excApi} from '../actions/protocols/directProtocolActions'
import {Form, Grid, Header, Segment, Transition} from "semantic-ui-react";
import Faq from  "../components/pages/Faq"
import Contacts from "../components/pages/Contacts";
import {getPageList} from "../actions/client/pagesClientActions";
import {getToolStepsList} from "../actions/client/toolStepsClientActions";
import {getOutputExample} from "../actions/client/outputExampleClientActions";


class AppContainer extends Component {
    state = {
        sloganText: false,
        pageView: false
    };
    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.excApi(formValues)
    };

    componentDidMount() {
        setTimeout(
            () => {
                this.setState({sloganText: true})
            }, 1200);
        this.props.getInputList();
        this.props.getForm(8);
        this.props.getPageList();
        this.props.getToolStepsList();
        this.props.getOutputExample();
    }

    wrapTransition =  (object) => {
        return (

                <Transition
                    onHide={"fade"}
                    unmountOnHide={true}
                    animation={"fade up"}
                    duration={{ show:500 }}
                    key={`page-${object.props.path}`}
                    transitionOnMount={true}
                >
                    <div>
                        {object}
                    </div>
            </Transition>
        )
    };

    renderContent() {
        if(this.props.pageList.length === 0){
            return null
        }
        return (
            <Router history={history}>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => this.wrapTransition(
                            <WhatIs {...props} path={'/'}
                                    content={this.props.pageList}
                                    toolSteps={this.props.toolSteps}
                                    outputExamples={this.props.outputExamples}
                            />)
                        }
                    />
                </Switch>
            </Router>
        );
    }

    render() {
        console.log(this.props.content);
        return (<App
            setPageChange={this.setPageChange}
            content={this.props.pageList}
            pageContent={this.renderContent()}
            inputList={this.props.listInput}
            sloganText={this.state.sloganText}
            menuItems={mainMenu}
            activePage={this.routerPath}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        listInput: state.listInput,
        activeFormClient: state.activeFormClient,
        protocolStatus: state.protocolStatus,
        pageList: state.listPage,
        toolSteps: state.listToolSteps,
        outputExamples: state.listOutputExample
    }
};
export default connect(mapStateToProps, {getInputList, getForm, getPageList, excApi, getToolStepsList, getOutputExample})(AppContainer)