"use strict";

export class Staff
{
    constructor(fullName, email)
    {
        this.fullName = fullName;
        this.email = email;
    }

    getFullName = () => this.fullName;
    getEmail = () => this.email;

    setFullName = (fullName) => { this.fullName = fullName; }
    setEmail = (email) => { this.email = email; }

    toString = () =>
    (`
        Full name: ${this.fullName}<br/>
        Email: ${this.email}<br/><br/>
    `);
}