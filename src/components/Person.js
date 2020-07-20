import React from 'react';

const Person = (props) => {
    return(
        <div>
            <h1>Trabalhando com State</h1>
            <h2>(Person Component)</h2>
            <hr/>

            <h3>Dados fixos:</h3>
            <p>Name: {props.name}</p>
            <p>Eyes: {props.eyes}</p>
            <p>Sign: {props.sign}</p>

            <hr/>

            <h3>Dados variáveis:</h3>
            <p>Weight: {props.weight}</p>
            <p>Height: {props.height}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

export default Person;