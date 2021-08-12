import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Random(){

const [info, setInfo] = useState({});
const [name, setName] = useState();

   
useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            setInfo(response.data);
            //getting the image URL
            setName(response.data.message.split('/')[4].split('-').reverse().join(' ').toUpperCase())}
            //an attempt to extract the breed name with the 'random' endpoint. the naming convention seems to be a "last-first" one for most of them
        )
        .catch(err => console.log(err));
    }, [])

return (
    <div className="page">
        <h1>RANDOM DOG</h1>
        <div className="dog-card">
            <p className="text">{name}</p>
            <img alt={name} className="dogpic" src={info.message}/>
    </div>
    </div>
    );
} 