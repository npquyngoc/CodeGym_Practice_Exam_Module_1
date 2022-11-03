"use strict";

const characterArray = ["a", "o", "e", "u", "i"];
const searchString = "npquyngoc";

const characterSearchHandler = (string) =>
{
    let count = 0;
    string.split();

    for (let i = 0; i < string.length; i++)
    {
        for (let j = 0; j < characterArray.length; j++)
        {
            if (string[i].toLowerCase() === characterArray[j])
            {
                count++;
                break;
            }
        }
    }

    alert(`The string "${string}" contained ${count !== 0 ? count : "0 (false)"} characters in the array below:\n[${characterArray.join(", ")}]`);
}

characterSearchHandler(searchString);