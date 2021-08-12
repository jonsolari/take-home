import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function TenPics(props){

    const [pics, setPics] = useState([]);
  
    let breed = '';
    if (props.name.includes('-')){
        breed = props.name.split('-').join('/');
    } else {
        breed = props.name;
    }

    useEffect(()=>{
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random/10`)
            .then(response => setPics(response.data.message))
            .catch(err => console.log(err))
    }, [])

    


    return(
    <div className="page">
        <p>HELLO {props.name.toUpperCase()}</p>
        <img className="dogpic" src={pics[0]}/>
    </div>
    )
}