
import React, { Component } from 'react';
import { withStyles, Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import {compose,bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import renderTextField from '../../components/FormHelper/TextField/index';
import RealTimeColumn from './../../components/RealTimeColumn';
import validate from '../../commons/Validation/';
import AreaChart from './../../components/AreaChart';
import * as analyticsActions from './../../actions/analytics';
import styles from './styles';

class Analytics extends Component {
    handleCloseForm=()=>{
    }
    handleSubmitForm = data => {
        const {analyticsActionsCreators} = this.props;
        const {fetchListAnalytics} = analyticsActionsCreators;
        console.log(data)
        fetchListAnalytics(data);

    };
    render() {
        const {handleSubmit,redirectToReferrer,invalid,initialValues,listAnalytics}=this.props; 
        console.log(listAnalytics);
        if (redirectToReferrer === false &&  localStorage.getItem("token:") === null) {
            return (<Redirect to={'/'}/>)
        }
        return(
                <div className="pr-3 pl-3 pt-5">
                    <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                        <Grid container spacing={1} className="mr-3 p-2">
                            <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',textAlign:'center'}}>
                                <label style={{fontWeight:600,fontSize:'1.2rem'}}>TRANG PHÂN TÍCH, BÁO CÁO</label>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item sx={12} md={4}>
                                    <Grid container spacing={1} className="pt-4">
                                        <Grid item xs={6} md ={3}>
                                            <label style={{fontSize:'1rem'}}>Khu vực phân tích</label>
                                        </Grid>
                                        <Grid item sx={6} md={3}>
                                            <Field name="area" component="select" required="required"> 
                                                <option/> 
                                                <option value="allarea">Toàn ngôi nhà  </option>
                                                <option value="fish_tank_area">Hồ cá  </option>
                                                <option value="solar_01">Solar 1  </option>
                                                <option value="solar_02">Solar 2  </option>
                                            </Field>

                                        </Grid>
                                        <Grid item xs={6} md ={3}>
                                            <label style={{fontSize:'1rem'}}>Kiểu phân tích</label>
                                        </Grid>
                                        <Grid item sx={6} md={3}>
                                            <Field name="type"   component="select" required="required">
                                                <option/>
                                                <option value="enegry" >Năng lượng</option>
                                                <option value="power">Công suất</option>
                                                <option value="current">Dòng điện</option>
                                            </Field>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sx={12} md={4}>
                                    <Grid container spacing={1}>
                                        <Grid item sx={12} md={6}>
                                            <Field
                                            id="fromtime"
                                            label="Từ thời gian"
                                            name="fromtime"
                                            inputProps={{style: {fontSize: 15}}} // font size of input text
                                            // InputLabelProps={{}} // font size of input label
                                            type="time"
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            style: {fontSize: 15}
                                            }}
                                            size="small"
                                            component={renderTextField}
                                            value={initialValues ? initialValues.name :'00:00:00'}
                                            />
                                        </Grid>
                                        <Grid item sx={12} md={6}>
                                            <Field
                                                id="fromdate"
                                                label="Đến ngày"
                                                name="fromdate"
                                                fullWidth
                                                inputProps={{style: {fontSize: 15}}} // font size of input text
                                                // InputLabelProps={{style: {fontSize: 12}}} // font size of input label
                                                type="date"
                                                InputLabelProps={{
                                                    shrink: true,
                                                    style: {fontSize: 15}
                                                    }}
                                                size="small"
                                                component={renderTextField}
                                                value={initialValues ? initialValues.name :'2020-11-23'}
                                                />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sx={12} md={4}>
                                    <Grid container spacing={1}>
                                        <Grid item sx={12} md={6}>
                                            <Field
                                            id="totime"
                                            label="tới thời gian"
                                            name="totime"
                                            inputProps={{style: {fontSize: 15}}} // font size of input text
                                            // InputLabelProps={{}} // font size of input label
                                            type="time"
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            style: {fontSize: 15}
                                            }}
                                            size="small"
                                            component={renderTextField}
                                            value={initialValues ? initialValues.name :''}
                                            />
                                        </Grid>
                                        <Grid item sx={12} md={6}>
                                            <Field
                                            id="todate"
                                            label="Đến ngày"
                                            name="todate"
                                            fullWidth
                                            inputProps={{style: {fontSize: 15}}} // font size of input text
                                            // InputLabelProps={{style: {fontSize: 12}}} // font size of input label
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true,
                                                style: {fontSize: 15}
                                                }}
                                            size="small"
                                            component={renderTextField}
                                            value={initialValues ? initialValues.name :''}
                                            />
                                        </Grid>
                                    </Grid>
                            </Grid>
                            </Grid>
                            <Grid item xs={12} className="pb-2">
                                <Grid item sx={12}>
                                    <Button
                                        className="mt-3"
                                        variant="contained"
                                        type="submit"
                                        disabled={invalid }
                                        size='small'
                                        style={{color:'#fff',fontSize:'0.7rem',backgroundColor:`${invalid === true ? "#ff0000":'#00cc00'}`}}
                                        >
                                            apply
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                    <Grid container spacing={1} className=" mr-2 p-2 mb-2" style={{border: '2px solid #00CC00',minHeight:'30%'}}>
                        <label className="font-weight-bolder h6" style={{height:'fit-content',maxHeight:'40vh' }}> Kết quả phân tích:</label>
                        <Grid item xs={12} md ={12}>
                           <AreaChart data = {listAnalytics}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className="mr-2 p-2  " style={{border: '2px solid #00CC00',minHeight:'30%'}}>
                        <Grid item xs={12} md ={12}>
                        <RealTimeColumn data = {listAnalytics}/>
                        </Grid>
                    </Grid>
                </div>
        );
    }
}

Analytics.propTypes={
    classes:PropTypes.object,
    handleSubmit:PropTypes.func,
    invalid:PropTypes.bool,
    submitting:PropTypes.bool,
    onButton:PropTypes.bool,
    redirectToReferrer:PropTypes.bool,
    initialValues:PropTypes.object,
    authActionCreators:PropTypes.shape({
        onButtonSubmit:PropTypes.func,
        authSignup:PropTypes.func,
        offButtonSubmit:PropTypes.func,
        
    }),
}

const FORM_ANALYTICS ="TASK_ANALYTICS";
const withReduxForm = reduxForm({
    form: FORM_ANALYTICS,
    validate:validate,
});
const mapStateToProps=state=>{
    return{
        listAnalytics:state.analytics.listAnalytics,
        redirectToReferrer:state.auth.redirectToReferrer,
    }
};
const mapDispatchToProps=(dispatch,props)=>{
    return{
        analyticsActionsCreators:bindActionCreators(analyticsActions,dispatch),
    }
};
const withConnect=connect(mapStateToProps,mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(Analytics);


