import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Random(){

const [info, setInfo] = useState({});

   
useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => setInfo(response.data));
}, [])

console.log("hey look:", info);




    return (
    <div>
        <p>Hello there</p>
        <img src={info.message}/>
    </div>
    );
}