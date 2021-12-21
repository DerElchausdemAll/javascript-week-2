console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 1  ┃
┗━━━━━━━━━━━━━━┛

1. Add a headline to the '<div id="root"/>'.
- Do not change the index.html
- Only use JavaScript.
- The Page should show "It works!"
- The Headline should use the tag '<h1/>'

2. Give the headline a className
- The headline should have the className "main-headline"

3. Add a '<style/>' element to the '<head/>'
- Do not change the index.html
- Only use JavaScript.
- The '<style/>' element should have the id "main-style"

4. Add css to the '<style id="main-style"/>' element
- add the following css
- the headline should be blue
`);

// 1.
const element = document.querySelector("#root");
const h1 = document.createElement("h1");
element.append(h1);
h1.innerHTML = "It works!";

// element.innerHTML += "<div> Hallo I am added to the Headline with += </div>"
// element.innerHTML = "<h1>It works!</h1>";

// 2.
h1.className = "main-headline";
// const test = `_${Math.round(Math.random() * 2000)}`;

// 3.
const head = document.querySelector("head");
const style = document.createElement("style");

head.append(style);

style.setAttribute("id", "main-style");

// 4.
// document.getElementById("main-style").style.color = "blue";
style.innerHTML = ".main-headline {color: blue};";
// h1.setAttribute("id", "main-style");
//  style.innerHTML = `
// .main-headline {
//     color:blue
// }`;

// style.innerHTML = `
// .${test} {
//     color:blue
// }`;

// document.head.innerHTML += /*html*/
// <style id="main-style">
//     .main-headline {
//     color: blue;
//     }
// </style>

// head.innerHTML +=
/*html*/
// `
// <style id="main-style">
//     .main-headline {
//         color: blue;
//     }
//     </style>
// `
