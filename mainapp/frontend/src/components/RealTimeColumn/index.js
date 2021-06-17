import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import ReactApexChart from "react-apexcharts";
import PropTypes from 'prop-types';

class RealTimeColumn extends Component {

    render() {
        const {data} = this.props;
        const series = [{
              name: 'Năng lượng',
              data:data,
            }];
        const options =  {
              chart: {
                type: 'column',
                height: 300
              },
              plotOptions: {
                bar: {
                  colors: {
                    ranges: [{
                      from: -100,
                      to: -46,
                      color: '#F15B46'
                    }, {
                      from: -45,
                      to: 0,
                      color: '#FEB019'
                    }]
                  },
                  columnWidth: '80%',
                }
              },
              colors:['#00CC33'],
              dataLabels: {
                enabled: false,
              },
              yaxis: {
                title: {
                  // text: 'Growth',
                },
                labels: {
                  formatter: function (y) {
                    return y.toFixed(3) + "kWh";
                  }
                }
              },
              tooltip: {
                x: {
                  show: true,
                  format: 'yyyy-MMM-dd HH:mm:ss'
                }
              },
              xaxis: {
                type: 'datetime',
                labels: {
                  rotate: -90
                }
              }
            };
          
        return (
            <ReactApexChart 
            options={options} 
            series={series} 
            type="bar" 
            height={265} />
        );
    }
}
RealTimeColumn.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(RealTimeColumn);

