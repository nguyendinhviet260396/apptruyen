import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import * as deviceActions from './../../../actions/devices';
import * as weatherActions from './../../../actions/weather';
import * as priceActions from './../../../actions/prices';
import PropTypes from 'prop-types';
import solar01 from './../../../assets/images/solar3.jpg';
import AreaSolar from '../../../components/AreaSolar';
class DetailSolar1 extends Component {
  componentDidMount() {
    const interval = setInterval(() => {
      const {
        deviceActionsCreators,
        weatherActionsCreators,
        priceActionsCreators,
      } = this.props;
      const {
        refeshSolar01,
        refeshPowerSolar01,
        refeshCalculatorEnegry,
      } = deviceActionsCreators;
      const { refeshWeather } = weatherActionsCreators;
      const { filterPriceNew } = priceActionsCreators;
      filterPriceNew();
      refeshCalculatorEnegry('solar_01');
      refeshWeather('Hanoi');
      refeshSolar01('solar_01');
      refeshPowerSolar01('solar_01');
    }, 1000);
    return () => clearInterval(interval);
  }
  render() {
    const {
      listSolar01,
      listPowerSolar01,
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
        title={'Delail Solar I'}
        data={listSolar01}
        datapower={listPowerSolar01}
        dataweather={listWeather}
        project={'Solar: EMS Project 5kW '}
        listPriceNew={listPriceNew}
        listCalculatorEnegry={listCalculatorEnegry}
        solarImg={solar01}
      />
    );
  }
}
DetailSolar1.propTypes = {
  classes: PropTypes.object,
  listSolar01: PropTypes.array,
  listPowerSolar01: PropTypes.array,
  listPriceNew: PropTypes.array,
  listCalculatorEnegry: PropTypes.array,
  deviceActionsCreators: PropTypes.shape({
    refeshSolar01: PropTypes.func,
    refeshPowerSolar01: PropTypes.func,
  }),
  weatherActionsCreators: PropTypes.shape({
    refeshWeather: PropTypes.func,
  }),
  listWeather: PropTypes.array,
};
const mapStateToProps = state => {
  return {
    ...state,
    listSolar01: state.devices.listSolar01,
    listPowerSolar01: state.devices.listPowerSolar01,
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
  connect(mapStateToProps, mapDispatchToProps)(DetailSolar1),
);
