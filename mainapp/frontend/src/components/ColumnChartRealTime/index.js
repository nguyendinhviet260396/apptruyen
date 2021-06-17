import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts";

// let timemin =new Date("2020-10-02").getTime();
// let timemax=new Date("2020-10-02").getTime()+(43200000);

class ZoomLineTimeSeries extends Component { 

    render() {
        const {data} = this.props;
        const series = [{
            name:'power',
            data:data
          }]
          const options = {
            chart: {
              id: 'area-datetime',
              type: 'bar',
              zoom: {
                autoScaleYaxis: true
              }
            },
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                  // reset: true | '<img src="/static/icons/reset.png" width="20">',
                  customIcons: []
                },
                // autoSelected: 'zoom' //tự động sử dụng tools này khi load biểu đồ
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
            dataLabels: {
              enabled: false
            },
            markers: {
              size: 0,  
              style: 'hollow',
            },
            xaxis: {
              type: 'datetime',
              //min: timemin,
              //max:timemax,
            },
            yaxis: {
              title: {
                text: 'power'
              },
              min: 0,
              //max: 100,
            },
            tooltip: {
              x: {
                format: 'dd-MMM-yyyy hh:mm:ss'
              }
            },
            fill: {
              // type: 'gradient',
              // gradient: {
              //   shadeIntensity: 1,
              //   opacityFrom: 0.7,
              //   opacityTo: 0.9,
              //   stops: [0, 100]
              // }
            },
            responsive: [
                {
                  breakpoint: 10,
                  options: {
                    plotOptions: {
                      bar: {
                        horizontal: false
                      }
                    },
                    legend: {
                      position: "bottom"
                    }
                  }
                }
              ]
          };
        
        return (
              <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height='290'
                width='100%'
              />
          );
    }
}
ZoomLineTimeSeries.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(ZoomLineTimeSeries);