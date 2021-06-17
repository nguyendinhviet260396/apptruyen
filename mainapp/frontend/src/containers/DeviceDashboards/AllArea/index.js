import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as deviceActions from './../../../actions/devices';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import hocaImg from './../../../assets/images/hoca.jpg';
import santhuongImg from './../../../assets/images/santhuong.jpg';
import solar01 from './../../../assets/images/solar3.jpg';
import solar02 from './../../../assets/images/solar2.jpg';
import homeImg from './../../../assets/images/home.jpg';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EvStationIcon from '@material-ui/icons/EvStation';
import PowerIcon from '@material-ui/icons/Power';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CropRotateIcon from '@material-ui/icons/CropRotate';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import PublicIcon from '@material-ui/icons/Public';
import HomeIcon from '@material-ui/icons/Home';
import { Redirect } from 'react-router-dom';
class AllArea extends Component {
  componentDidMount() {
    const interval = setInterval(() => {
      const { deviceActionsCreators } = this.props;
      const {
        refeshHouseArea,
        refeshFishLakeArea,
        refeshSolar01,
        refeshSolar02,
      } = deviceActionsCreators;
      refeshHouseArea();
      refeshFishLakeArea('fish_tank_area');
      refeshSolar01('solar_01');
      refeshSolar02('solar_02');
    }, 1000);
    return () => clearInterval(interval);
  }

