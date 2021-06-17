import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import PowerIcon from '@material-ui/icons/Power';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import EvStationIcon from '@material-ui/icons/EvStation';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SpeedIcon from '@material-ui/icons/Speed';
import MapIcon from '@material-ui/icons/Map';
import TimelineIcon from '@material-ui/icons/Timeline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AreaChart from './../AreaChart';
import RealTimeColumn from './../RealTimeColumn';
import Gauge1 from '../Gauge1';
class AreaManage extends Component {
  render () {
    const {
      areaImg,
      titleImg,
      data,
      datapower,
      title,
    } = this.props;
    return (
      <Grid container spacing={1} style={{width:'100%',paddingTop:'50px'}}>
      <Grid container spacing={1} style={{maxHeight:'40px'}}>
        <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%',marginTop:'0.5%'}}>
        <div style={{fontSize:'1.5rem',fontWeight:'800',textAlign:'center'}}><MapIcon style={{color:'#00CC33',fontSize:'inherit'}} />{title}</div>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>
        <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
          <div style={{padding:'5px',fontSize:'1rem',fontWeight:'800',textAlign:'center'}}></div>
        </Grid>
        <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1.3rem',fontWeight:'800'}}><LocationOnIcon style={{color:'#00CC33',fontSize:'inherit'}} />{titleImg}</div>
                <img src={areaImg}
                        alt="areaImg" 
                        style={{
                        marginTop:'1%',
                        marginLeft:'5%',
                        marginRight:'5%',
                        marginBottom:'3%',
                        width:'90%',
                      }}/>
              </Grid>
        <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
          <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><SpeedIcon style={{color:'#00CC33',fontSize:'inherit'}} />Hệ số công suất</div>
          <Gauge1 data ={data.length !==0 ? (data[0].power > 0 ? ((data[0].power * 10)/(data[0].voltage * data[0].current)/100).toFixed(4) :0 ) :"NaN"} id ={'gauge-chart1'} level = {60} unit = {'%'}/>
        </Grid>
        <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%'}}>
          <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><AccessTimeIcon style={{color:'#00CC33',fontSize:'inherit'}} />Tần số</div>
          <Gauge1 data ={data.length !==0 ? (data[0].frequency/100).toFixed(4):"NaN"} id ={'gauge-chart2'} level = {60} unit = {'Hz'}/>
        </Grid>
      </Grid>
        <Grid item xs={12} md={6}>
          <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
            <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800',textAlign:'center'}}></div>
          </Grid>
          <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
            <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><CheckCircleIcon style={{color:'#00CC33',fontSize:'inherit'}} />Trạng thái</div>
          </Grid>
          <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
            <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><TimelineIcon style={{color:'#00CC33',fontSize:'inherit'}} />Biểu đồ công suất tổng</div>
            <AreaChart data = {datapower.length !==0 ? datapower[0]:[]}/>
          </Grid>
          <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%'}}>
            <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><TimelineIcon style={{color:'#00CC33',fontSize:'inherit'}} />Biểu đồ năng lượng tổng</div>
            <RealTimeColumn data = {datapower.length !==0 ? datapower[1]:[]}/>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
            <div style={{padding:'5px',fontSize:'1rem',fontWeight:'800'}}></div>
          </Grid>
          <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'25%'}}>
            <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'600'}}><PowerSettingsNewIcon style={{color:'#00CC33',fontSize:'inherit'}} />Điện áp:</div>
            <div style={{padding:'4vh',fontSize:'2rem',fontWeight:'600',textAlign:'center'}}>{data.length !==0 ? data[0].voltage:"NaN"} V</div>
          </Grid>
          <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'25%'}}>
            <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'600'}}><FlashOnIcon style={{color:'#00CC33',fontSize:'inherit'}} />Dòng điện:</div>
            <div style={{padding:'4vh',fontSize:'2rem',fontWeight:'600',textAlign:'center'}}>{data.length !==0 ? data[0].current:"NaN"} A</div>
          </Grid>
          <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'25%'}}>
            <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'600'}}><PowerIcon style={{color:'#00CC33',fontSize:'inherit'}} />Công suất:</div>
            <div style={{padding:'4vh',fontSize:'2rem',fontWeight:'600',textAlign:'center'}}>{data.length !==0 ? data[0].power:"NaN"} kW</div>
          </Grid>
          <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'25%'}}>
            <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'600'}}><EvStationIcon style={{color:'#00CC33',fontSize:'inherit'}} />Năng lượng tiêu thụ:</div>
            <div style={{padding:'4vh',fontSize:'2rem',fontWeight:'600',textAlign:'center'}}>{data.length !==0 ? data[0].enegry:"NaN"} kWh</div>
          </Grid>
        </Grid>
    </Grid>
    )
  } 
}
AreaManage.propTypes={
    classes:PropTypes.object,
 }
export default withStyles(styles)(AreaManage);



