import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DogCard(props){

return (
    <div className="dog-card">
        <p className="text">ß{props.name}</p>
        <img alt={props.name} className="dogpic" src={props.img}/>
    </div>
    );
} 
