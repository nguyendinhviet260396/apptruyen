import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import logo from './../../../assets/images/ems_logo.png';

class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <footer className={classes.Footer}> 
                <span ><img src={logo} alt='EmsLogo'style={{ width: '35px',marginRight: '5px'}}/></span>
                <span className={classes.itemContent}>Developed by Hoang Truyen Copyright &copy; 2021</span>
                
            </footer>
        );
    }
}
export default withStyles(styles)(Footer);