import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Header from './Header';
import { connect } from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import * as uiActions from './../../actions/ui';
import Footer from './Footer/index';

class Dashboard extends Component {

    render() {
        const {classes,children} =this.props;
        return (
            <div className={classes.dashboard}>
                <div className={classes.header}>
                    <Header/>
                </div>
                <div className={classes.wrapper}>
                    <div className={classes.wrapperContent}>
                        {children}
                    </div>
                </div>
                <div className={classes.rapperFooter}>
                    <Footer/>
                </div>
            </div>
        );
    }
}
Dashboard.propTypes={
    children: PropTypes.object,
  classes: PropTypes.object,
  name: PropTypes.string,
  openSidebar: PropTypes.bool,
  uiActionCreators: PropTypes.shape({
    showSideBar: PropTypes.func,
    hideSideBar: PropTypes.func,
  }),
}
const mapStateToProps=(state) =>{
    return {
        openSideBar: state.ui.showSideBar,
        edirectToReferrer:state.auth.redirectToReferrer,
    };
}

const mapDispatchToProps=(dispatch) =>{
    return {
        uiActionCreators: bindActionCreators(uiActions, dispatch),
    };
}

const withConnect = connect(mapStateToProps,mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect,
)(
    Dashboard
);


