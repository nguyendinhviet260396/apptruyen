import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import LoadingIcon from './../../assets/images/loading1.gif';
import PropTypes from 'prop-types';
import {bindActionCreators,compose} from 'redux';
import {connect} from 'react-redux';
import * as uiAction from '../../actions/ui';


 class GlobalLoading extends Component {
    render() {
        const {classes,showLoading}= this.props;
        let xhtml = null;
        if (showLoading){
            xhtml = (<div className={classes.globalLoading}>
                         <img
                            src={LoadingIcon}
                            alt="loading"
                            className={classes.icon} />
                    </div>)
        }
        return xhtml;
    }
}
GlobalLoading.propTypes={
    classes:PropTypes.object,
    showLoading:PropTypes.bool,
};

const mapStateToprops=(state)=>{
    return {
        showLoading:state.ui.showLoading,
    };
}

const mapDispatchToProps=(dispatch,props)=>{
    return{
        uiActions:bindActionCreators(uiAction,dispatch),
    }
}
const withConnect = connect(mapStateToprops,mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect,
)(
    GlobalLoading,
);