import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GaugeChart from 'react-gauge-chart'


class Gauge extends Component {

    render(){
        const {data,id,level,unit} = this.props;
        return(
          <GaugeChart id={id}
              nrOfLevels={level} 
              colors={["#FF5F6D", "#FFC371","#FF000","#00CC00"]} 
              textColor={"#0040FF"}
              arcWidth={0.3} 
              percent={parseFloat(data)} 
              needleColor={"#FF0000"}
              arcPadding = {0.01}
              cornerRadius={100}
              marginInPercent={0.08}
              animate={true}
              formatTextValue={value => value + `${unit}`}
              />
        )
    }
}
Gauge.propTypes={
    classes:PropTypes.object,
} 
export default withStyles(styles)(Gauge);