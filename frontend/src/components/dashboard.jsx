import React from "react";
import Axios from 'axios';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useState, useEffect } from 'react';
import { VtoT } from "./VtoT";
import { ButtonGrid } from "./NewWords";
import { RandomSentence } from "./RandomSentence";
import "./dashboard.css";

export const Dashboard = () => {
    const [text, setText] = useState('');
    const { speak, voices } = useSpeechSynthesis({});

    function Show1() {
        const container = document.getElementById("container");
        const rows = document.getElementById("rows");

        if (container.classList.contains("show")) {
            container.classList.remove("show");
            rows.style.display = "block";
        } else {
            container.classList.add("show");
            rows.style.display = "none";
        }
    }
    function Show2() {
        const container = document.getElementById("container2");
        const rows = document.getElementById("rows");

        if (container.classList.contains("show")) {
            container.classList.remove("show");
            rows.style.display = "block";
        } else {
            container.classList.add("show");
            rows.style.display = "none";
        }
    }
    function Show3() {
        const container = document.getElementById("container3");
        const rows = document.getElementById("rows");

        if (container.classList.contains("show")) {
            container.classList.remove("show");
            rows.style.display = "block";
        } else {
            container.classList.add("show");
            rows.style.display = "none";
        }
    }


    function back() {
        const container1 = document.getElementById("container2");
        const container2 = document.getElementById("container");
        const container3 = document.getElementById("container3");
        const rows = document.getElementById("rows");

        container1.classList.remove("show");
        container2.classList.remove("show");
        container3.classList.remove("show");
        rows.style.display = "block";
    }
    return (
        <>
            <div className="rows" id="rows">
                <ul>
                    <li><a href="#" onClick={Show1}>Learn New words 👉</a></li>
                    <li><a href="#" onClick={Show2}>Speaking Hard Words 👉</a></li>
                    <li><a href="#" onClick={Show3}>Writing English Words 👉</a></li>
                </ul>
            </div>
            <div className="container" id="container">
                <h2>Click button to learn </h2>
                {<ButtonGrid />}
                <button className="buttonStyle" onClick={back}>Back</button>
            </div>
            <div className="container" id="container2">
                {<VtoT />}
                <button className="buttonStyle" onClick={back}>Back</button>
            </div>
            <div className="container" id="container3">
                <RandomSentence />
                <button className="buttonStyle" onClick={back}>Back</button>
            </div>

        </>
    );
}
