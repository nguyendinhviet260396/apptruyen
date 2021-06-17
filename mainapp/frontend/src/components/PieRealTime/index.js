import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts";
class PieRealTime extends Component { 

    render() {
        const {dataSeries,dataLabels}= this.props
        const series=dataSeries;
        const options = {
            chart: {
              width: '100%',
              type: 'pie',
              height: 230,
            },
            //colors: ['#CC0000', '#00CC00'],
            labels: dataLabels,
            title: {
              text:"compares",
              align: 'left',
              margin: 10,
              offsetX: 0,
              offsetY: 0,
              floating: false,
              style: {
                fontSize:  '16px',
                fontWeight:  'bold',
                fontFamily:  undefined,
                color:  '#263238'
              }
            },

            markers: {
              size: 0,  
              style: 'hollow',
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          };
        
        return (
              <ReactApexChart
                options={options}
                series={series}
                type="pie"
                height='230px'
                width='100%'
              />
          );
    }
}
PieRealTime.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(PieRealTime);