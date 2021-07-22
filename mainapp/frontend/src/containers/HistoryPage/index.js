import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import renderTextField from '../../components/FormHelper/TextField/index';
import validate from '../../commons/Validation';
import * as deviceActions from '../../actions/devices';
import Table from './../../components/Table';
import styles from './styles';

class Analytics extends Component {
  componentDidMount() {
    const { deviceActionsCreators } = this.props;
    const { refeshHistory } = deviceActionsCreators;
    refeshHistory();
  }
  handleSubmitForm = data => {
    const { deviceActionsCreators } = this.props;
    const { refeshHistory } = deviceActionsCreators;
    refeshHistory(data);
  };

  render() {
    const columns = [
      { id: 'device_id', label: 'Thiết bị', minWidth: 100, align: 'center' },
      {
        id: 'voltage',
        label: 'Voltage',
        minWidth: 170,
        align: 'center',
      },
      {
        id: 'current',
        label: 'Dòng điện',
        minWidth: 170,
        align: 'center',
      },
      {
        id: 'power',
        label: 'Công suất',
        minWidth: 170,
        align: 'center',
      },
      {
        id: 'enegry',
        label: 'Năng lượng',
        minWidth: 170,
        align: 'center',
      },
      {
        id: 'frequency',
        label: 'Tần số',
        minWidth: 170,
        align: 'center',
      },
      {
        id: 'timestamp',
        label: 'Thời gian',
        minWidth: 170,
        align: 'center',
      },
    ];
    const {
      handleSubmit,
      redirectToReferrer,
      invalid,
      initialValues,
      listHistory,
    } = this.props;
    console.log(listHistory);
    if (
      redirectToReferrer === false &&
      localStorage.getItem('token:') === null
    ) {
      return <Redirect to={'/'} />;
    }
    return (
      <div className="pr-3 pl-3 pt-5">
        <form onSubmit={handleSubmit(this.handleSubmitForm)}>
          <Grid container spacing={1} className="mr-3 p-2">
            <Grid
              item
              xs={12}
              style={{ borderBottom: '2px solid #00CC00', textAlign: 'center' }}
            >
              <label style={{ fontWeight: 600, fontSize: '1.2rem' }}>
                TRANG LỊCH SỬ
              </label>
            </Grid>
            <Grid
              container
              spacing={1}
              style={{ marginLeft: '2%', marginRight: '2%', paddingTop: '2%' }}
            >
              <Grid item sx={12} md={6}>
                <Grid container spacing={1}>
                  <Grid item sx={12} md={6}>
                    <Field
                      id="fromtime"
                      label="Từ thời gian"
                      name="fromtime"
                      inputProps={{ style: { fontSize: 15 } }}
                      type="time"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: 15 },
                      }}
                      size="small"
                      component={renderTextField}
                      value={initialValues ? initialValues.name : '00:00:00'}
                    />
                  </Grid>
                  <Grid item sx={12} md={6}>
                    <Field
                      id="fromdate"
                      label="Đến ngày"
                      name="fromdate"
                      fullWidth
                      inputProps={{ style: { fontSize: 15 } }}
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: 15 },
                      }}
                      size="small"
                      component={renderTextField}
                      value={initialValues ? initialValues.name : '2020-11-23'}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={12} md={6}>
                <Grid container spacing={1}>
                  <Grid item sx={12} md={6}>
                    <Field
                      id="totime"
                      label="tới thời gian"
                      name="totime"
                      inputProps={{ style: { fontSize: 15 } }}
                      type="time"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: 15 },
                      }}
                      size="small"
                      component={renderTextField}
                      value={initialValues ? initialValues.name : ''}
                    />
                  </Grid>
                  <Grid item sx={12} md={6}>
                    <Field
                      id="todate"
                      label="Đến ngày"
                      name="todate"
                      fullWidth
                      inputProps={{ style: { fontSize: 15 } }}
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: 15 },
                      }}
                      size="small"
                      component={renderTextField}
                      value={initialValues ? initialValues.name : ''}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className="pb-2 pl-5">
              <Grid item sx={12}>
                <Button
                  className="mt-3 "
                  variant="contained"
                  type="submit"
                  disabled={invalid}
                  size="small"
                  style={{
                    color: '#fff',
                    fontSize: '0.7rem',
                    backgroundColor: `${
                      invalid === true ? '#ff0000' : '#00cc00'
                    }`,
                  }}
                >
                  apply
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
        <Grid
          container
          spacing={1}
          className=" mr-2 p-2 mb-2"
          style={{
            border: '1px solid #00CC00',
            minHeight: '30%',
            borderRadius: '5px',
          }}
        >
          <label
            className="font-weight-bolder h6"
            style={{ height: 'fit-content', maxHeight: '40vh' }}
          >
            Kết quả :
          </label>
          <Grid item xs={12} md={12}>
            <Table columns={columns} rows={listHistory} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Analytics.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  onButton: PropTypes.bool,
  redirectToReferrer: PropTypes.bool,
  initialValues: PropTypes.object,
  authActionCreators: PropTypes.shape({
    onButtonSubmit: PropTypes.func,
    authSignup: PropTypes.func,
    offButtonSubmit: PropTypes.func,
  }),
};

const FORM_ANALYTICS = 'TASK_ANALYTICS';
const withReduxForm = reduxForm({
  form: FORM_ANALYTICS,
  validate: validate,
});
const mapStateToProps = state => {
  return {
    listHistory: state.devices.listHistory,
    redirectToReferrer: state.auth.redirectToReferrer,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(Analytics);
