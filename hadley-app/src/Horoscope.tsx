import React from 'react';
import './App.css';
import TextBox from "./TextBox";
//@ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

interface Horoscope {
    horoscope: string[]
}

function Horoscope() {
    const axios = require('axios').default;
    const [sun, setSun] = React.useState("")
    const [moon, setMoon] = React.useState("")
    const [rising, setRising] = React.useState("")
    const horoscopes: string[] = []
    const [horoscope, setHoroscope] = React.useState(horoscopes)

    const requestHoroscope = () => {
        const toSend = {
            sun: {sun},
            moon: {moon},
            rising: {rising}
        }
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }
        axios.post('/horoscope', toSend, config)
            .then((response: { data: { horoscope: React.SetStateAction<string[]>; }; }) => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data.horoscope);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
    return (
        <div>
            <div className="horoscope-style">
                This is the horoscope component
            </div>
                <TextBox label={"Sun"} change={setSun}/>
                <TextBox label={"Moon"} change={setMoon}/>
                <TextBox label={"Rising"} change={setRising}/>
            <AwesomeButton
                onPress={()=> {
                    requestHoroscope()
                }}>Submit</AwesomeButton>
            <div className="horoscope-result-style">{horoscope}</div>
        </div>
    );
}

export default Horoscope;
