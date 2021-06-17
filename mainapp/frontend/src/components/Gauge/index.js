import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ReactApexCharts from 'react-apexcharts'

class Gauge extends Component {

      render() {
        const {series} = this.props;
        const options = {
          chart: {
            type: 'radialBar',
            offsetY: -10
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              dataLabels: {
                name: {
                  fontSize: '150%',
                  color: '#0000EE',
                  offsetY: 120,
                  fontWeight: 800
                },
                value: {
                  offsetY: 0,
                  fontSize: '120%',
                  color: '#0000EE',
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              }
            }
          },
          colors: [function({ value, seriesIndex, w }) {
            if (value < 40) {
                return '#FF0000'
            } else {
                return '#66CD00'
            }
          }],
          fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91],
            },
          },
          stroke: {
            dashArray: 4
          },
          labels: ['Hiệu Suất'],
        }
      
        return (

              <ReactApexCharts 
              options={options} 
              series={series} 
              type="radialBar"
              height= {240} 
              width='100%' />

        );
    }
}
Gauge.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(Gauge);