import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import renderTextField from '../../components/FormHelper/TextField/index';
import * as alarmActions from './../../actions/alarm';
import Table from './../../components/Table';
import styles from './styles';

class AlarmPage extends Component {
  componentDidMount() {
    const { alarmActionCreators } = this.props;
    const { fetchListAlarm } = alarmActionCreators;
    fetchListAlarm();
  }

  handleSubmitForm = data => {
    const { alarmActionCreators } = this.props;
    const { filterAlarm } = alarmActionCreators;
    filterAlarm(data);
  };
  render() {
    const { handleSubmit, redirectToReferrer, listAlarm } = this.props;
    const rows = listAlarm;
    const columns = [
      { id: 'id', label: 'id', minWidth: 10, align: 'center' },
      { id: 'area', label: 'Khu vực', minWidth: 100, align: 'center' },
      {
        id: 'code',
        label: 'Code',
        minWidth: 170,
        align: 'center',
      },
      {
        id: 'time',
        label: 'Thời gian',
        minWidth: 170,
        align: 'center',
      },
      {
        id: 'type',
        label: 'Loại',
        minWidth: 170,
        align: 'center',
      },
      {
        id: 'discription',
        label: 'Mô tả',
        minWidth: 170,
        align: 'center',
      },
      {
        id: 'Solution',
        label: 'Giải pháp',
        minWidth: 170,
        align: 'center',
      },
    ];

    if (
      redirectToReferrer === false &&
      localStorage.getItem('token:') === null
    ) {
      return <Redirect to={'/'} />;
    }

    return (
      <div className="pl-3 pr-3 pt-5 pb-5 " style={{}}>
        <form onSubmit={handleSubmit(this.handleSubmitForm)}>
          <Grid container spacing={1} className="p-4">
            <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',textAlign:'center',fontSize:'1.2rem'}}>
              <label className="font-weight-bolder " >TRANG CẢNH BÁO</label>
            </Grid>

            <Grid item sx={12} md={3}>
              <Grid container className="pt-4">
                <Grid item xs={6} md={3}>
                  <label style={{ fontSize: '1rem' }}>Area Name</label>
                </Grid>
                <Grid item sx={6} md={3}>
                  <Field name="area" component="select" required="required">
                    <option />
                    <option value="allarea">Toàn ngôi nhà </option>
                    <option value="fish_tank_area">Hồ cá </option>
                    <option value="solar_01">Solar 1 </option>
                    <option value="solar_02">Solar 2 </option>
                  </Field>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={6} md={3}>
              <Grid container className="mr-3 pt-4">
                <Grid item xs={6} md={3}>
                  <label style={{ fontSize: '1rem' }}>Type</label>
                </Grid>
                <Grid item sx={6} md={3}>
                  <Field name="type" component="select" required="required">
                    <option />
                    <option value="alarm">Alarm </option>
                    <option value="warning">Warning</option>
                  </Field>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={6} md={3} >
              <Field
                id="fromdate"
                label="From Date"
                name="fromdate"
                inputProps={{ style: { fontSize: 15 } }} // font size of input text
                // InputLabelProps={{}} // font size of input label
                type="date"
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: 15 },
                }}
                size="small"
                component={renderTextField}
                // value={userEditting ? userEditting.name :''}
              />
            </Grid>
            <Grid item sx={6} md={3}>
              <Field
                id="todate"
                label="Todate"
                name="todate"
                inputProps={{ style: { fontSize: 15 } }} // font size of input text
                // InputLabelProps={{style: {fontSize: 12}}} // font size of input label
                type="date"
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: 15 },
                }}
                size="small"
                component={renderTextField}
                // value={userEditting ? userEditting.name :''}
              />
            </Grid>
            <Grid item xs = {12} >
              <Button
                className="mt-3"
                style={{backgroundColor:'#00CC00',color:'#fff',fontSize:'0.7rem'}}
                variant="contained"
                type="submit"
                size="small"
              >
                Filter
              </Button>
            </Grid>
            
          </Grid>
        </form>
        <Grid
          container
          spacing={1}
          className="mr-3 p-2 mb-0 max-h-50"
          style={{
            border: '2px solid #00CC00',
          }}
        >
          <label
            className="font-weight-bolder h6"
            style={{ height: 'fit-content', maxHeight: '40vh' }}
          >
            Result of Alarm Devices
          </label>
          <Table
            columns={columns}
            rows={rows.filter(
              row =>
                row.type
                  .trim()
                  .toLowerCase()
                  .includes(''.toString().trim().toLowerCase()) &
                row.area
                  .trim()
                  .toLowerCase()
                  .includes(''.toString().trim().toLowerCase()) &
                row.time.includes(''),
            )}
          />
        </Grid>
      </div>
    );
  }
}

AlarmPage.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  listAlarm: PropTypes.array,
  alarmActionCreators: PropTypes.shape({
    fetchListAlarm: PropTypes.func,
  }),
};

const FORM_ALARM = 'TASK_ALARM';
const withReduxForm = reduxForm({
  form: FORM_ALARM,
});
const mapStateToProps = state => {
  return {
    listAlarm: state.alarm.listAlarm,
    redirectToReferrer: state.auth.redirectToReferrer,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    alarmActionCreators: bindActionCreators(alarmActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(AlarmPage);