  render() {
    const {
      listFishLake,
      listHouseArea,
      listSolar01,
      listSolar02,
      redirectToReferrer,
    } = this.props;
    if (
      redirectToReferrer === false &&
      localStorage.getItem('token:') === null
    ) {
      return <Redirect to={'/'} />;
    }
    return (
      <Grid container spacing={0} style={{ width: '100%', paddingTop: '50px' }}>
        <Grid item xs={12} md={6}>
          <Grid
            item
            xs={12}
            md={12}
            style={{ borderBottom: '2px solid #00CC00' }}
          >
            <div
              style={{ padding: '5px', fontSize: '1.5rem', fontWeight: '800' }}
            >
              <PublicIcon style={{ color: '#00CC33' }} />
              Giám sát tổng quát
            </div>
          </Grid>
          <Grid container style={{ marginTop: '1%', marginBottom: '2%' }}>
            <Grid
              item
              xs={12}
              md={12}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '0.2%',
              }}
            >
              <div
                style={{
                  padding: '5px',
                  fontSize: '1.3rem',
                  textAlign: 'center',
                  width: '90%',
                  marginTop: '1%',
                  borderBottom: '2px solid #00CC00',
                  fontWeight: '600',
                }}
              >
                <div>
                  <HomeIcon style={{ color: '#00CC33' }} />
                  TOÀN NHÀ
                </div>
              </div>
              <a
                href="/housearea"
                style={{ marginRight: '5%', marginLeft: '5%' }}
              >
                <img
                  src={homeImg}
                  alt="solar01"
                  style={{
                    marginTop: '2%',
                    width: '100%',
                  }}
                />
              </a>
              <div
                style={{
                  padding: '5px',
                  fontSize: '1.2rem',
                  width: '90%',
                  marginTop: '1%',
                  border: '2px solid #00CC00',
                  fontWeight: '600',
                  borderRadius: '10px',
                }}
              >
                <table className="table table-sm table-borderless">
                  <tbody>
                    <tr className="bg-success" style={{ color: '#fff' }}>
                      <td>
                        <CheckCircleIcon />
                        Trạng thái:
                      </td>
                      <td>Bình thường</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <PowerIcon style={{ color: '#00cc33' }} />
                        Công suất hiện tại:
                      </td>
                      <td>
                        {listHouseArea.length !== 0
                          ? ((listHouseArea[0].totalactivepower)/1000).toFixed(3)
                          : 'NaN'}
                      </td>
                      <td>kW</td>
                    </tr>
                    <tr>
                      <td>
                        <EvStationIcon style={{ color: '#00cc33' }} />
                        Năng lượng tiêu thụ:
                      </td>
                      <td>
                        {listHouseArea.length !== 0
                          ? listHouseArea[0].totalactiveennegry
                          : 'NaN'}
                      </td>
                      <td>kWh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            item
            xs={12}
            md={12}
            style={{ borderBottom: '2px solid #00CC00' }}
          >
            <div
              style={{ padding: '5px', fontSize: '1.5rem', fontWeight: '800' }}
            >
              <LocationOnIcon style={{ color: '#00CC33' }} />
              Giám sát khu vực
            </div>
          </Grid>
          <Grid container spacing={1} style={{ marginTop: '1%' }}>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '0.2%',
              }}
            >
              <div
                style={{
                  padding: '5px',
                  fontSize: '1rem',
                  width: '80%',
                  marginTop: '1%',
                  border: '2px solid #00CC00',
                  fontWeight: '500',
                  borderRadius: '10px',
                }}
              >
                <table className="table table-sm table-borderless">
                  <tbody>
                    <tr className="bg-success" style={{ color: '#fff' }}>
                      <td>
                        <CheckCircleIcon />
                        Trạng thái:
                      </td>
                      <td>Bình thường</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <LocationOnIcon style={{ color: '#00cc33' }} />
                        Khu vực:
                      </td>
                      <td>Hồ cá</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <PowerIcon style={{ color: '#00cc33' }} />
                        Công suất hiện tại:
                      </td>
                      <td>
                        {listFishLake.length !== 0
                          ? ((listFishLake[0].power)/1000).toFixed(3)
                          : 'NaN'}
                      </td>
                      <td>kW</td>
                    </tr>
                    <tr>
                      <td>
                        <EvStationIcon style={{ color: '#00cc33' }} />
                        Năng lượng tiêu thụ:
                      </td>
                      <td>
                        {listFishLake.length !== 0
                          ? listFishLake[0].enegry
                          : 'NaN'}
                      </td>
                      <td>kWh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                href="/hocaarea"
                style={{ marginRight: '10%', marginLeft: '10%' }}
              >
                <img
                  src={hocaImg}
                  alt="solar01"
                  style={{
                    marginTop: '2%',
                    width: '100%',
                  }}
                />
              </a>
              <div className=" ml-5 mr-5 mb-1 fa-1x w-75">
                %Công suất tiêu thụ :
              </div>
              <div className="progress ml-5 mr-5  w-75">
                <div
                  className="progress-bar bg-success"
                  style={{
                    width: `${
                      listFishLake.length !== 0 && listSolar02.length !== 0
                        ? (
                            (listFishLake[0].power * 100) /
                            (listFishLake[0].power + listSolar02[0].power)
                          ).toFixed(2)
                        : 'NaN'
                    }%`,
                  }}
                >
                  {listFishLake.length !== 0 && listSolar02.length !== 0
                    ? (
                        (listFishLake[0].power * 100) /
                        (listFishLake[0].power + listSolar02[0].power)
                      ).toFixed(2)
                    : 'NaN'}
                  %
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '0.2%',
              }}
            >
              <div
                style={{
                  padding: '5px',
                  fontSize: '1rem',
                  width: '80%',
                  marginTop: '1%',
                  border: '2px solid #00CC00',
                  fontWeight: '500',
                  borderRadius: '10px',
                }}
              >
                <table class="table table-sm table-borderless">
                  <tbody>
                    <tr className="bg-success" style={{ color: '#fff' }}>
                      <td>
                        <CheckCircleIcon />
                        Trạng thái:
                      </td>
                      <td>Bình thường</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <LocationOnIcon style={{ color: '#00cc33' }} />
                        Khu vực:
                      </td>
                      <td>Sân thượng</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <PowerIcon style={{ color: '#00cc33' }} />
                        Công suất hiện tại:
                      </td>
                      <td>
                        {listFishLake.length !== 0
                          ? ((listFishLake[0].power)/1000).toFixed(3)-((listFishLake[0].power)/1000).toFixed(3)
                          : 'NaN'}
                      </td>
                      <td>kW</td>
                    </tr>
                    <tr>
                      <td>
                        <EvStationIcon style={{ color: '#00cc33' }} />
                        Năng lượng tiêu thụ:
                      </td>
                      <td>
                        {listFishLake.length !== 0
                          ? listFishLake[0].enegry-listFishLake[0].enegry
                          : 'NaN'}
                      </td>
                      <td>kWh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                href="/santhuongarea"
                style={{ marginRight: '10%', marginLeft: '10%' }}
              >
                <img
                  src={santhuongImg}
                  alt="solar01"
                  style={{
                    marginTop: '2%',
                    width: '100%',
                  }}
                />
              </a>
              <div className=" ml-5 mr-5 mb-1 fa-1x w-75 ">
                % Công suất tiêu thụ:
              </div>
              <div className="progress ml-5 mr-5  w-75">
                <div
                  className="progress-bar bg-danger"
                  style={{
                    width: `${
                      listFishLake.length !== 0 && listSolar02.length !== 0
                        ? (
                            (listSolar02[0].power * 100) /
                            (listFishLake[0].power + listSolar02[0].power)
                          ).toFixed(2)
                        : 'NaN'
                    }%`,
                  }}
                >
                  {listFishLake.length !== 0 && listSolar02.length !== 0
                    ? (
                        (listSolar02[0].power * 100) /
                        (listFishLake[0].power + listSolar02[0].power)
                      ).toFixed(2)
                    : 'NaN'}
                  %
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            style={{ borderBottom: '2px solid #00CC00' }}
          >
            <div
              style={{ padding: '5px', fontSize: '1.5rem', fontWeight: '800' }}
            >
              <WbSunnyIcon style={{ color: '#FF0000' }} />
              Giám sát solar
            </div>
          </Grid>
          <Grid container spacing={1} style={{ marginTop: '1%' }}>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '0.2%',
              }}
            >
              <div
                style={{
                  padding: '5px',
                  fontSize: '1rem',
                  width: '80%',
                  marginTop: '1%',
                  border: '2px solid #00CC00',
                  fontWeight: '500',
                  borderRadius: '10px',
                }}
              >
                <table class="table table-sm table-borderless">
                  <tbody>
                    <tr className="bg-success" style={{ color: '#fff' }}>
                      <td>
                        <CheckCircleIcon />
                        Trạng thái:
                      </td>
                      <td>Bình thường</td>
                    </tr>
                    <tr>
                      <td>
                        <WbSunnyIcon style={{ color: '#FF0000' }} />
                        Solar:
                      </td>
                      <td>Dự án Công ty EMS</td>
                    </tr>
                    <tr>
                      <td>
                        <BorderColorIcon style={{ color: '#00cc33' }} />
                        Công suất thiết kế:
                      </td>
                      <td>kW</td>
                    </tr>
                    <tr>
                      <td>
                        <CropRotateIcon style={{ color: '#00cc33' }} />
                        Inverter::
                      </td>
                      <td>Sungrow</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                href="/solar1area"
                style={{ marginRight: '10%', marginLeft: '10%' }}
              >
                <img
                  src={solar01}
                  alt="solar01"
                  style={{
                    marginTop: '2%',
                    width: '100%',
                  }}
                />
              </a>
              <div className=" ml-5 mr-5 mb-1 fa-1x w-75">
                Công suất cung cấp Solar I
              </div>
              <div className="progress ml-5 mr-5 mb-5 w-75">
                <div
                  className="progress-bar bg-success"
                  style={{
                    width: `${
                      listSolar01.length !== 0 && listSolar02.length !== 0
                        ? (
                            (listSolar01[0].power * 100) /
                            (listSolar01[0].power + listSolar02[0].power)
                          ).toFixed(2)
                        : 'NaN'
                    }%`,
                  }}
                >
                  {listSolar01.length !== 0 && listSolar02.length !== 0
                    ? (
                        (listSolar01[0].power * 100) /
                        (listSolar01[0].power + listSolar02[0].power)
                      ).toFixed(2)
                    : 'NaN'}
                  %
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '0.2%',
              }}
            >
              <div
                style={{
                  padding: '5px',
                  fontSize: '1rem',
                  width: '80%',
                  marginTop: '1%',
                  border: '2px solid #00CC00',
                  fontWeight: '500',
                  borderRadius: '10px',
                }}
              >
                <table class="table table-sm table-borderless">
                  <tbody>
                    <tr className="bg-success" style={{ color: '#fff' }}>
                      <td>
                        <CheckCircleIcon />
                        Trạng thái:
                      </td>
                      <td>Bình thường</td>
                    </tr>
                    <tr>
                      <td>
                        <WbSunnyIcon style={{ color: '#FF0000' }} />
                        Solar:
                      </td>
                      <td>Dự án công ty SAVINA</td>
                    </tr>
                    <tr>
                      <td>
                        <BorderColorIcon style={{ color: '#00cc33' }} />
                        Công suất thiết kế:
                      </td>
                      <td>kW</td>
                    </tr>
                    <tr>
                      <td>
                        <CropRotateIcon style={{ color: '#00cc33' }} />
                        Inverter::
                      </td>
                      <td>ABB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                href="/solar2area"
                style={{ marginRight: '10%', marginLeft: '10%' }}
              >
                <img
                  src={solar02}
                  alt="solar01"
                  style={{
                    marginTop: '2%',
                    width: '100%',
                  }}
                />
              </a>
              <div className=" ml-5 mr-5 mb-1 fa-1x w-75 ">
                Công suất cung cấp Solar II
              </div>
              <div className="progress ml-1 mr-1 mb-1  w-75">
                <div
                  className="progress-bar bg-danger"
                  style={{
                    width: `${
                      listSolar01.length !== 0 && listSolar02.length !== 0
                        ? (
                            (listSolar02[0].power * 100) /
                            (listSolar01[0].power + listSolar02[0].power)
                          ).toFixed(2)
                        : 'NaN'
                    }%`,
                  }}
                >
                  {listSolar01.length !== 0 && listSolar02.length !== 0
                    ? (
                        (listSolar02[0].power * 100) /
                        (listSolar01[0].power + listSolar02[0].power)
                      ).toFixed(2)
                    : 'NaN'}
                  %
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
AllArea.propTypes = {
  classes: PropTypes.object,
  listHouseArea: PropTypes.array,
  deviceActionsCreators: PropTypes.shape({
    refeshHouseArea: PropTypes.func,
    refeshFishLakeArea: PropTypes.func,
    refeshSolar01: PropTypes.func,
    refeshSolar02: PropTypes.func,
  }),
};
const mapStateToProps = state => {
  console.log(state.devices);
  return {
    ...state,
    listHouseArea: state.devices.listHouseArea,
    listFishLake: state.devices.listFishLake,
    listSolar01: state.devices.listSolar01,
    listSolar02: state.devices.listSolar02,
    redirectToReferrer: state.auth.redirectToReferrer,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(AllArea),
);
