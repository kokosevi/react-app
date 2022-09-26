import React from "react";
import {useState} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { $ }  from 'react-jquery-plugin'
import { PolarArea } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
    Title,
  } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Title,);

export const data = {
    labels:['Rule', "Fame", "Intrinsic-Value", "Reliability", "Security", "Pleasure", "Adventure"],
  datasets: [
    {
      label: '# of Votes',
      data:[
        4,                 // Rule
        13,                 // Fame
        15,                 // Intrinsic-Value
        8,                 // Reliability
        6,                 // Security
        13,                  // Pleasure
        7                  // Adventure
    ],
    backgroundColor:[ 
        "rgba(139, 69, 19, 0.8)",       // Rule
        "rgba(205, 133, 63, 0.8)",       // Fame
        "rgba(210, 180, 140, 0.8)",     // Intrinsic-Value
        "rgba(0, 191, 255, 1)",         // Reliability
        "rgba(30, 144, 255, 1)",        // Security
        "rgba(255, 165, 0, 1)",         // Pleasure
        "rgba(255, 95, 31, 1)",         // Adventure
        
    ],
      borderWidth: 5,
    },
  ],  
};


export const options= {
    responsive: true,
    maintainAspectRatio: false,
    
    plugins: {
        title: {
            display: true,
            text: "You strife for ..."
        },  
        legend: {
            display: true,
            position: "right",
            labels: {
                font: {
                    size: 13
                }
            },
        },
    },
    scales: {
        r: {
            max: 15,
            grid: {
                display: false
            },
            ticks: {
                display: false
            }
        },
        
    }
}




// export const options={
//     legend: {
//       display: true,
//     },
//      title: {
//       display: true,
//       text: 'You strife for ...',
//                 font: {
//                     size: 35
//                 }
//      }
//   }




function TestPollChart() {
    return ( <PolarArea data={data} options={options} />
     );
}

export default



TestPollChart;