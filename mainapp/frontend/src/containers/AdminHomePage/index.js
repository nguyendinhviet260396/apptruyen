import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as deviceActions from './../../actions/devices';
import * as weatherActions from './../../actions/weather';
import * as priceActions from './../../actions/prices';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import EvStationIcon from '@material-ui/icons/EvStation';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import OpacityIcon from '@material-ui/icons/Opacity';
import TimelineIcon from '@material-ui/icons/Timeline';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AreaChart from './../../components/AreaChart/index';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import TodayIcon from '@material-ui/icons/Today';
import GradeIcon from '@material-ui/icons/Grade';
import LooksIcon from '@material-ui/icons/Looks';
import SpeedIcon from '@material-ui/icons/Speed';
import Gauge1 from './../../components/Gauge1/index';
import RealTimeColumn from './../../components/RealTimeColumn';
import { Redirect } from 'react-router-dom';
import './main.css';

//function format money
function formatCash(value) {
  value = value.toString();
  return value
    .split('')
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ',') + prev;
    });
}

// function caculator money
function caculatormoney(value, levelprice_01, levelprice_02, levelprice_03) {
  let sum_money = 0;
  if (value <= 50) {
    sum_money = levelprice_01 * value;
    return formatCash(sum_money);
  } else if (value > 50 && value <= 100) {
    sum_money = levelprice_01 * 50 + levelprice_02 * (value - 50);
    return formatCash(sum_money);
  } else {
    sum_money =
      levelprice_01 * 50 +
      levelprice_02 * (value - 50) +
      levelprice_03 * (value - 100);
    return formatCash(sum_money);
  }
}

