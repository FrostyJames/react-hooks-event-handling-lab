// Code Keypad Component Here
import React from 'react';

function Keypad(){
    function handleKeyPress(){
        console.log("Entering password...");
    }
    return < input type="password" onChange={handleKeyPress} />
}
export default Keypad;