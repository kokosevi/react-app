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


const Questionnaire = JSON.parse(localStorage.getItem("Questionnaire") || "[]");


// initiate variables for basic needs
let Security = 0;
let Reliability = 0;
let Pleasure = 0;
let Adventure = 0;
let Power = 0;
let Fame = 0;
let IntrinsicValue = 0;


// calculate item final_score
let counter = 0;
let divider = 0;
Questionnaire.forEach( e =>{
    if (e.picked == 1) {
      Questionnaire[counter].final_score = (3*e.picked) + (10*e.relevance);
      Security = Security + Questionnaire[counter].final_score;
      console.log(e.final_score);
      counter++;
      divider++;
      console.log(divider);
    } else {
      counter++;
    }
  });
  localStorage.setItem('Questionnaire', JSON.stringify(Questionnaire));

//   Calculate Basic Needs score
  Security = Security/divider;
  console.log(Security);



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


function PollChart() {
    return ( <PolarArea data={data} options={options} />
     );
}

export default



PollChart;