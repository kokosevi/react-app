import React from "react";
import {useState} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { $ }  from 'react-jquery-plugin'


let showBack = false;
let showNext = true;
let showNextWindow = false;

    
    
function PollSalient() {
    

// States
const [basicNeed, setBasicNeed] = useState(() => {
    return 0 // The first time the components renders, start with 0 
}); 
// Change basic need
function nextBasicNeed() {
    setBasicNeed(basicNeed => basicNeed +1)

    // Adjust Back / Nexts 
        showBack =true;
    if (basicNeed == (Questionnaire.length -2)) {
        showNextWindow = true;
        showNext = false;
    }  
};
function prevBasicNeed() {
    setBasicNeed(basicNeed => basicNeed -1)

    // Adjust Back / Nexts 
    showNextWindow = false;
    showNext = true;
    if (basicNeed == 1) {
        showBack = false;
    }  
};

// Force rerender
const [rerender, forceRerender] = useState(false); 


// CHANGE PICKED & BACKGROUND COLOR ON CLICKED
function setPickedAbh (basic_need, concrete_item) {
    // 👇️ toggle
    const Questionnaire = JSON.parse(localStorage.getItem("Questionnaire") || "[]");
    if (Questionnaire[basic_need][concrete_item].picked === 0) {
        Questionnaire[basic_need][concrete_item].picked = 1;
        
    } else {
        Questionnaire[basic_need][concrete_item].picked = 0;
}
    forceRerender(current => !current); // Force to rerender Component
    localStorage.setItem('Questionnaire', JSON.stringify(Questionnaire));
};


const Questionnaire = JSON.parse(localStorage.getItem("Questionnaire") || "[]");




    return (  
        <> 
         <div className="salient">
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][0].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][0].picked ? 'white' : '',}} onClick={() => setPickedAbh(basicNeed, 0)} id="ABH_1" className="btn_salient">{Questionnaire[basicNeed][0].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][1].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][1].picked ? 'white' : '',}} onClick={() => setPickedAbh(basicNeed, 1)} id="ABH_2" className="btn_salient">{Questionnaire[basicNeed][1].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][2].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][2].picked ? 'white' : '',}} onClick={() => setPickedAbh(basicNeed, 2)} id="ABH_3" className="btn_salient">{Questionnaire[basicNeed][2].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][3].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][3].picked ? 'white' : '',}} onClick={() => setPickedAbh(basicNeed, 3)} id="ABH_4" className="btn_salient">{Questionnaire[basicNeed][3].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][4].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][4].picked ? 'white' : '',}} onClick={() => setPickedAbh(basicNeed, 4)} id="ABH_5" className="btn_salient">{Questionnaire[basicNeed][4].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][5].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][5].picked ? 'white' : '',}} onClick={() => setPickedAbh(basicNeed, 5)} id="ABH_6" className="btn_salient">{Questionnaire[basicNeed][5].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][6].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][6].picked ? 'white' : '',}} onClick={() => setPickedAbh(basicNeed, 6)} id="ABH_7" className="btn_salient">{Questionnaire[basicNeed][6].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][7].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][7].picked ? 'white' : '',}} onClick={() => setPickedAbh(basicNeed, 7)} id="ABH_8" className="btn_salient">{Questionnaire[basicNeed][7].item}</div>
            {/* <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][8].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][8].picked ? 'white' : '',}} onClick={() => setPickedAbh(basicNeed, 8)} id="ABH_9" className="btn_salient">{Questionnaire[basicNeed][8].item}</div> */}
            {/* <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][9].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][9].picked ? 'white' : '',}} onClick={() => setPickedAbh(basicNeed, 9)} id="ABH_10" className="btn_salient">{Questionnaire[basicNeed][9].item}</div> */}
            {/* <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][10].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[basicNeed][10].picked ? 'white' : '',}} onClick={() => setPickedAbh(basicNeed, 10)} id="ABH_11" className="btn_salient">{Questionnaire[basicNeed][10].item}</div> */}
         </div>
        <div className="nextButtons">
            {showBack && <button onClick={prevBasicNeed} className="btn_standart" id="back_salient">Back</button>}
            {showNext && <button onClick={nextBasicNeed} className="btn_standart" id="next_salient">Next</button>}
            {showNextWindow && <Link to="/PollMeasure"><button onClick={nextBasicNeed} className="btn_standart" id="next_salient">Next Window</button></Link>}
        </div>
        </>
     );
    
}
export default PollSalient;

