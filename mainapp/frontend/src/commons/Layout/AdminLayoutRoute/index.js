import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import Dashboard from './../../../components/Dashboard/index';
import PropTypes from 'prop-types';

class AdminLayoutRoute extends Component {
    render() {
        const {component:YourComponent,name,...remainProps}=this.props;
        return (
            <Route
                {...remainProps}// cach ngan gon
                // path={route.path}
                // exact={route.exact}
                // component={route.component}
                render={routeProps =>{
                    return(
                        <Dashboard  name={name} >
                            < YourComponent {...routeProps}/>
                        </Dashboard>
                    )
                }}
             />
        );
    }
}
AdminLayoutRoute.propTypes={
    path:PropTypes.string,
    exact:PropTypes.bool,
    component:PropTypes.oneOfType([PropTypes.object,PropTypes.func]),
    name:PropTypes.string,
}

export default withStyles(styles)(AdminLayoutRoute);