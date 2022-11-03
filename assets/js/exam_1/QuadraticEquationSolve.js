"use strict";

const numberFormatHandler = (number) => number.toFixed(2);

const quadraticEquationSolveHandler = (numberA, numberB, numberC) =>
{
    if (numberA === 0)
    {
        if (numberB === 0)
        {
            if (numberC === 0) alert("The equation has infinite solutions!");
            else alert("The equation has no solution!");
        }

        else
        {
            const result = numberFormatHandler(-numberC / numberB);
            alert(`The equation has only solution is:\nx = ${result}`);
        }
    }

    else
    {
        const delta = (numberB * numberB) - (4 * numberA * numberC);

        if (delta > 0)
        {
            const result1 = numberFormatHandler((-numberB + Math.sqrt(delta)) / (2 * numberA));
            const result2 = numberFormatHandler((-numberB - Math.sqrt(delta)) / (2 * numberA));

            alert(`The equation has double solutions are:\nx1 = ${result1} & x2 = ${result2}`);
        }

        else if (delta === 0)
        {
            const result = numberFormatHandler(-numberB / (2 * numberA));
            alert(`The equation has double solutions are:\nx1 & x2 = ${result}`);
        }

        else alert("The equation has infinite solutions!");
    }
}

quadraticEquationSolveHandler(0, 0, 0);