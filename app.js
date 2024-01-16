// const person = {
//     name: "Bob",
//     age: 30,
//     favouriteColour: "red",
//   };
  
// console.log(person);
// console.table(person); //display the object in a table format
// console.log(person.name); // Output: Bob
// console.log(person.age); // Output: 30
// console.log(person.favouriteColour); // Output: red

// person.favouriteFood = "pizza";

// console.log(person.favouriteFood); // Output: pizza

// const car = {
//     make: 'porsche',
//     model: 911,
//     color: 'red',
// }

// let advert = `For sale: ${car.color} ${car.make} ${car.model}`;

// console.log(advert)

// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     numberOfPages: 180
// };

// const bookAd = `Check out the book "${book.title}" written by ${book.author}. It has ${book.numberOfPages} pages.`;

// console.log(bookAd);

let items = [
    {name_1: 'microwave',
    price: 23},
    {name_1: 'oven',
    price: 43,},
]

for (let item of items) {
    console.log(item.name_1);
}

items.forEach(item => {
    console.log(item.name_1);
});