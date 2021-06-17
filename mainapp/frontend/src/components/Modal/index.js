import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core';
import CloseIcon from'@material-ui/icons/Clear';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators,compose} from 'redux';
import * as modalActions from './../../actions/modal';
import Modal from '@material-ui/core/Modal';
class CustomModal extends Component {
    render() {
        const{open,classes,component,modalActionCreators,title}= this.props;
        const {hideModal}=modalActionCreators;
        return (
            <Modal open={open}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.itemTitle}>{title}</span>
                        <CloseIcon className={classes.itemIcon} onClick={hideModal} />
                    </div>
                    <div>
                        {component}
                    </div>
                </div> 
            </Modal>
        );
    }
}
CustomModal.propTypes={
    classes:PropTypes.object,
    open:PropTypes.bool,
    component:PropTypes.object,
    title:PropTypes.string,
    modalActionCreators:PropTypes.shape({
        hideModal:PropTypes.func,
    }),
}
const mapStateToprops = state=>({
    open:state.modal.showModal,
    component: state.modal.component,
    title:state.modal.title,
});
const mapDispatchToProps=(dispatch,props)=>{
    return{
        modalActionCreators:bindActionCreators(modalActions,dispatch)
    }
}
const withConnect = connect(mapStateToprops,mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect,
)(
    CustomModal,
);

