import React, { Component } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function MindfulnessPollWindow() {
  // DEFINE OBJECT QUESTION
  class question {
    constructor(question_name, text) {
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
      const a_question = new question("ABH_" + [index + 1]);
      security.push(a_question);
    }
    security[0].item =
      "If my partner wants to spend time with me all the time, it becomes „too tight“ for me";
    security[0].posneg = -1; //"Wenn mein Partner ständig Zeit mit mir verbringen will, wird es mir „zu eng“.";
    security[1].item =
      "Being with the same people all the time can be „too much“ for me as well";
    security[1].posneg = -1; //"Dauernd mit den selben Leuten zusammen zu sein kann mir auch „zu viel“ werden.";
    security[2].item = "Belonging is very important to me"; //"Zugehörigkeit ist mir sehr wichtig.";
    security[3].item =
      "It would be terryfing for me if I get very sick on vacation and no one I know is with me"; //"Es wäre für mich schlimm, wenn ich im Urlaub sehr krank werde und kein Bekannter bei mir ist.";
    security[4].item =
      "I feel uncomfortable when I don't have familiar people around me for a long time"; //"Ich fühle mich unwohl, wenn ich längere Zeit keine vertrauten Menschen um mich habe.";
    security[5].item =
      "In a new professional environment, I really appreciate a familiar colleague"; //"In einem neuen beruflichen Umfeld fühle ich mich viel wohler, wenn ein mir vertrauter Kollege dabei ist.";
    security[6].item = "I need familiar people around me"; //"Ich brauche vertraute Menschen um mich herum.";
    security[7].item = "Fill";

    // RELIABILITY
    const reliability = [];
    for (let index = 0; index < 8; index++) {
      const a_question = new question("REL" + [index + 1]);
      reliability.push(a_question);
    }
    reliability[0].item = "Many things worry me.";
    reliability[1].item = "I feel like my head is empty from worrying so much.";
    reliability[2].item = "Knowing my future is important to me.";
    reliability[3].item = "I don't worry about the future.";
    reliability[3].posneg = -1;
    reliability[4].item =
      "I invest a lot of time to make my future predictable.";
    reliability[5].item = "The future is bright for me.";
    reliability[5].posneg = -1;
    reliability[6].item = "I think alot about potential threats.";
    reliability[7].item = "Reliability is key to me.";

    // PLEASURE
    const pleasure = [];
    for (let index = 0; index < 8; index++) {
      const a_question = new question("PLE" + [index + 1]);
      pleasure.push(a_question);
    }
    pleasure[0].item = "Having fun is essential for me.";
    pleasure[1].item = "It is important to enjoy life.";
    pleasure[2].item = "My slogan: Treat yourself!.";
    pleasure[3].item = "I relish in the moment.";
    pleasure[4].item = "Pleasure.";
    pleasure[5].item = "Pleasure.";
    pleasure[6].item = "Pleasure.";
    pleasure[7].item = "Pleasure.";

    // ADVENTURE
    const adventure = [];
    for (let index = 0; index < 8; index++) {
      const a_question = new question("ERR" + [index + 1]);
      adventure.push(a_question);
    }

    adventure[0].item = "I like to have a familiar daily routine";
    adventure[0].posneg = -1; //"Ich habe gerne einen gewohnten Tagesablauf.";
    adventure[1].item = "In a completely foreign environment I become insecure";
    adventure[1].posneg = -1; //"In einer völlig fremden Umgebung werde ich unsicher.";
    adventure[2].item =
      "I get bored very quickly if I do not have a varied activity"; //"Ich langweile mich sehr schnell, wenn ich keine abwechslungsreiche Tätigkeit habe.";
    adventure[3].item = "I am constantly looking for new experiences"; //"Ich bin ständig auf der Suche nach neuen Erfahrungen.";
    adventure[4].item = "I love the thrill"; //"Ich liebe Nervenkitzel.";
    adventure[5].item = "I often need quiet times when I do not do anything";
    adventure[5].posneg = -1; //"Ich brauche oft ruhige Zeiten, in denen ich nichts unternehme.";
    adventure[6].item = "I would like to do something all the time"; //"Am liebsten möchte ich ständig etwas unternehmen.";
    adventure[7].item = "I prefer familiar situations to new ones";
    adventure[7].posneg = -1; //"Ich bevorzuge bekannte Situationen gegenüber neuen.";

    // POWER
    const power = [];
    for (let index = 0; index < 8; index++) {
      const a_question = new question("POW" + [index + 1]);
      power.push(a_question);
    }

    power[0].item = "In important situations, it is best that I lead"; //"In wichtigen Situaionen, ist es oft wichtig das ich die Führung übernehme.";
    power[1].item = "I hate to assert myself against others";
    power[1].posneg = -1; //"Ich setze mich gerne gegen andere durch.";
    power[2].item = "I overrule decisions that have already been made."; //"Wenn ich es für richtig halte, setze ich mich auch über bereits getroffene Entscheidungen hinweg.";
    power[3].item = "I like giving instructions"; //"Ich gebe ungern anderen Anweisungen.";
    power[4].item = "I like to take up space"; //"Ich nehme gerne Raum ein.";
    power[5].item = "I appreciate others to do what I want"; //"Ich will das andere das tun was ich möchte.";
    power[6].item = "In important decisions, I like to fit in with the group";
    power[6].posneg = -1; //"In wichtigen Entscheidungen, füge ich mich gerne in die Gruppe ein.";
    power[7].item = "I enjoy motivating others in a targeted direction"; //"Ich habe Freude, andere in eine gezielte Richtung zu motivieren.";

    // RESPECT
    const respect = [];
    for (let index = 0; index < 8; index++) {
      const a_question = new question("RES" + [index + 1]);
      respect.push(a_question);
    }
    respect[0].item = "I want my partner to admire me.";
    respect[1].item =
      "I don't care so much if the people around me think I'm great.";
    respect[1].posneg = -1;
    respect[2].item = "I couldn't care less what other people think about me.";
    respect[2].posneg = -1;
    respect[3].item = "Beeing famous would be great.";
    respect[4].item = "Advancing in my Career is key.";
    respect[5].item = "Respect.";
    respect[6].item = "Respect.";
    respect[7].item = "Respect.";

    // intrinsic value
    const intrinsicvalue = [];
    for (let index = 0; index < 8; index++) {
      const a_question = new question("VAL" + [index + 1]);
      intrinsicvalue.push(a_question);
    }
    intrinsicvalue[0].item = "It is important to me to perform well.";
    intrinsicvalue[1].item = "I have high expectations of myself.";
    intrinsicvalue[2].item = "I love getting better in something.";
    intrinsicvalue[3].item = "I love mastering a skill.";
    intrinsicvalue[4].item = "I enjoy working on difficult problems.";
    intrinsicvalue[5].item = "Intrinsic Value.";
    intrinsicvalue[6].item = "Intrinsic Value.";
    intrinsicvalue[7].item = "Intrinsic Value.";

    const Questionnaire = [];
    Questionnaire[0] = security;
    Questionnaire[1] = reliability;
    Questionnaire[2] = pleasure;
    Questionnaire[3] = adventure;
    Questionnaire[4] = power;
    Questionnaire[5] = respect;
    Questionnaire[6] = intrinsicvalue;
    localStorage.setItem("Questionnaire", JSON.stringify(Questionnaire));
  };

  return (
    <div className="initiate_poll_container">
      <div className="text_container">
        <div className="text">How MINDFULL are you?</div>

        <div className="button">
          <Link to="/PollSalient">
            <button
              onClick={initiatePoll}
              id="start_poll_basic_needs"
              className="btn_standart"
            >
              Find out
            </button>
          </Link>
        </div>
      </div>

      <div className="image_container">
        <img
          id="test"
          src="images/running_after.jpg"
          alt="runnergirl"
          className="container"
        />
      </div>
    </div>
  );
}

export default MindfulnessPollWindow;
