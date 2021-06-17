import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts";
class ColumnChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          options: {
            dataLabels: {
                enabled: true,
                style: {
                  colors: ['#F44336']
                },
                formatter: function (val) {
                    return val + "%"
                  },
              },
              title: {
                text:"Trend Enegry",
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
              pie: {
                customScale: 0.8,
                expandOnClick: true,
                donut: {
                  size: '55%',
                 },
              },
            chart: {
              id: "basic-bar",
              fill: {
               colors: ['#FF3333', '#00EE00']
              },
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,2000,2001,2002,2003]
            },
            
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91,40, 45, 50, 49]
            },
          ]
        };
      }
    render() {
        //const {classes}=this.props;
        return (
              <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                height={280}
                width='100%'
              />
        );
    }
}
ColumnChart.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(ColumnChart);