class AdminHomePage extends Component {
  componentDidMount() {
    const interval = setInterval(() => {
      const {
        deviceActionsCreators,
        weatherActionsCreators,
        priceActionsCreators,
      } = this.props;
      const { refeshWeather } = weatherActionsCreators;
      const { filterPriceNew } = priceActionsCreators;
      const {
        refeshMainLast,
        refeshMainEnegry,
        refeshMainCalculatorEnegry,
      } = deviceActionsCreators;
      filterPriceNew();
      refeshMainCalculatorEnegry('sdm220');
      refeshMainLast('sdm220');
      refeshMainEnegry('sdm220');
      refeshWeather('Hanoi');
    }, 1000);
    return () => clearInterval(interval);
  }
  render() {
    const {
      classes,
      listWeather,
      listMainEnegry,
      listMainCalculatorEnegry,
      listMainLast,
      redirectToReferrer,
      listPriceNew,
    } = this.props;

    console.log(listMainCalculatorEnegry);
    if (
      redirectToReferrer === false &&
      localStorage.getItem('token:') === null
    ) {
      return <Redirect to="/" />;
    }

    return (
      <Grid container spacing={1} className={classes.maincontainer}>
        <Grid item xs={12} md={3} style={{ backgroundColor: '#FFFFFF' }}>
          <Grid
            item
            xs={12}
            style={{
              borderBottom: '2px solid #00CC00',
              marginRight: '0.5%',
              marginLeft: '0.5%',
            }}
          >
            <div
              style={{
                padding: '5px',
                fontSize: '1rem',
                fontWeight: '800',
                textAlign: 'center',
              }}
            >
              Tính toán
            </div>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{ marginRight: '4%', marginLeft: '4%' }}>
              <div style={{ marginTop: '5px', fontSize: '1rem' }}>
                Thời tiết hôm nay:
                {listWeather.length !== 0
                  ? listWeather[0].name + ' <---> ' + listWeather[0].country
                  : 'NaN'}
                <GradeIcon style={{ color: '#FF0000' }} />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                marginRight: '4%',
                marginLeft: '4%',
              }}
            >
              <div className="container- pr-2 pl-2 pt-1 w-100 ">
                <table
                  className="table table-sm table-hover"
                  style={{
                    color: '#111',
                    fontSize: '0.8rem',
                    borderRadius: '10px',
                    marginBottom: '1%',
                  }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <WhatshotIcon style={{ color: '#FF0000' }} />
                        Nhiệt độ:
                      </td>
                      <td>
                        {listWeather.length !== 0 ? listWeather[0].temp : 'NaN'}
                      </td>
                      <td>*C</td>
                    </tr>
                    <tr>
                      <td>
                        <OpacityIcon style={{ color: '#00CC33' }} />
                        Độ ẩm:
                      </td>
                      <td>
                        {listWeather.length !== 0 ? listWeather[0].humi : 'NaN'}
                      </td>
                      <td>%</td>
                    </tr>
                    <tr>
                      <td>
                        <SpeedIcon style={{ color: '#0033FF' }} />
                        Tốc độ gió:
                      </td>
                      <td>
                        {listWeather.length !== 0
                          ? listWeather[0].wind_speed
                          : 'NaN'}
                      </td>
                      <td>km/h</td>
                    </tr>
                    <tr>
                      <td>
                        <AccessAlarmIcon style={{ color: '#00CC33' }} />
                        Mặt trời mọc:
                      </td>
                      <td>
                        {listWeather.length !== 0
                          ? listWeather[0].sunrise
                          : 'NaN'}
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <AccessAlarmIcon style={{ color: '#FF0000' }} />
                        Mặt trời lặn:
                      </td>
                      <td>
                        {listWeather.length !== 0
                          ? listWeather[0].sunset
                          : 'NaN'}
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <LooksIcon style={{ color: '#0033FF' }} />
                        Bầu trời:
                      </td>
                      <td>
                        {listWeather.length !== 0
                          ? listWeather[0].description
                          : 'NaN'}
                      </td>
                      <td>
                        <WbCloudyIcon style={{ color: '#0033FF' }} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grid>
            <Grid item xs={12} style={{ marginRight: '4%', marginLeft: '4%' }}>
              <div style={{ marginTop: '1px', fontSize: '1rem' }}>
                Tính toán tiền điện:
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                marginRight: '4%',
                marginLeft: '4%',
              }}
            >
              <div className="container- pr-2 pl-2 pt-1 w-100 ">
                <table
                  className="table table-sm table-hover"
                  style={{
                    color: '#111',
                    fontSize: '0.8rem',
                    borderRadius: '10px',
                  }}
                >
                  <tbody>
                    <tr>
                      <td>
                        {' '}
                        <TodayIcon
                          style={{ color: '#00CC33', fontSize: 'inherit' }}
                        />
                        Ngày:
                      </td>
                      <td>
                        {caculatormoney(
                          listMainCalculatorEnegry.length !== 0
                            ? listMainCalculatorEnegry[0].enegry_yesterday
                            : 0,
                          listPriceNew.length !== 0
                            ? listPriceNew[0].levelprice01
                            : 0,
                          listPriceNew.length !== 0
                            ? listPriceNew[0].levelprice02
                            : 0,
                          listPriceNew.length !== 0
                            ? listPriceNew[0].levelprice03
                            : 0,
                        )}
                      </td>
                      <td>VNĐ</td>
                    </tr>
                    <tr>
                      <td>
                        <TodayIcon
                          style={{ color: '#00CC33', fontSize: 'inherit' }}
                        />
                        Tuần:
                      </td>
                      <td>
                      {caculatormoney(
                          listMainCalculatorEnegry.length !== 0
                            ? listMainCalculatorEnegry[0].enegry_weekly
                            : 0,
                          listPriceNew.length !== 0
                            ? listPriceNew[0].levelprice01
                            : 0,
                          listPriceNew.length !== 0
                            ? listPriceNew[0].levelprice02
                            : 0,
                          listPriceNew.length !== 0
                            ? listPriceNew[0].levelprice03
                            : 0,
                        )}
                      </td>
                      <td>VNĐ</td>
                    </tr>
                    <tr>
                      <td>
                        <TodayIcon
                          style={{ color: '#00CC33', fontSize: 'inherit' }}
                        />
                        Tháng:
                      </td>
                      <td>
                      {caculatormoney(
                          listMainCalculatorEnegry.length !== 0
                            ? listMainCalculatorEnegry[0].enegry_lastmonth
                            : 0,
                          listPriceNew.length !== 0
                            ? listPriceNew[0].levelprice01
                            : 0,
                          listPriceNew.length !== 0
                            ? listPriceNew[0].levelprice02
                            : 0,
                          listPriceNew.length !== 0
                            ? listPriceNew[0].levelprice03
                            : 0,
                        )}
                      </td>
                      <td>VNĐ</td>
                    </tr>
                    <tr>
                      <td>
                        <TodayIcon
                          style={{ color: '#00CC33', fontSize: 'inherit' }}
                        />
                        Năm:
                      </td>
                      <td>
                      {caculatormoney(
                          listMainCalculatorEnegry.length !== 0
                            ? listMainCalculatorEnegry[0].enegry_year
                            : 0,
                          listPriceNew.length !== 0
                            ? listPriceNew[0].levelprice01
                            : 0,
                          listPriceNew.length !== 0
                            ? listPriceNew[0].levelprice02
                            : 0,
                          listPriceNew.length !== 0
                            ? listPriceNew[0].levelprice03
                            : 0,
                        )}
                      </td>
                      <td>VNĐ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ marginRight: '0.5%', marginLeft: '0.5%' }}
          >
            <div
              style={{ padding: '5px', fontSize: '1rem', fontWeight: '800' }}
            >
              <EvStationIcon
                style={{ color: '#00CC33', fontSize: 'inherit' }}
              />
              Năng lượng tiêu thụ
            </div>
            <div
              style={{
                marginTop: '5%',
                marginLeft: '27%',
                borderColor: '#ff0000',
                marginRight: '27%',
                padding: '22%',
                fontWeight: '800',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#FFF',
                background: '#00CC33',
                clipPath: 'circle(50%)',
                height: '5em',
                width: '5em',
              }}
            >
              {listMainLast.length !== 0
                ? listMainLast[0]
                  ? listMainLast[0].enegry
                  : 'NaN'
                : 'NaN'}
              kWh
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} style={{ backgroundColor: '#FFFFFF' }}>
          <Grid
            item
            xs={12}
            style={{
              borderBottom: '2px solid #00CC00',
              marginRight: '0.5%',
              marginLeft: '0.5%',
            }}
          >
            <div
              style={{
                padding: '5px',
                fontSize: '1rem',
                fontWeight: '800',
                textAlign: 'center',
              }}
            >
              Tổng quan năng lượng tiêu thụ
            </div>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{ marginTop: '1%', marginBottom: '1%' }}
          >
            <Grid item xs={12} md={4}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      margin: '5px',
                      height: '30px',
                      width: '95%',
                      borderRadius: '5px',
                      padding: '5px',
                      border: '1px solid #00CC00',
                    }}
                  >
                    <Grid container>
                      <Grid item xs={6}>
                        <EvStationIcon
                          style={{
                            color: '#00cc33',
                            fontSize: 'inherit',
                            marginBottom: '5px',
                          }}
                        />
                        Giờ trước:
                      </Grid>
                      <Grid item xs={4}>
                        {listMainCalculatorEnegry.length !== 0
                          ? listMainCalculatorEnegry[0].enegry_hours
                          : 'NaN'}
                      </Grid>
                      <Grid item xs={2}>
                        kWh
                      </Grid>
                    </Grid>
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      margin: '5px',
                      height: '30px',
                      width: '95%',
                      borderRadius: '5px',
                      padding: '5px',
                      border: '1px solid #00CC00',
                    }}
                  >
                    <Grid container>
                      <Grid item xs={6}>
                        <EvStationIcon
                          style={{
                            color: '#00cc33',
                            fontSize: 'inherit',
                            marginBottom: '5px',
                          }}
                        />
                        Hôm qua:
                      </Grid>
                      <Grid item xs={4}>
                        {listMainCalculatorEnegry.length !== 0
                          ? listMainCalculatorEnegry[0].enegry_yesterday
                          : 'NaN'}
                      </Grid>
                      <Grid item xs={2}>
                        kWh
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      margin: '5px',
                      height: '30px',
                      width: '95%',
                      borderRadius: '5px',
                      padding: '5px',
                      border: '1px solid #00CC00',
                    }}
                  >
                    <Grid container>
                      <Grid item xs={6}>
                        <EvStationIcon
                          style={{
                            color: '#00cc33',
                            fontSize: 'inherit',
                            marginBottom: '5px',
                          }}
                        />
                        Hôm nay:
                      </Grid>
                      <Grid item xs={4}>
                        {listMainCalculatorEnegry.length !== 0
                          ? listMainCalculatorEnegry[0].enegry_today
                          : 'NaN'}
                      </Grid>
                      <Grid item xs={2}>
                        kWh
                      </Grid>
                    </Grid>
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      margin: '5px',
                      height: '30px',
                      width: '95%',
                      borderRadius: '5px',
                      padding: '5px',
                      border: '1px solid #00CC00',
                    }}
                  >
                    <Grid container>
                      <Grid item xs={6}>
                        <EvStationIcon
                          style={{
                            color: '#00cc33',
                            fontSize: 'inherit',
                            marginBottom: '5px',
                          }}
                        />
                        Tuần trước:
                      </Grid>
                      <Grid item xs={4}>
                        {listMainCalculatorEnegry.length !== 0
                          ? listMainCalculatorEnegry[0].enegry_weekly
                          : 'NaN'}
                      </Grid>
                      <Grid item xs={2}>
                        kWh
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      margin: '5px',
                      height: '30px',
                      width: '95%',
                      borderRadius: '5px',
                      padding: '5px',
                      border: '1px solid #00CC00',
                    }}
                  >
                    <Grid container>
                      <Grid item xs={6}>
                        <EvStationIcon
                          style={{
                            color: '#00cc33',
                            fontSize: 'inherit',
                            marginBottom: '5px',
                          }}
                        />
                        Năm nay:
                      </Grid>
                      <Grid item xs={4}>
                        {listMainCalculatorEnegry.length !== 0
                          ? listMainCalculatorEnegry[0].enegry_year
                          : 'NaN'}
                      </Grid>
                      <Grid item xs={2}>
                        kWh
                      </Grid>
                    </Grid>
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      margin: '5px',
                      height: '30px',
                      width: '95%',
                      borderRadius: '5px',
                      padding: '5px',
                      border: '1px solid #00CC00',
                    }}
                  >
                    <Grid container>
                      <Grid item xs={6}>
                        <EvStationIcon
                          style={{
                            color: '#00cc33',
                            fontSize: 'inherit',
                            marginBottom: '5px',
                          }}
                        />
                        Tháng trước:
                      </Grid>
                      <Grid item xs={4}>
                        {listMainCalculatorEnegry.length !== 0
                          ? listMainCalculatorEnegry[0].enegry_lastmonth
                          : 'NaN'}
                      </Grid>
                      <Grid item xs={2}>
                        kWh
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                borderTop: '2px solid #00CC00',
                marginRight: '0.5%',
                marginLeft: '0.5%',
              }}
            >
              <div style={{ padding: '1px', fontSize: '1rem' }}>
                <TimelineIcon style={{ color: '#00CC33' }} />
                Biểu đồ phụ tải
              </div>
              <AreaChart
                data={listMainEnegry.length !== 0 ? listMainEnegry[0] : []}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              style={{
                marginRight: '0.5%',
                marginLeft: '0.5%',
              }}
            >
              <div style={{ padding: '1px', fontSize: '1rem' }}>
                <TimelineIcon style={{ color: '#00CC33' }} />
                Biểu đồ năng lượng tiêu thụ
              </div>
              <RealTimeColumn
                data={listMainEnegry.length !== 0 ? listMainEnegry[1] : []}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3} style={{ backgroundColor: '#FFFFFF' }}>
          <Grid
            item
            xs={12}
            style={{
              borderBottom: '2px solid #00CC00',
              marginRight: '4%',
              marginLeft: '4%',
            }}
          >
            <div
              style={{
                padding: '5px',
                fontSize: '1rem',
                fontWeight: '800',
                textAlign: 'center',
              }}
            >
              Thông số đồng hồ
            </div>
          </Grid>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                marginRight: '4%',
                marginLeft: '4%',
              }}
            >
              <div
                style={{ padding: '5px', fontSize: '1rem', fontWeight: '800' }}
              >
                <WbSunnyIcon style={{ color: '#ff0000' }} />
                Tần số:
              </div>
              <Gauge1
                data={
                  listMainLast.length !== 0
                    ? listMainLast[0]
                      ? (listMainLast[0].frequency / 100).toFixed(3)
                      : 'NaN'
                    : 'NaN'
                }
                id={'gauge-chart1'}
                level={30}
                unit={'Hz'}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              marginRight: '4%',
              marginLeft: '4%',
              borderBottom: '2px solid #00CC00',
            }}
          >
            <div style={{ marginTop: '5px', fontSize: '1rem' }}>
              <WbSunnyIcon style={{ color: '#ff0000' }} />
              Điện áp:
            </div>
            <div
              style={{
                fontSize: '1.5em',
                textAlign: 'center',
                paddingBottom: '15%',
              }}
            >
              {listMainLast.length !== 0
                ? listMainLast[0]
                  ? listMainLast[0].voltage
                  : 'NaN'
                : 'NaN'}{' '}
              V
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              marginRight: '4%',
              marginLeft: '4%',
              borderBottom: '2px solid #00CC00',
            }}
          >
            <div style={{ marginTop: '5px', fontSize: '1rem' }}>
              <WbSunnyIcon style={{ color: '#ff0000' }} />
              Hệ số công suất:
            </div>
            <div
              style={{
                fontSize: '1.5em',
                textAlign: 'center',
                paddingBottom: '15%',
              }}
            >
              {listMainLast.length !== 0
                ? listMainLast[0]
                  ? listMainLast[0].powerfactor
                  : 'NaN'
                : 'NaN'}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              marginRight: '4%',
              marginLeft: '4%',
              borderBottom: '2px solid #00CC00',
            }}
          >
            <div style={{ marginTop: '5px', fontSize: '1rem' }}>
              <WbSunnyIcon style={{ color: '#ff0000' }} />
              Dòng điện:
            </div>
            <div
              style={{
                fontSize: '1.5em',
                textAlign: 'center',
                paddingBottom: '15%',
              }}
            >
              {listMainLast.length !== 0
                ? listMainLast[0]
                  ? listMainLast[0].current
                  : 'NaN'
                : 'NaN'}
              A
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              marginRight: '4%',
              marginLeft: '4%',
              borderBottom: '2px solid #00CC00',
            }}
          >
            <div style={{ marginTop: '5px', fontSize: '1rem' }}>
              <WbSunnyIcon style={{ color: '#ff0000' }} />
              Công suất:
            </div>
            <div
              style={{
                fontSize: '1.5em',
                textAlign: 'center',
                paddingBottom: '15%',
              }}
            >
              {listMainLast.length !== 0
                ? listMainLast[0]
                  ? listMainLast[0].power
                  : 'NaN'
                : 'NaN'}
              kW
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
AdminHomePage.propTypes = {
  deviceActionsCreators: PropTypes.shape({
    refeshMainLast: PropTypes.func,
  }),
  listMainLast: PropTypes.array,
  listMainEnegry: PropTypes.array,
  listPriceNew: PropTypes.array,
  listMainCalculatorEnegry: PropTypes.array,
  redirectToReferrer: PropTypes.bool,
  weatherActionsCreators: PropTypes.shape({
    refeshWeather: PropTypes.func,
  }),
  listWeather: PropTypes.array,
};
const mapStateToProps = state => {
  return {
    ...state,
    listWeather: state.weather.listWeather,
    listMainLast: state.devices.listMainLast,
    listMainEnegry: state.devices.listMainEnegry,
    redirectToReferrer: state.auth.redirectToReferrer,
    listPriceNew: state.prices.listPriceNew,
    listMainCalculatorEnegry: state.devices.listMainCalculatorEnegry,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
    weatherActionsCreators: bindActionCreators(weatherActions, dispatch),
    priceActionsCreators: bindActionCreators(priceActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(AdminHomePage),
);
