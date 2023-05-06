import React from "react";
import { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { $ } from "react-jquery-plugin";
import PollStepper from "../components/PollStepper";

let showBack = false;
let showNext = true;
let showNextWindow = false;

function PollShortSalient(props) {
  console.log(props);
  console.log(props.pollData);
  console.log(props.pollData.Poll1);
  console.log(props.pollData.Poll1.categories);
  console.log(props.pollData.Poll1.categories[0]);
  console.log(props.pollData.Poll1.categories[0].statements);
  console.log(props.pollData.Poll1.categories[0].statements[0]);
  console.log(props.pollData.Poll1.categories[0].statements[0].statement);
  console.log(props.pickedHandler);
  console.log(props.pollData.Poll1.categories[0].statements[0].picked == 1);

  let checkChanges = props.pollData.Poll1.categories[0].statements[0].picked;
  const [change, setChanges] = useState(checkChanges);

  // States
  const [next, setNext] = useState(() => {
    return 0; // The first time the components renders, start with 0
  });

  const [user, setUser] = React.useState({ ...props.pollData });

  React.useEffect(() => {
    // setUser(props.user);
    console.log("State changed");
  }, [props.pollData]);

  const [render, newRender] = useState(false);

  useEffect(() => {
    newRender((current) => !current);
    console.log("Rerender");
  }, [props.pollData.Poll1.categories[0].statements[0].picked]);

  const [round, setRound] = useState(() => {
    return 0; // The first time the components renders, start with 0
  });
  // Change basic need
  function nextRound() {
    setRound((round) => round + 1);

    // Adjust Back / Nexts
    showBack = true;
    if (round == Questionnaire.length - 1) {
      // -2: show all basicNeeds item together, -1: mixing basicNeeds item
      showNextWindow = true;
      showNext = false;

      const Questionnaire = JSON.parse(
        localStorage.getItem("Questionnaire") || "[]"
      );
    }
  }
  function prevRound() {
    setRound((round) => round - 1);

    // Adjust Back / Nexts
    showNextWindow = false;
    showNext = true;
    if (round == 1) {
      showBack = false;
    }
  }

  // Force rerender
  const [rerender, forceRerender] = useState(false);

  // CHANGE PICKED & BACKGROUND COLOR ON CLICKED
  function setPickedAbh(basic_need, concrete_item) {
    // 👇️ toggle
    const Questionnaire = JSON.parse(
      localStorage.getItem("Questionnaire") || "[]"
    );
    if (Questionnaire[basic_need][concrete_item].picked === 0) {
      Questionnaire[basic_need][concrete_item].picked = 1;
    } else {
      Questionnaire[basic_need][concrete_item].picked = 0;
    }
    forceRerender((current) => !current); // Force to rerender Component
    localStorage.setItem("Questionnaire", JSON.stringify(Questionnaire));
    console.log(Questionnaire);
  }

  const Questionnaire = JSON.parse(
    localStorage.getItem("Questionnaire") || "[]"
  );

  const steps = ["", "", "", "", "", "", "Finish"];
  return (
    <>
      <div>
        <PollStepper activeStep={round} steps={steps} />
      </div>

      <div className="salient" key={"firstOne"}>
        <div
          key={props.pollData.Poll1.categories[0].statements[0].picked}
          // style={{
          //   backgroundColor: props.pollData.Poll1.categories[0].statements[0]
          //     .picked
          //     ? "white"
          //     : "salmon",
          // }}
          style={{
            backgroundColor: props.pollData.Poll1.categories[0].statements[0]
              .picked
              ? "salmon"
              : "",
            color: props.pollData.Poll1.categories[0].statements[0].picked
              ? "white"
              : "",
          }}
          // style={{
          //   backgroundColor: JSON.parse(
          //     localStorage.getItem("Questionnaire")
          //   )[0][round].picked
          //     ? "salmon"
          //     : "",
          //   color: JSON.parse(localStorage.getItem("Questionnaire"))[0][round]
          //     .picked
          //     ? "white"
          //     : "",
          // }}

          onClick={() => props.pickedHandler(0, 0)}
          // onClick={props.pickedHandler(0, 0)}
          // onClick={() => setPickedAbh(0, round)}
          className="btn_salient"
        >
          {props.pollData.Poll1.categories[0].statements[0].statement}
          {/* {props.pollData.Poll1.categories[0].statements[0].statement} */}
        </div>
        <div
          // style={{
          //   backgroundColor: props.pollData.Poll1.categories[1].statements[0]
          //     .picked
          //     ? "salmon"
          //     : "",
          //   color: props.pollData.Poll1.categories[1].statements[0].picked
          //     ? "white"
          //     : "",
          // }}
          style={{
            backgroundColor: JSON.parse(
              localStorage.getItem("Questionnaire")
            )[1][round].picked
              ? "salmon"
              : "",
            color: JSON.parse(localStorage.getItem("Questionnaire"))[1][round]
              .picked
              ? "white"
              : "",
          }}
          onClick={() => setPickedAbh(1, round)}
          className="btn_salient"
        >
          {props.pollData.Poll1.categories[1].statements[0].statement}
        </div>
        <div
          style={{
            backgroundColor: JSON.parse(
              localStorage.getItem("Questionnaire")
            )[2][round].picked
              ? "salmon"
              : "",
            color: JSON.parse(localStorage.getItem("Questionnaire"))[2][round]
              .picked
              ? "white"
              : "",
          }}
          onClick={() => setPickedAbh(2, round)}
          className="btn_salient"
        >
          {Questionnaire[2][round].item}
        </div>
        <div
          style={{
            backgroundColor: JSON.parse(
              localStorage.getItem("Questionnaire")
            )[3][round].picked
              ? "salmon"
              : "",
            color: JSON.parse(localStorage.getItem("Questionnaire"))[3][round]
              .picked
              ? "white"
              : "",
          }}
          onClick={() => setPickedAbh(3, round)}
          className="btn_salient"
        >
          {Questionnaire[3][round].item}
        </div>
        <div
          className="item5 btn_salient"
          style={{
            backgroundColor: JSON.parse(
              localStorage.getItem("Questionnaire")
            )[4][round].picked
              ? "salmon"
              : "",
            color: JSON.parse(localStorage.getItem("Questionnaire"))[4][round]
              .picked
              ? "white"
              : "",
          }}
          onClick={() => setPickedAbh(4, round)}
        >
          {Questionnaire[4][round].item}
        </div>
        <div
          className="item6 btn_salient"
          style={{
            backgroundColor: JSON.parse(
              localStorage.getItem("Questionnaire")
            )[5][round].picked
              ? "salmon"
              : "",
            color: JSON.parse(localStorage.getItem("Questionnaire"))[5][round]
              .picked
              ? "white"
              : "",
          }}
          onClick={() => setPickedAbh(5, round)}
        >
          {Questionnaire[5][round].item}
        </div>
        <div
          className="item7 btn_salient"
          style={{
            backgroundColor: JSON.parse(
              localStorage.getItem("Questionnaire")
            )[6][round].picked
              ? "salmon"
              : "",
            color: JSON.parse(localStorage.getItem("Questionnaire"))[6][round]
              .picked
              ? "white"
              : "",
          }}
          onClick={() => setPickedAbh(6, round)}
        >
          {Questionnaire[6][round].item}
        </div>
        {/* <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[7][round].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[round][7].picked ? 'white' : '',}} onClick={() => setPickedAbh(round, 7)} id="ABH_8" className="btn_salient">{Questionnaire[round][7].item}</div> */}
      </div>

      {/* <div className="salient">
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[round][0].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[round][0].picked ? 'white' : '',}} onClick={() => setPickedAbh(round, 0)} id="ABH_1" className="btn_salient">{Questionnaire[round][0].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[round][1].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[round][1].picked ? 'white' : '',}} onClick={() => setPickedAbh(round, 1)} id="ABH_2" className="btn_salient">{Questionnaire[round][1].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[round][2].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[round][2].picked ? 'white' : '',}} onClick={() => setPickedAbh(round, 2)} id="ABH_3" className="btn_salient">{Questionnaire[round][2].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[round][3].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[round][3].picked ? 'white' : '',}} onClick={() => setPickedAbh(round, 3)} id="ABH_4" className="btn_salient">{Questionnaire[round][3].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[round][4].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[round][4].picked ? 'white' : '',}} onClick={() => setPickedAbh(round, 4)} id="ABH_5" className="btn_salient">{Questionnaire[round][4].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[round][5].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[round][5].picked ? 'white' : '',}} onClick={() => setPickedAbh(round, 5)} id="ABH_6" className="btn_salient">{Questionnaire[round][5].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[round][6].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[round][6].picked ? 'white' : '',}} onClick={() => setPickedAbh(round, 6)} id="ABH_7" className="btn_salient">{Questionnaire[round][6].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[round][7].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[round][7].picked ? 'white' : '',}} onClick={() => setPickedAbh(round, 7)} id="ABH_8" className="btn_salient">{Questionnaire[round][7].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[round][8].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[round][8].picked ? 'white' : '',}} onClick={() => setPickedAbh(round, 8)} id="ABH_9" className="btn_salient">{Questionnaire[round][8].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[round][9].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[round][9].picked ? 'white' : '',}} onClick={() => setPickedAbh(round, 9)} id="ABH_10" className="btn_salient">{Questionnaire[round][9].item}</div>
            <div style={{backgroundColor: JSON.parse(localStorage.getItem("Questionnaire"))[round][10].picked ? 'salmon' : '', color: JSON.parse(localStorage.getItem("Questionnaire"))[round][10].picked ? 'white' : '',}} onClick={() => setPickedAbh(round, 10)} id="ABH_11" className="btn_salient">{Questionnaire[round][10].item}</div>
         </div> */}

      <div className="nextButtons">
        {showBack && (
          <button
            onClick={prevRound}
            className="btn_standart"
            id="back_salient"
          >
            Back
          </button>
        )}
        {showNext && (
          <button
            onClick={nextRound}
            className="btn_standart"
            id="next_salient"
          >
            Next
          </button>
        )}
        {showNextWindow && (
          <Link to="/PollResult">
            <button
              onClick={nextRound}
              className="btn_standart"
              id="next_salient"
            >
              Next Window
            </button>
          </Link>
        )}
      </div>
    </>
  );
}
export default PollShortSalient;

// // States
// const [round, setRound] = useState(() => {
//     return 0 // The first time the components renders, start with 0
// });
// // Change basic need
// function nextRound() {
//     setRound(round => round +1)

//     // Adjust Back / Nexts
//         showBack =true;
//     if (round == (Questionnaire.length -2)) { // -2: show all basicNeeds item together, -1: mixing basicNeeds item
//         showNextWindow = true;
//         showNext = false;
//     }
// };
// function prevRound() {
//     setRound(round => round -1)

//     // Adjust Back / Nexts
//     showNextWindow = false;
//     showNext = true;
//     if (round == 1) {
//         showBack = false;
//     }
// };
