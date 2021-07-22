import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts";
class AreaChart extends Component {
    render() {
      const {data,unit} = this.props;
      const target = 25;
        const series = [{
            name:'',
            data: data

           }]
          const options = {
            chart: {
              id: 'area-datetime',
              type: 'area',
              zoom: {
                enabled: true,
                type: 'x',  
                autoScaleYaxis: false,  
                zoomedArea: {
                  fill: {
                    color: '#90CAF9',
                    opacity: 0.4
                  },
                  stroke: {
                    color: '#0D47A1',
                    opacity: 0.4,
                    width: 1
                  }
                }
             }
            },
            colors:['#00CC33'],
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
                customIcons: []
              },
              autoSelected: 'zoom' //tự động sử dụng tools này khi load biểu đồ
            },
            annotations: {
              yaxis: [{
                y: target,
                borderColor: '#FF0000',
                label: {
                  borderColor: '#FF0000',
                  fontSize: '10px',
                  style: {
                    color: '#111',
                    background: '#FFFF00',
                  },
                  text: 'Target',
                }
              }]
            },
            title: {    
              //text:"Trend Power",
              align: 'left',
              margin: 1,
              offsetX: 5,
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
              tickPlacement: 'on'
              //max: new Date().getTime(),
            },
            yaxis: {
              title: {
                //text: 'power'
              },
              labels: {
                formatter: function (y) {
                  return y.toFixed(3) + unit;
                }
              },
              min: 0,
            },
            tooltip: {
              x: {
                show: true,
                format: 'yyyy-MMM-dd HH:mm:ss'
              }
            },
            responsive: [
              {
                breakpoint: 1,
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
            ],
            dropShadow: {
              enabled: true,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
              }
            },
          };
        
        return (
            
              <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={260}
                width='100%'
              />
          );
    }
}
AreaChart.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(AreaChart);