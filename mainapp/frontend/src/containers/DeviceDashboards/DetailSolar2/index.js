import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as deviceActions from './../../../actions/devices';
import * as weatherActions from './../../../actions/weather';
import * as priceActions from './../../../actions/prices';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import solar02 from './../../../assets/images/solar2.jpg';
import AreaSolar from '../../../components/AreaSolar';
class DetailSolar2 extends Component {
  componentDidMount() {
    const interval = setInterval(() => {
      const {
        deviceActionsCreators,
        weatherActionsCreators,
        priceActionsCreators,
      } = this.props;
      const {
        refeshSolar02,
        refeshPowerSolar02,
        refeshCalculatorEnegry,
      } = deviceActionsCreators;
      const { refeshWeather } = weatherActionsCreators;
      const { filterPriceNew } = priceActionsCreators;
      filterPriceNew();
      refeshCalculatorEnegry('solar_02');
      refeshWeather('Hanoi');
      refeshSolar02('solar_02');
      refeshPowerSolar02('solar_02');
    }, 1000);
    return () => clearInterval(interval);
  }
  render() {
    const {
      listSolar02,
      listPowerSolar02,
      listWeather,
      redirectToReferrer,
      listPriceNew,
      listCalculatorEnegry,
    } = this.props;
    if (
      redirectToReferrer === false &&
      localStorage.getItem('token:') === null
    ) {
      return <Redirect to={'/'} />;
    }
    return (
      <AreaSolar
        title={'Delail Solar II'}
        data={listSolar02}
        datapower={listPowerSolar02}
        dataweather={listWeather}
        project={'Solar: SAVINA Project 15kW '}
        solarImg={solar02}
        listPriceNew={listPriceNew}
        listCalculatorEnegry={listCalculatorEnegry}
      />
    );
  }
}
DetailSolar2.propTypes = {
  classes: PropTypes.object,
  listSolar02: PropTypes.array,
  listWeather: PropTypes.array,
  listPowerSolar02: PropTypes.array,
  listPriceNew: PropTypes.array,
  listCalculatorEnegry: PropTypes.array,
  deviceActionsCreators: PropTypes.shape({
    refeshSolar02: PropTypes.func,
    refeshPowerSolar02: PropTypes.func,
  }),
};
const mapStateToProps = state => {
  return {
    ...state,
    listSolar02: state.devices.listSolar02,
    listPowerSolar02: state.devices.listPowerSolar02,
    listWeather: state.weather.listWeather,
    redirectToReferrer: state.auth.redirectToReferrer,
    listPriceNew: state.prices.listPriceNew,
    listCalculatorEnegry: state.devices.listCalculatorEnegry,
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
  connect(mapStateToProps, mapDispatchToProps)(DetailSolar2),
);
