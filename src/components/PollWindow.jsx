import React, { Component } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"



function PollWindow() {

    // DEFINE OBJECT QUESTION
    class question {
        constructor(question_name, text){
            this.name = question_name;
            this.picked = 0;
            this.relevance = 0;
            this.final_score = 0;
            this.posneg = 1;
            this.item = text;
        }
    }

    // FUNCTION INITIATE QUESTIONNAIRE OBJECT
    const initiatePoll = () => {
   
    // SECURITY
    const security = [];
        for (let index = 0; index < 8; index++) {
            const a_question = new question("ABH_"+[index+1]);
            security.push(a_question);   
        }
        security[0].item = "Wenn mein Partner ständig Zeit mit mir verbringen will, wird es mir „zu eng“.";
        security[1].item = "Dauernd mit den selben Leuten zusammen zu sein kann mir auch „zu viel“ werden.";
        security[2].item = "Zugehörigkeit ist mir sehr wichtig.";
        security[3].item = "Es wäre für mich schlimm, wenn ich im Urlaub sehr krank werde und kein Bekannter bei mir ist.";
        security[4].item = "Fill";
        security[5].item = "In einem neuen beruflichen Umfeld fühle ich mich viel wohler, wenn ein mir vertrauter Kollege dabei ist.";
        security[6].item = "Ich brauche vertraute Menschen um mich herum.";
        security[7].item = "Ich fühle mich unwohl, wenn ich längere Zeit keine vertrauten Menschen um mich habe.";

    // RELIABILITY
    const reliability = [];
        for (let index = 0; index < 8; index++) {
            const a_question = new question("REL"+[index+1]);
            reliability.push(a_question);   
        }
        reliability[0].item = "Fill.";
        reliability[1].item = "Fill.";
        reliability[2].item = "Fill.";
        reliability[3].item = "Fill.";
        reliability[4].item = "Fill.";
        reliability[5].item = "Fill.";
        reliability[6].item = "Fill.";
        reliability[7].item = "Fill.";

        // ADVENTURE
        const adventure = [];
        for (let index = 0; index < 8; index++) {
            const a_question = new question("ERR"+[index+1]);
            adventure.push(a_question);   
        }
        
        adventure[0].item = "Ich habe gerne einen gewohnten Tagesablauf.";
        adventure[1].item = "In einer völlig fremden Umgebung werde ich unsicher.";
        adventure[2].item = "Ich langweile mich sehr schnell, wenn ich keine abwechslungsreiche Tätigkeit habe.";
        adventure[3].item = "Ich bin ständig auf der Suche nach neuen Erfahrungen.";
        adventure[4].item = "Ich liebe Nervenkitzel.";
        adventure[5].item = "Ich brauche oft ruhige Zeiten, in denen ich nichts unternehme.";
        adventure[6].item = "Am liebsten möchte ich ständig etwas unternehmen.";
        adventure[7].item = "Ich bevorzuge bekannte Situationen gegenüber neuen.";

        // POWER
        const power = [];
        for (let index = 0; index < 8; index++) {
            const a_question = new question("POW"+[index+1]);
            power.push(a_question);   
        }
        
        power[0].item = "In wichtigen Situaionen, ist es oft wichtig das ich die Führung übernehme.";
        power[1].item = "Ich setze mich gerne gegen andere durch.";
        power[2].item = "Wenn ich es für richtig halte, setze ich mich auch über bereits getroffene Entscheidungen hinweg.";
        power[3].item = "Ich gebe ungern anderen Anweisungen.";
        power[4].item = "Ich nehme gerne Raum ein.";
        power[5].item = "Ich will das andere das tun was ich möchte.";
        power[6].item = "In wichtigen Entscheidungen, füge ich mich gerne in die Gruppe ein.";
        power[7].item = "Ich habe Freude, andere in eine gezielte Richtung zu motivieren.";

        // RESPECT
    const respect = [];
    for (let index = 0; index < 8; index++) {
        const a_question = new question("RES"+[index+1]);
        respect.push(a_question);   
    }
    respect[0].item = "Fill.";
    respect[1].item = "Fill.";
    respect[2].item = "Fill.";
    respect[3].item = "Fill.";
    respect[4].item = "Fill.";
    respect[5].item = "Fill.";
    respect[6].item = "Fill.";
    respect[7].item = "Fill.";

       // intrinsic value
       const intrinsicvalue = [];
       for (let index = 0; index < 8; index++) {
           const a_question = new question("VAL"+[index+1]);
           intrinsicvalue.push(a_question);   
       }
       intrinsicvalue[0].item = "Fill.";
       intrinsicvalue[1].item = "Fill.";
       intrinsicvalue[2].item = "Fill.";
       intrinsicvalue[3].item = "Fill.";
       intrinsicvalue[4].item = "Fill.";
       intrinsicvalue[5].item = "Fill.";
       intrinsicvalue[6].item = "Fill.";
       intrinsicvalue[7].item = "Fill.";


    const Questionnaire = [];
    Questionnaire[0] = security;
    Questionnaire[1] = reliability;
    Questionnaire[2] = adventure;
    Questionnaire[3] = power;
    Questionnaire[4] = respect;
    Questionnaire[4] = intrinsicvalue;
    localStorage.setItem('Questionnaire', JSON.stringify(Questionnaire));
}



    return (  
        <div className="initiate_poll_container">
        <div className="text_container">
            <div className="text">
                What are you after in
            </div>
            <div className="text">
                <h1>LIFE?</h1>
            </div>
            
            <div className="button">
                <Link to="/PollSalient">
                    <button onClick={initiatePoll} id="start_poll_basic_needs" className="btn_standart">
                        Find out
                 </button>
                </Link>
            </div>
        </div>
        
        
        <div className="image_container">
            <img id="test" src="images/running_after.jpg" alt='runnergirl' className="container"/>
        </div>

    </div>

    



    );
}

export default PollWindow;