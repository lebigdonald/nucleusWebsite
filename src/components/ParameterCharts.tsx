import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  import { Chart } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         label: 'Dataset',
//         backgroundColor: 'rgba(255,99,132,0.2)',
//         borderColor: 'rgb(11,227,210)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(255,0,54,0.4)',
//         hoverBorderColor: 'rgb(0,88,101)',
//         data: [65, 59, 80, 81, 56, 55, 40]
//       }
//     ]
//   };

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
    //   borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
    //   borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default () => (
  <div>
    <h2>Line Example</h2>
    <Line
      data={data}
      width={400}
      height={400}
    />
  </div>
);