import React from "react";
import {useState} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { $ }  from 'react-jquery-plugin'
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';


let showBack = false;
let showNext = true;
let showNextWindow = false;

// Initiate Array with Picked Items
// const Questionnaire = JSON.parse(localStorage.getItem("Questionnaire") || "[]");
// const picked_items = [];
// for (let outer_index = 0; outer_index < 6; outer_index++) {
//     for (let inner_index = 0; inner_index < 8; inner_index++) {
//         if (Questionnaire[outer_index][inner_index].picked == 1) {
//         picked_items.push(Questionnaire[outer_index][inner_index]);   
//         }
//     }   
// }


// End initiate Array


function PollMeasure() {

const Questionnaire = JSON.parse(localStorage.getItem("Questionnaire") || "[]");


// States
const [round, setRound] = useState(() => {
    return 0 // The first time the components renders, start with 0 
}); 
// Change basic need
function nextRound() {
    setRound(round => round +1)

    // Adjust Back / Nexts 
        showBack =true;
    if (round == (Questionnaire.length -2)) {
        showNextWindow = true;
        showNext = false;
    }  
};
function prevRound() {
    prevRound(round => round -1)

    // Adjust Back / Nexts 
    showNextWindow = false;
    showNext = true;
    if (round == 1) {
        showBack = false;
    }  
};

// Force rerender
const [rerender, forceRerender] = useState(false); 


// CHANGE PICKED & BACKGROUND COLOR ON CLICKED
function setPickedAbh (round, concrete_item) {
    // 👇️ toggle
    const Questionnaire = JSON.parse(localStorage.getItem("Questionnaire") || "[]");
    if (Questionnaire[round][concrete_item].picked === 0) {
        Questionnaire[round][concrete_item].picked = 1;
        
    } else {
        Questionnaire[round][concrete_item].picked = 0;
}
    forceRerender(current => !current); // Force to rerender Component
    localStorage.setItem('Questionnaire', JSON.stringify(Questionnaire));
};


    

    return ( 
    <>
    <div className="window_container">

        <div className="meter_container" id="meter">
            <img className="importance" src="../images/importance_meter.png" alt="Error" />
        </div>

        {Questionnaire[0][0].picked && <Draggable 
        bounds={{ top: -300, left: -600, right: 400, bottom: 100 }}
        defaultPosition={{x: 0, y: 0}}
        >
        <div id="ABH_1" className="btn_measure">
            <hr className="hr_item"/>
            {Questionnaire[0][0].item}
        </div>
        </Draggable>}

        {Questionnaire[0][0].picked && <Draggable 
        bounds={{ top: -300, left: -600, right: 400, bottom: 100 }}
        defaultPosition={{x: 0, y: -100}}
        >
        <div id="ABH_2" className="btn_measure">
            <hr className="hr_item"/>
            Ladida really?
        </div>
        </Draggable>}
        
    </div>
        

    <div className="nextButtons">
            {showBack && <button onClick={prevRound} className="btn_standart" id="back_salient">Back</button>}
            {showNext && <button onClick={nextRound} className="btn_standart" id="next_salient">Next</button>}
            {showNextWindow && <Link to="/PollMeasure"><button onClick={nextRound} className="btn_standart" id="next_salient">Next Window</button></Link>}
        </div>
        
        
    </>
     );
}

export default PollMeasure;