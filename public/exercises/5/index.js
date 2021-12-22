console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 5  ┃
┗━━━━━━━━━━━━━━┛

1. Add a header with a menu-button
- Add a sidebar with a list of links
- Add a main section with a headline.
- THe headline should read "Hello User"

2. Add a CSS file to this folder and link it from your HTML
- Add a simple page styling with a static sidebar
- Make sure you can see the different sections (i.e. use green, blue, orange)
- Use 'display: grid' or 'display flex' for the layout 

A: Sidebar closed (default)
┏━━━━━━━━━━━━━━┓
┃    HEADER    ┃
┣━━━━━━━━━━━━━━┫
┃     MAIN     ┃
┃              ┃
┗━━━━━━━━━━━━━━┛

B: Sidebar open (toggle menu)
┏━━━┳━━━━━━━━━━┓
┃ S ┃  HEADER  ┃
┃ I ┣━━━━━━━━━━┫
┃ D ┃   MAIN   ┃
┃ E ┃          ┃
┗━━━┻━━━━━━━━━━┛

3. Toggle the sidebar when the button is clicked
- Store the toggle state in the browsers localStorage

- Add 'data-test-id="menu-button"' to the menu-button
- Add 'data-test-id="sidebar"' to the sidebar

Make sure that you implement the following features:

- .cypress/behaviors/features/ToggleSidebar.feature
- .cypress/behaviors/features/KeepSidebarState.feature

Run the tests via 'npm run cypress:open'
All tests should pass

`);

const root = document.querySelector("#root");

root.innerHTML +=
  /*html*/
  `
<head><link rel="stylesheet" href="style.css"></head>
<div class="wrapper">
    <header>
        <button class="menu">
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
        </button>
    </header>
    <nav class="sidebar">
    <ul>
      <li><a href="#">menu1</a></li>
      <li><a href="#">menu2</a></li>
      <li><a href="#">menu3</a></li>
      <li><a href="#">menu4</a></li>
    </ul>
    </nav>
    <div class="content">
            HELLO USER!
    </div>

</div>

`;

const menubutton = document.querySelector(".menu");

const navigation = document.querySelector(".sidebar");

menubutton.addEventListener("click", () => {
  navigation.classList.toggle("navbar--show");
});
