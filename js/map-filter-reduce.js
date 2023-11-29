"use strict";
(() => {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];


    /*Problem 1*/

    const numOfLang3 = users.filter((n) => n.languages.length >= 3)
    console.log(numOfLang3)

    /*Problem 2*/

    const userEmails = users.map(n => n.email)
    console.log(userEmails)
    users.map(n => n.yearsOfExperience)
    /*Problem 3*/
    const expYears = users.reduce((total, user) => {
        return total + user.yearsOfExperience
    }, 0)

    const averageExpYears = expYears / users.length
    console.log(expYears);
    console.log(averageExpYears);

    /*Problem 4*/
    const longestEmail = users.reduce((longestEmail, user) => {
        if (longestEmail.length < user.email.length){
            longestEmail = user.email
        }
        return longestEmail
    }, "g")
    console.log(longestEmail);

    /*Problem 5*/
    const usersAsString = users.reduce((userString, user)=>{
        return (userString  + ` ${user.name},`)
    }, "Your instructors are:")
    console.log(usersAsString);
})()