import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Random(){

const [info, setInfo] = useState({});
const [name, setName] = useState();

   
useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            //getting the image URL
            setInfo(response.data);
            
            //an attempt to extract the breed name from the result given by the 'random' endpoint. the naming convention seems to be a "last-first" one for most of them so i'm reversing the words
            setName(response.data.message.split('/')[4].split('-').reverse().join(' ').toUpperCase())}
            
        )
        .catch(err => console.log(err));
    }, [])

//display name and image
return (
    <div className="page">
        <h1>RANDOM DOG</h1>
        <p>The thrill of chance! Which dog will you get..?</p>
        <div className="dog-card">
            <p className="text">{name}</p>
            <img alt={name} className="dogpic" src={info.message}/>
    </div>
    </div>
    );
} 