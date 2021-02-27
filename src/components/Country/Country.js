import React from 'react';
import './Country.css';

const Country = (props)=>{
    const {name, population, region, flag}= props.country; 
    const handleAddCountry = props.handleAddCountry;
    return (
        
        <div className = "country">
            <h3>{name}</h3>
            <img src={flag} alt=""/>
            <p>Population: {population}</p>
            <small>region: {region}</small> <br/>
            <button onClick = {() => handleAddCountry(props.country)}>Click Me</button>
           
        </div>
        
    );
}

export default Country;

