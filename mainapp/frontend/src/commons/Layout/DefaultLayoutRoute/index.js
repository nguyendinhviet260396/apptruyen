import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';

class DefaultLayoutRoute extends Component {
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
                            < YourComponent {...routeProps}/>
                        )
                }}
             />
        );
    }
}
DefaultLayoutRoute.propTypes={
    path:PropTypes.string,
    exact:PropTypes.bool,
    component:PropTypes.oneOfType([PropTypes.object,PropTypes.func]),
    name:PropTypes.string,
}

export default withStyles(styles)(DefaultLayoutRoute);