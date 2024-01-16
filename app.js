const person = {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  };
  
console.log(person);
console.table(person); //display the object in a table format
console.log(person.name); // Output: Bob
console.log(person.age); // Output: 30
console.log(person.favouriteColour); // Output: red

person.favouriteFood = "pizza";

console.log(person.favouriteFood); // Output: pizza

const car = {
    make: 'porsche',
    model: 911,
    color: 'red',
}

let advert = `For sale: ${car.color} ${car.make} ${car.model}`;

console.log(advert)