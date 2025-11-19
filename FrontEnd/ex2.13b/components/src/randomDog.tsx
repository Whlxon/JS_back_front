import { useState } from "react";

export const randomDog = (setdog : (dog: any) => void) => {
    //const [dog, setdog] = useState();
        
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        if(!response.ok) throw new Error(`<JokeAPI Calling Error>: ${response} : ${response.statusText}`);
        return response.json();
    })
    .then((data) => {setdog(data)})
    .catch((err) => {
        console.log("<JokeAPI Calling Error>: " + err);
    })

    //return dog;
}