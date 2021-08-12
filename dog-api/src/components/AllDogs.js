import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllDogs(){

const [all, setAll] = useState({});
const [curr, setCurr] = useState([]);
   
useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            setAll(response.data.message);        
        })
        .catch(err => console.log(err));   
    }, [])
    
    const dogList = Object.keys(all);

    function subBreed(obj){
        let final = [];
        for (const [key, value] of Object.entries(obj)){
            if (value.length > 0){
                for(let i = 0; i < value.length; i++){
                    final.push(`${key}-${value[i]}`)
                }
            }
        }
        return final;
    }

    
let hyphens = subBreed(all);

hyphens.forEach(
    breed => dogList.push(breed)
)

const fullList = dogList.sort();
    
const cards = fullList.map(
        dog =>  <div className="dog-card"><p>{dog}</p></div>
        )

    

return (
    <div className="page">
        <h1>ALL DOGS</h1>
        <p>Every dog our scientists have discovered so far.</p>
        <p>Clicking on a dog's card will show you more examples.</p>
        {cards}
    </div>
    );
} 