import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function TenPics(props){

    const [pics, setPics] = useState([]);
    const [hide, toggleHide] = useState('hidden');
  
//API naming/directory convention handler

    let breed = '';
    if (props.name.includes('-')){
        breed = props.name.split('-').join('/');
    } else {
        breed = props.name;
    }

//switch for the additional photos' visibility

    function toggle(){
        if(hide == 'hidden'){
            toggleHide('');
        } else {
            toggleHide('hidden');
        }
    }

//fetching the photos

    useEffect(()=>{
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random/10`)
            .then(response => setPics(response.data.message))
            .catch(err => console.log(err))
    }, [])

    const shorter = pics.slice(1);
    
    const hidden = shorter.map(pic => <img className={hide} alt={props.name} src={pic}/>)
    

//one picture displayed by default, nine more if you click on the text. some breeds don't have ten different pictures, so the max will display instead.
    return(
    <div className="tenpix">
        <p onClick={toggle} className="text">{props.name.toUpperCase()}</p>
        <img alt={props.name} src={pics[0]}/>
        {hidden}
    </div>
    )
}