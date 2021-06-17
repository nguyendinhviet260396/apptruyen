import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import  {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as deviceActions from './../../../actions/devices';
import PropTypes from 'prop-types';
import hocaImg from './../../../assets/images/hoca.jpg';
import AreaManage from '../../../components/AreaManage';
class DetailHoCa extends Component {
  componentDidMount(){
    const interval = setInterval(()=>{
      const {deviceActionsCreators} = this.props;
      const {refeshFishLakeArea,refeshPowerFishLakeArea}=deviceActionsCreators;
      refeshFishLakeArea("fish_tank_area");
      refeshPowerFishLakeArea("fish_tank_area");
    },1000);
    return ()=>clearInterval(interval)
  } 
  render () {
    const {listFishLake,listPowerFishLake,redirectToReferrer} = this.props;
    if (redirectToReferrer === false &&  localStorage.getItem("token:") === null) {
      return (<Redirect to={'/'}/>)
  }
    return (
      <AreaManage 
      title = {"CHI TIẾT VỀ HỒ CÁ"}
      data = {listFishLake}
      datapower = {listPowerFishLake}
      titleImg ={" Khu vực hồ cá"}
      areaImg = {hocaImg}/>
    )
  } 
}
DetailHoCa.propTypes={
  classes:PropTypes.object,
  listFishLake: PropTypes.array,
  listPowerFishLake: PropTypes.array,
  deviceActionsCreators:PropTypes.shape({
    refeshFishLakeArea:PropTypes.func,
    refeshPowerFishLakeArea:PropTypes.func,
  }),
}   
const mapStateToProps=(state)=>{
  return{
      ...state,
      listFishLake:state.devices.listFishLake,
      listPowerFishLake:state.devices.listPowerFishLake,
      redirectToReferrer:state.auth.redirectToReferrer,
  }
};
const mapDispatchToProps =(dispatch,props)=>{
  return{
      deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
  }
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(DetailHoCa));




