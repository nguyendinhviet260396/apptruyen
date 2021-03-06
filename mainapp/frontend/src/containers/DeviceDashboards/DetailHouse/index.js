import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as deviceActions from './../../../actions/devices';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PowerIcon from '@material-ui/icons/Power';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import EvStationIcon from '@material-ui/icons/EvStation';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SpeedIcon from '@material-ui/icons/Speed';
import MapIcon from '@material-ui/icons/Map';
import Gauge1 from './../../../components/Gauge1';
import AreaChart from './../../../components/AreaChart';
import RealTimeColumn from './../../../components/RealTimeColumn';
import TimelineIcon from '@material-ui/icons/Timeline';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';

class DetailHouse extends Component {
  componentDidMount(){
    const interval = setInterval(()=>{
      const {deviceActionsCreators} = this.props;
      const {refeshHouseArea,refeshPowerHouseArea}=deviceActionsCreators;
      refeshHouseArea();
      refeshPowerHouseArea();
    },1000);
    return ()=>clearInterval(interval)
  } 
  render () {
    const {listHouseArea,listPowerHouseArea,redirectToReferrer}= this.props;
    if (redirectToReferrer === false && localStorage.getItem("token:") === null) {
      return (<Redirect to={'/'}/>)
  }
    return (
          <Grid container spacing={1} style={{width:'100%',paddingTop:'50px'}}>
            <Grid container spacing={1} style={{maxHeight:'40px'}}>
              <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%',marginTop:'0.5%'}}>
              <div style={{fontSize:'1.5rem',fontWeight:'800',textAlign:'center'}}><MapIcon style={{color:'#00CC33',fontSize:'inherit'}} />CHI TI???T V??? TO??N NH??</div>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1rem',fontWeight:'800',textAlign:'center'}}></div>
              </Grid>
              <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><SpeedIcon style={{color:'#00CC33',fontSize:'inherit'}} />T???n s???</div>
                    <Gauge1 data ={listHouseArea.length !==0 ?((listHouseArea[0].frequency/100).toFixed(3)):0} id ={'gauge-chart1'} level = {30} unit = {'Hz'}/>
              </Grid>
              <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><AccessTimeIcon style={{color:'#00CC33',fontSize:'inherit'}} />H??? s??? c??ng su???t</div>
                <Gauge1 data ={listHouseArea.length !==0 ? ((listHouseArea[0].totalpowerfactor).toFixed(3)):0} id ={'gauge-chart2'} level = {60} unit = {'%'}/>
              </Grid>
              <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><EvStationIcon style={{color:'#00CC33',fontSize:'inherit'}} />N??ng l?????ng ti??u th???</div>
                <div style ={{
                        marginTop:'5%',
                        marginLeft:'27%',
                        borderColor:'#ff0000',
                        marginRight:'27%',
                        padding:'22%',
                        fontWeight:'800',
                        fontSize:'1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color:'#FFF',
                        background: '#00CC33',
                        clipPath: 'circle(50%)',
                        height: '5em',
                        width: '5em',
                      }}>
                        {listHouseArea.length !==0 ?(listHouseArea[0].totalactiveennegry).toFixed(2):"NaN"} kWh
                      </div>
              </Grid>
            </Grid>
              <Grid item xs={12} md={6}>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800',textAlign:'center'}}></div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><CheckCircleIcon style={{color:'#00CC33',fontSize:'inherit'}} />Tr???ng th??i</div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><TimelineIcon style={{color:'#00CC33',fontSize:'inherit'}} />Bi???u ????? c??ng su???t t???ng</div>
                  <AreaChart data = {listPowerHouseArea.length !==0 ? listPowerHouseArea[0]:[]}/>
                </Grid>
                <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><TimelineIcon style={{color:'#00CC33',fontSize:'inherit'}} />Bi???u ????? n??ng l?????ng t???ng</div>
                  <RealTimeColumn data = {listPowerHouseArea.length !==0 ? listPowerHouseArea[1]:[]}/>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1rem',fontWeight:'800'}}></div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><PowerSettingsNewIcon style={{color:'#00CC33',fontSize:'inherit'}} />??i???n ??p:</div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                      <tbody>
                        <tr>
                          <td style={{maxWidth:'20%'}}><PowerSettingsNewIcon style={{color:'#00CC33',fontSize:'inherit'}} /> Pha A</td>
                          <td style={{maxWidth:'60%'}}>{listHouseArea.length !==0 ?listHouseArea[0].voltage_pa:"NaN"} </td>
                          <td style={{maxWidth:'20%'}}>V</td>
                        </tr>
                        <tr>
                          <td style={{maxWidth:'20%'}}> <PowerSettingsNewIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha B</td>
                          <td style={{maxWidth:'60%'}}>{listHouseArea.length !==0 ?listHouseArea[0].voltage_pb:"NaN"} </td>
                          <td style={{maxWidth:'20%'}}>V</td>
                        </tr>
                        <tr>
                          <td style={{maxWidth:'20%'}}> <PowerSettingsNewIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha C</td>
                          <td style={{maxWidth:'60%'}}>{listHouseArea.length !==0 ?listHouseArea[0].voltage_pc:"NaN"} </td>
                          <td style={{maxWidth:'20%'}}>V</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><FlashOnIcon style={{color:'#00CC33',fontSize:'inherit'}} />D??ng ??i???n</div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                      <tbody>
                        <tr  >
                          <td> <FlashOnIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha A</td>
                          <td>{listHouseArea.length !==0 ?listHouseArea[0].current_pa:"NaN"} </td>
                          <td>A</td>
                        </tr>
                        <tr>
                          <td><FlashOnIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha B</td>
                          <td>{listHouseArea.length !==0 ?listHouseArea[0].current_pb:"NaN"} </td>
                          <td>A</td>
                        </tr>
                        <tr>
                          <td><FlashOnIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha C</td>
                          <td>{listHouseArea.length !==0 ?listHouseArea[0].current_pc:"NaN"} </td>
                          <td>A</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><PowerIcon style={{color:'#00CC33',fontSize:'inherit'}} />C??ng su???t t??c d???ng</div>
                  <div style={{padding:'10px',fontSize:'1.2rem',fontWeight:'800',textAlign:'center'}}>{listHouseArea.length !==0 ?(listHouseArea[0].totalactivepower/1000).toFixed(3):"NaN"}  kW</div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                      <tbody>
                        <tr  >
                          <td> <PowerIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha A</td>
                          <td>{listHouseArea.length !==0 ?(listHouseArea[0].activepower_pa/1000).toFixed(3):"NaN"} </td>
                          <td>kW</td>
                        </tr>
                        <tr>
                          <td><PowerIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha B</td>
                          <td>{listHouseArea.length !==0 ?(listHouseArea[0].activepower_pb/1000).toFixed(3):"NaN"} </td>
                          <td>kW</td>
                        </tr>
                        <tr>
                          <td><PowerIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha C</td>
                          <td>{listHouseArea.length !==0 ?(listHouseArea[0].activepower_pc/1000).toFixed(3):"NaN"} </td>
                          <td>kW</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><SwapHorizontalCircleIcon style={{color:'#00CC33',fontSize:'inherit'}} />C??ng su???t ph???n kh??ng:</div>
                  <div style={{padding:'10px',fontSize:'1.2rem',fontWeight:'800',textAlign:'center'}}>{listHouseArea.length !==0 ?(listHouseArea[0].totalreactivepower/1000).toFixed(3):"NaN"}kVAr</div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                      <tbody>
                        <tr  >
                          <td> <SwapHorizontalCircleIcon style={{color:'#00CC33',fontSize:'inherit'}}/>Pha A</td>
                          <td>{listHouseArea.length !==0 ?(listHouseArea[0].reactivepower_pa/1000).toFixed(3):"NaN"} </td>
                          <td>kVAr</td>
                        </tr>
                        <tr>
                          <td><SwapHorizontalCircleIcon style={{color:'#00CC33',fontSize:'inherit'}}/>Pha B</td>
                          <td>{listHouseArea.length !==0 ?(listHouseArea[0].reactivepower_pb/1000).toFixed(3):"NaN"} </td>
                          <td>kVAr</td>
                        </tr>
                        <tr>
                          <td><SwapHorizontalCircleIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha C</td>
                          <td>{listHouseArea.length !==0 ?(listHouseArea[0].reactivepower_pc/1000).toFixed(3):"NaN"}</td>
                          <td>kVAr</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><SwapHorizontalCircleIcon style={{color:'#00CC33',fontSize:'inherit'}} />C??ng su???t bi???u ki???n:</div>
                  <div style={{padding:'10px',fontSize:'1.2rem',fontWeight:'800',textAlign:'center'}}>{listHouseArea.length !==0 ?(listHouseArea[0].totalapparentpower/1000).toFixed(3):"NaN"}kVA</div>
                </Grid>
              </Grid>
          </Grid>
    )
  } 
}
DetailHouse.propTypes={
  classes:PropTypes.object,
  listHouseArea: PropTypes.array,
  listPowerHouseArea: PropTypes.array,
  deviceActionsCreators:PropTypes.shape({
      refeshHouseArea:PropTypes.func,
      refeshPowerHouseArea:PropTypes.func,
  }),
}   
const mapStateToProps=(state)=>{
  return{
      ...state,
      listHouseArea:state.devices.listHouseArea,
      listPowerHouseArea:state.devices.listPowerHouseArea,
      redirectToReferrer:state.auth.redirectToReferrer,
  }
};
const mapDispatchToProps =(dispatch,props)=>{
  return{
      deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
  }
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(DetailHouse));


