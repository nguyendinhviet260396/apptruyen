import React, { Component} from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Gauge } from '@ant-design/charts';
import PropTypes from 'prop-types';

class Gauge extends Component {

    render(){
        const data = 12;
        const config = {
            title: {
              visible: false,
              text: 'viet nguyen',
            },
            width: 200,
            height: 200,  
            value: data,
            min: 0,
            max: 100,
            range: [0, 100],
            color: ['l(0) 0:#0000ff 1:#ffcc00'],
            axis: {
              offset: -15,
              tickLine: {
                visible: true,
                length: 10,
              },
              label: { visible: false },
            },
            pivot: {
              visible: true,
              thickness: 10,
              pointer: {
                visible: true,
                style: { fill: '#e22354' },
              },
              pin: {
                visible: true,
                style: { fill: '#e8e6ea' },
              },
            },
            statistic: {
              visible: true,
              position: ['50%', '100%'],
              text: `${data} %`,
              color: '#2e3033',
              size: 40,
            },
          };
          return ( 
                      <Gauge {...config} /> 
          );
    }

}

Gauge.propTypes={
  classes:PropTypes.object,
}

export default  withStyles(styles)(Gauge);