console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 3  ┃
┗━━━━━━━━━━━━━━┛

1. Add a 4 card elements to the '<div id="root"/>'
- The cards should be displayed in a responsive grid
- Each card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<image/>'
- The '<image/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/

2. Add a CSS file to this folder (public/exercises/3/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
`);

// ["a", "b", "c", "d", "e", "f", "g"].map(char => char.toUpperCase());

// const cards = Array.from({ length: 4 });
// const people = cards.map(() => {

// const people = Array.from({ length: 4 }).map(() => {
//   const firstName = "John";
//   return {
//     name: firstName,
//     gender: "men",
//     image: "https://randomuser.me/api/portraits/men/50.jpg",
//   };
// });
// // console.log(cards, people, people.join(""));

function randomN(n) {
  return Math.round(Math.random() * n);
}

function randomItem(array) {
  //<--array ist ein Argument
  const maxIndex = array.length - 1;
  const x = randomN(maxIndex);
  return array[x];
  //   return array[randomN(array.length - 1)]; // das geht auch, anstatt Zeilen 60-62
}

const firstNames = ["Lorenz", "Berta", "Franz", "Dieter", "Ole"];

const lastNames = ["Schmidt", "Piet", "Grün", "Christus", "Block"];

const hobbies = ["Surfing", "Cooking", "Cinema", "Hiking", "Bouldering"];

const gender = ["men", "women"];

const people = Array.from({ length: 8 }).map(() => ({
  // letzte ( nicht ganz klar
  firstName: randomItem(firstNames),
  lastName: randomItem(lastNames),
  photo: `https://randomuser.me/api/portraits/${randomItem(gender)}/${randomN(
    99
  )}.jpg`, //warum ticks und nicht quotes?
}));

document.querySelector("#root").innerHTML += `
<div class="Grid">${people
  .map(
    person => `
    <div class="Card">
        <header class="Card-header">
            <h3>${person.firstName} ${person.lastName}</h3>
        </header>
        <figure class="Card-media">
            <img src="${person.photo}"/>
        </figure>
    </div>
    `
  )
  .join("")}</div>`;
form