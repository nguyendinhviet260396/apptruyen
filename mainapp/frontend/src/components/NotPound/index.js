import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
class NotPound extends Component {
    render() {
        return (
            <Grid container spacing={1} style={{minHeight:'80vh'}}>
                <Grid item xs = {12} md = {12}>
                    <div className="m-2">
                        <h1> Sorry ! Not Pound...</h1>
                        <h5> You can return ...!</h5>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
NotPound.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(NotPound);