import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function TenPics(props){

    const [pics, setPics] = useState([]);
    const [hide, toggleHide] = useState('hidden');
  
    let breed = '';
    if (props.name.includes('-')){
        breed = props.name.split('-').join('/');
    } else {
        breed = props.name;
    }

    function toggle(){
        if(hide == 'hidden'){
            toggleHide('');
        } else {
            toggleHide('hidden');
        }
    }

    useEffect(()=>{
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random/10`)
            .then(response => setPics(response.data.message))
            .catch(err => console.log(err))
    }, [])

    


    return(
    <div className="tenpix">
        <p onClick={toggle} className="text">{props.name.toUpperCase()}</p>
        <img src={pics[0]}/>
        <img className={hide}  src={pics[1]}/>
        <img className={hide}  src={pics[2]}/>
        <img className={hide}  src={pics[3]}/>
        <img className={hide}  src={pics[4]}/>
        <img className={hide}  src={pics[5]}/>
        <img className={hide}  src={pics[6]}/>
        <img className={hide}  src={pics[7]}/>
        <img className={hide}  src={pics[8]}/>
        <img className={hide}  src={pics[9]}/>
        
    </div>
    )
}