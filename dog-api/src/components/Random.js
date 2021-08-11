import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Random(){

const [info, setInfo] = useState({});
const [name, setName] = useState();

   
useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            setInfo(response.data);
            setName(info.message.split('/')[4].split('-').join(' ').toUpperCase())}
        )
        .catch(err => console.log(err));
    }, [])

    






return (
    <div>
        <p>{name}</p>
        <img alt="a random dog" className="dogpic" src={info.message}/>
    </div>
    );
} 