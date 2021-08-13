import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import TenPics from './TenPics.js'

export default function AllDogs(){

const [all, setAll] = useState({});
   

//get full list of breeds & sub-breeds
useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            setAll(response.data.message);        
        })
        .catch(err => console.log(err));   
    }, [])

//isolate breed names from response data
const dogList = Object.keys(all);

//pick out sub-breed names from object value arrays & format names
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

//combine breed & sub-breed lists into one array
hyphens.forEach(
    breed => dogList.push(breed)
)

//alphabetize it all
const fullList = dogList.sort();


//display dog names
const cards = fullList.map(
        dog =>  <div className="dog-card">
                    <TenPics name={dog}/>
            </div>
        )

        

return (
    <div className="page">
        <h1>ALL DOGS</h1>
        <p>Every dog our scientists have discovered so far.</p>
        <p>Clicking on a dog's breed will show you more examples.</p>
        <div className="cards">
            {cards}
            
        </div>
    </div>
    );
} 
