import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllDogs(){

const [all, setAll] = useState({});
const [curr, setCurr] = useState();
   
useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            setAll(response.data.message);        
        })
        .catch(err => console.log(err));   
    }, [])
    
    const dogList = Object.keys(all);
    let cards = []
    
useEffect(() => {
    dogList.forEach(
        dog => {axios.get(`https://dog.ceo/api/breed/${dog}/images/random`)
            .then(response => setCurr(response.data))
            .catch(err => console.log(err))
        console.log(curr)
    })
    
    }, [])

// console.log(cards);

    // let finalCards = cards.forEach(card => <img alt="a dog" src="{card}" />)
    

return (
    <div className="page">
        <h1>ALL DOGS</h1>
        <p>Every dog our scientists have discovered so far.</p>
        <p>Clicking on a dog's card will show you more examples.</p>
            
        <div>
            
        </div>
    </div>
    );
} 