console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 2  ┃
┗━━━━━━━━━━━━━━┛

1. Add a card element to the '<div id="root"/>'
- The card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<img/>'
- The '<img/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/
- The card should have a content area
- The content area should have a '<h4/>'
- The '<h4/>' should read "My hobbies"
- The content area should have a '<ul/>' with an '<li/>' for each hobby

2. Add a CSS file to this folder (public/exercises/2/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
- the card should have a dark-mode and light-mode
- When you change your preferred color-mode in your macOS preferences, the card should adjust to the mode
- Choose a font from https://fonts.google.com/
- Use the font for your card
`);

// 1
const names = ["Lorenz", "Berta", "Jesus", "Dieter", "Ole"]; //<-- array

const lastNames = ["Schmidt", "Piet", "Grün", "Christus", "Block"];

const sex = ["men", "women"];

function randomN(n) {
  return Math.round(Math.random() * n);
}
console.log(randomN());

function randomItem(array) {
  //<--array ist ein Argument
  const maxIndex = array.length - 1;
  const x = randomN(maxIndex);
  return array[x];
  //   return array[randomN(array.length - 1)]; // das geht auch, anstatt Zeilen 60-62
}
// console.log(randomItem(names));

document.querySelector("#root").innerHTML += `
    <div class="card">
        <header class="card__header>
            <h3 class="card__header--names">
            ${randomItem(names)} ${randomItem(lastNames)}
            </h3>
        </header>
        <figure card__img>
            <img src="https://randomuser.me/api/portraits/${randomItem(
              sex
            )}/${randomN(50)}.jpg"/>
        </figure>
        <div>
            <h4>
                My hobbies
            </h4>
            <ul>
                <li>surfing</li>
                <li>cinema</li>
                <li>bouldering</li>
            </ul>
        </div>
    </div>
`;

const head = document.querySelector("head");

head.innerHTML += `
<link rel="stylesheet" href="/public/exercises/2/style.css">
<style> * {
    box-sizing: border-box;
}
        body {
    margin: 0;        
        }
</style>        
`;

// const style = document.createElement("style");
