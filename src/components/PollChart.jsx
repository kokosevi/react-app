import React from "react";
import {useState, useEffect, Component} from "react";
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


const Questionnaire = JSON.parse(localStorage.getItem("Questionnaire") || "[]");
console.log(Questionnaire);


// initiate variables for basic needs


let basicNeedsValuesArray = new Array(7).fill(2);

// calculate item final_score
for (let outer_index = 0; outer_index < 7; outer_index++) {
    for (let inner_index = 0; inner_index < 8; inner_index++) {
        if (Questionnaire[outer_index][inner_index].picked == 1) {
            if (Questionnaire[outer_index][inner_index].posneg == 1) {
                basicNeedsValuesArray[outer_index] = basicNeedsValuesArray[outer_index] + 1;
            } else {
                basicNeedsValuesArray[outer_index] = basicNeedsValuesArray[outer_index] - 1;
            }
        }
    }   
}
  localStorage.setItem('Questionnaire', JSON.stringify(Questionnaire));




export const data = {
    labels:['Rule', "Fame", "Intrinsic-Value", "Reliability", "Security", "Pleasure", "Adventure"],
  datasets: [
    {
      label: '# of Votes',
      data:[
        basicNeedsValuesArray[4],                 // Rule
        basicNeedsValuesArray[5],                 // Fame
        basicNeedsValuesArray[6],                 // Intrinsic-Value
        basicNeedsValuesArray[1],                 // Reliability
        basicNeedsValuesArray[0],                 // Security
        basicNeedsValuesArray[2],                  // Pleasure
        basicNeedsValuesArray[3]                  // Adventure
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
            text: "You strife for ...",
            font: {
                size: 15
            },
            color: '#666',
            
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
            max: 8,
            grid: {
                display: false
            },
            ticks: {
                display: false
            }
        },
        
    }
}


function PollChart() {
    

    return ( 
    
    <PolarArea data={data} options={options} />
     );
}

export default



PollChart;