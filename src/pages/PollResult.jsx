import React from "react";
import {useState, useEffect} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { $ }  from 'react-jquery-plugin'
import PollChart from "../components/PollChart";
import PollText from "../components/PollText";



function PollResult() {

    useEffect(() => {

    }, []);

    return ( 
        <React.Fragment>
        <div className="chartContainer"><PollChart /></div>
        <div className="textContainer"><PollText/></div>
        </React.Fragment>
     );
}

export default PollResult;