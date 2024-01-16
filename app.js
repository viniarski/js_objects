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

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    numberOfPages: 180
};

const bookAd = `Check out the book "${book.title}" written by ${book.author}. It has ${book.numberOfPages} pages.`;

console.log(bookAd);

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

const blogPost = {
    title: "My first blog post",
    author: {
      name: "Bob",
      age: 30,
      favouriteColour: "red",
    },
    tags: ["coding", "javascript", "objects", "arrays"],
    content: "This is my blog post about learning objects and arrays.",
  };

  console.log(blogPost.author.name); // Output: Bob
  console.log(blogPost.tags[0]); // Output: coding
  console.log(blogPost.tags.length); // Output: 4

  console.log(
    `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
  ); // Output: There are 4 tags for post "My first blog post":
  for (let i = 0; i < blogPost.tags.length; i++) {
    console.log(blogPost.tags[i]); // Output: coding, javascript, objects, arrays
  }

  console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":
  for (let tag of blogPost.tags) {
    console.log(tag); // Output: coding, javascript, objects, arrays
  }