"use strict";

const integerArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const integerSearchHandler = () =>
{
    const input = parseInt(prompt(`Type here an integer in the array below you want to search:\n[${integerArray.join(", ")}]`));

    for (let i = 0; i < integerArray.length; i++)
    {
        if (input === integerArray[i])
        {
            alert(`An integer ${input} is available in the array at index: ${i}`);
            break;
        }

        else
        {
            if (i === (integerArray.length - 1))
            {
                alert(`An integer ${input} is unavailable in the array!`);
                break;
            }
        }
    }
}

integerSearchHandler();