(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName: 'Marco', lastName: 'Sanchez',

    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return `Hello from ${person.firstName} ${person.lastName}!`
    }

    console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [{name: 'Cameron', amount: 180}, {name: 'Ryan', amount: 250}, {name: 'George', amount: 320}];


    shoppers.forEach(shopper => {
        let message;
        if (shopper.amount >= 200) {
            shopper.discountTotal = shopper.amount - (shopper.amount * .12);
            shopper.dicountMessage = `${shopper.name}, your total is $${shopper.amount.toFixed(2)}. You are eligible for a discount of 12%. New total is $${shopper.discountTotal.toFixed(2)}`
        } else {
            shopper.discountTotal = 0;
            shopper.dicountMessage = `${shopper.name}, your total is $${shopper.amount.toFixed(2)}.`
        }
    });
    shoppers.forEach(shopper => console.log(`${shopper.dicountMessage}`))


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [{
        title: "Sapiens", author: {
            fistName: "Yuval", lastName: "Harari"
        }

    }, {
        title: "Thinking_Fast_and_Slow", author: {
            fistName: "Daniel", lastName: "Kahneman"
        }

    }, {
        title: "The_Fault_in_Our_Stars", author: {
            fistName: "John", lastName: "Green"
        }

    }, {
        title: "The_Housemaid", author: {
            fistName: "Freida", lastName: "McFadden"
        }

    }, {
        title: "Me_Talk_Pretty_One_Day", author: {
            fistName: "David", lastName: "Sedaris"
        }

    },]

    /*    books.forEach(book => console.log(`${book.title}`));
        books.forEach(book => console.log(`${book.author.fistName}`));
        console.log(/nl);
        books.forEach(book => console.log(`${book.author.lastName}`));
        console.log(books);*/

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


      for (let i = 0; i < books.length;
           i++) {
          console.log(`Book # ${i + 1}`);
          console.log(`Title: ${books[i].title.replace(/_/g," ")}`);
          console.log(`Author: ${books[i].author.fistName} ${books[i].author.lastName}`)
          console.log(`_ _ _`)
      }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    let bookList = [];
    let createBook = () => {
        let book = {
            title: prompt("What is the books title?").replace(/ /g, "_"),
            author: {
                firstName: prompt("What is the Authors first name?"),
                lastName: prompt("What is the authors last name?"),
            }
        }
        bookList.push(book);
        if (confirm("Create new book?")) {
            createBook()
        }
    }

    let showBookInfo = (Library) => {
        for (let i = 0; i < Library.length; i++) {
            console.log(`Book # ${i + 1}`);
            console.log(`Title: ${Library[i].title.replace(/_/g, " ")}`);
            console.log(`Author: ${Library[i].author.firstName} ${Library[i].author.lastName}`)
            console.log(`_ _ _`)
        }
    }

    createBook()
    bookList.forEach(book => console.log(book))

    showBookInfo(bookList)


})();
