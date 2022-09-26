import React from "react";
import {useState} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { $ }  from 'react-jquery-plugin'
import PollChart from "../components/PollChart";



function PollResult() {


    return ( 
        <React.Fragment>
        <div className="chartContainer"><PollChart /></div>
        </React.Fragment>
     );
}

export default PollResult;