import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllDogs(){

const [info, setInfo] = useState({});
// const [name, setName] = useState();

   
useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
        .then(response => setInfo(response.data)
        .then(console.log(info))
        )
        .catch(err => console.log(err));
    }, [])

return (
    <div className="dog-card">
        <p className="text">Hello</p>
        {/* <p className="text">RANDOM DOG: {name}</p>
        <img alt={name} className="dogpic" src={info.message}/> */}
    </div>
    );
} 