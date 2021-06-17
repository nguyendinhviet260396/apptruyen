import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import renderTextField from '../../components/FormHelper/TextField/index';
import * as alarmActions from './../../actions/alarm';
import * as priceActions from './../../actions/prices';
import Table from './../../components/Table';
import styles from './styles';

// function format money
function formatCash(value) {
  value = value.toString();
  return value
    .split('')
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ',') + prev;
    });
}

class ConfigSystem extends Component {
  componentDidMount() {
    const { alarmActionCreators, priceActionCreators } = this.props;
    const { refeshprice } = priceActionCreators;
    refeshprice();
    const { refeshListEmailAlarm } = alarmActionCreators;
    refeshListEmailAlarm();
  }

  handleSubmitForm01 = data => {
    const { priceActionCreators } = this.props;
    const { addprice, refeshprice } = priceActionCreators;
    addprice(data);
    refeshprice();
  };
  handleSubmitForm02 = data => {
    const { alarmActionCreators } = this.props;
    const { addListEmailAlarm, refeshListEmailAlarm } = alarmActionCreators;
    addListEmailAlarm(data);
    refeshListEmailAlarm();
  };
  render() {
    const {
      handleSubmit,
      redirectToReferrer,
      listPrice,
      listEmailAlarm,
    } = this.props;

    const columns = [
      {
        id: 'id',
        label: 'id',
        minWidth: 10,
        align: 'center',
      },
      {
        id: 'name',
        label: 'Tên',
        minWidth: 100,
        align: 'center',
      },
      {
        id: 'email',
        label: 'Email',
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

    const columns1 = [
      {
        id: 'id',
        label: 'id',
        minWidth: 10,
        align: 'center',
      },
      {
        id: 'levelprice01',
        label: 'price 50kW',
        minWidth: 100,
        align: 'center',
        format: value => formatCash(value) + ' VNĐ',
      },
      {
        id: 'levelprice02',
        label: 'price 100kW',
        minWidth: 100,
        align: 'center',
        format: value => formatCash(value) + ' VNĐ',
      },
      {
        id: 'levelprice03',
        label: 'price 200kW',
        minWidth: 100,
        align: 'center',
        format: value => formatCash(value) + ' VNĐ',
      },
      {
        id: 'timestamp',
        label: 'time',
        minWidth: 50,
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
      <div className="p-1 pt-5 pb-5" style={{}}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
            <label
              className="font-weight-bolder h6 w-100 mb-1 pt-2 pb-2"
              style={{
                height: 'fit-content',
                maxHeight: '40vh',
                borderBottom: '2px solid #00CC00',
                fontSize:'1.2rem'              
              }}
            >
              CÀI ĐẶT CHUNG
            </label>
          </Grid>
          <Grid item xs={12} md={12}>
            <form onSubmit={handleSubmit(this.handleSubmitForm01)}>
              <Grid container spacing={1} className=" pl-4 pr-4 pb-2">
                <Grid item xs={12} md={12} className="textAlign: center">
                  <label
                    className="font-weight-bolder h6 w-100 mb-1 p-1"
                    style={{
                      height: 'fit-content',
                      maxHeight: '40vh',
                      borderBottom: '2px solid #00CC00',
                    }}
                  >
                    Cài đặt giá điện:
                  </label>
                </Grid>
                <Grid item sx={12} md={4}>
                  <Field
                    id="price1"
                    label="Giá điện mức 50kWh"
                    name="levelprice01"
                    fullWidth
                    inputProps={{ style: { fontSize: 15 } }} // font size of input text
                    InputLabelProps={{ style: { fontSize: 15 } }} // font size of input label
                    type="text"
                    size="small"
                    component={renderTextField}
                  />
                </Grid>
                <Grid item sx={12} md={4}>
                  <Field
                    id="price2"
                    label="Giá điện mức 100kWh"
                    name="levelprice02"
                    fullWidth
                    inputProps={{ style: { fontSize: 15 } }} // font size of input text
                    InputLabelProps={{ style: { fontSize: 15 } }} // font size of input label
                    type="text"
                    size="small"
                    component={renderTextField}
                  />
                </Grid>
                <Grid item sx={12} md={4}>
                  <Field
                    id="price3"
                    label="Giá điện mức trên 100kWh"
                    name="levelprice03"
                    fullWidth
                    inputProps={{ style: { fontSize: 15 } }} // font size of input text
                    InputLabelProps={{ style: { fontSize: 15 } }} // font size of input label
                    type="text"
                    size="small"
                    component={renderTextField}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} className="pr-4 pl-4 pb-2">
                <Button
                  className="mt-3 mr-2"
                  color="primary"
                  style={{ backgroundColor: '#00CC33' }}
                  variant="contained"
                  type="submit"
                  size="small"
                >
                  Đồng ý
                </Button>
                <Button
                  className="mt-3"
                  color="secondary"
                  style={{ backgroundColor: '#FF0000' }}
                  variant="contained"
                  type="submit"
                  size="small"
                >
                  Hủy bỏ
                </Button>
              </Grid>
            </form>
            <Grid item xs={12} md={12} className="mr-4 ml-4 mb-2 mt-2 oblique">
              <label>Chú ý: Đơn vị VNĐ</label>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              className="mr-4 ml-4 mb-2 mt-2"
              style={{
                backgroundColor: 'rgba( 0, 0, 0, 0.2)',
                border: '2px solid #00CC33',
              }}
            >
              <Table rows={listPrice} columns={columns1} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit(this.handleSubmitForm02)}>
              <Grid container spacing={1} className=" p-4">
                <Grid item xs={12} md={12} className="textAlign: center">
                  <label
                    className="font-weight-bolder h6 w-100 mb-2 p-1"
                    style={{
                      height: 'fit-content',
                      maxHeight: '40vh',
                      borderBottom: '2px solid #00CC00',
                    }}
                  >
                    Cài đặt email cảnh báo:
                  </label>
                </Grid>
                <Grid item sx={12} md={6}>
                  <Field
                    id="name"
                    label="name"
                    name="name"
                    fullWidth
                    inputProps={{ style: { fontSize: 15 } }} // font size of input text
                    type="text"
                    InputLabelProps={{
                      style: { fontSize: 15 },
                    }}
                    size="small"
                    component={renderTextField}
                  />
                </Grid>
                <Grid item sx={12} md={6}>
                  <Field
                    id="email"
                    label="Email"
                    name="email"
                    fullWidth
                    inputProps={{ style: { fontSize: 15 } }} // font size of input text
                    InputLabelProps={{ style: { fontSize: 15 } }} // font size of input label
                    type="email"
                    size="small"
                    component={renderTextField}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} className="p-4">
                <Button
                  className="mt-3 mr-2"
                  color="primary"
                  variant="contained"
                  style={{ backgroundColor: '#00CC33' }}
                  type="submit"
                  size="small"
                >
                  Đồng ý
                </Button>
                <Button
                  className="mt-3"
                  color="secondary"
                  variant="contained"
                  style={{ backgroundColor: '#FF0000' }}
                  type="submit"
                  size="small"
                >
                  Hủy bỏ
                </Button>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={6} className="textAlign:center  p-4">
            <label
              className="font-weight-bolder h6 w-100 mb-5 p-1"
              style={{
                height: 'fit-content',
                maxHeight: '40vh',
                borderBottom: '2px solid #00CC00',
              }}
            >
              Danh sách tài khoản email
            </label>
            <Grid
              container
              spacing={1}
              className="mr-3  max-h-50"
              style={{
                backgroundColor: 'rgba( 0, 0, 0, 0.2)',
                border: '2px solid #00CC33',
              }}
            >
              <Table rows={listEmailAlarm} columns={columns} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
ConfigSystem.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  redirectToReferrer: PropTypes.bool,
  listEmailAlarm: PropTypes.array,
  listPrice: PropTypes.array,
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
    listEmailAlarm: state.alarm.listEmailAlarm,
    listPrice: state.prices.listPrice,
    redirectToReferrer: state.auth.redirectToReferrer,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    alarmActionCreators: bindActionCreators(alarmActions, dispatch),
    priceActionCreators: bindActionCreators(priceActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(ConfigSystem);
