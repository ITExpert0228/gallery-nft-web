import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";

class EChartTwo extends Component {
  getOption = () => {
    return {
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(33,33,33,1)',
        borderRadius: 0,
        padding: 10,
        formatter: "{b}: {c} ({d}%)",
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: "'Roboto', sans-serif",
          fontSize: 12
        }
      },
      legend: {
        data: [{
          value: 2600,
          name: 'Company'
        }, {
          value: 2000,
          name: 'Sales'
        }, {
          value: 300,
          name: 'Development'
        }, {
          value: 100,
          name: 'Giveaways'
        }]
      },
      series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['90%', '30%'],
        color: ['#a8a9bd', '#9395b9', '#656790', '#3e406e'],
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{
          value: 2600,
          name: 'Company'
        }, {
          value: 2000,
          name: 'Sales'
        }, {
          value: 300,
          name: 'Development'
        }, {
          value: 100,
          name: 'Giveaways'
        }]
      }
      ]
    };
  };
  render() {
    return <ReactEcharts option={this.getOption()} style={{ height: "400px" }} />;
  }
}

export default EChartTwo;