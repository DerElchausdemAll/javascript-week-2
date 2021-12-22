console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 4  ┃
┗━━━━━━━━━━━━━━┛

1. Add a '<form />' to the '<div id="root"/>'
- The form should have an '<input type="email"/>'
- The form should have a '<button type="submit" />'
- The '<button type="submit" />' should read 'Subscribe'

2. Handle the '<form />' via JavaScript
- Log the email-address in the browser console when the form is submitted

3. save the email-address in the 'localStorage'
- Show a text that reads "Thank you for subscribing"
- Remove the form

4. On reload show a text "You are subscribed" if the localStorage key exists
- The form should not be visible
`);

const root = document.querySelector("#root");

// PART 2 bzw. Aufgabe 4 startet hier

const stored = window.localStorage.getItem("emailadress"); // emailadresse ist der Key, den wir nun brauchen!!!
if (stored) {
  root.innerHTML = /*html*/ `<div>You are subscribed</div>`; // if true, also wenn ein Key im stored ist, dann kommt der Text!!!
} else {
  // if false, weil noch kein Key(E-Mail-Adresse submitted wurde),
  //dann wird nun ab Zeile 38 FORM erstellt und an den root gehängt!

  // PART 2 endet hier!!!

  const form = document.createElement("form");

  root.append(form);

  form.innerHTML = /*html*/ `
<label>
E-Mail: <input type="email" name="email" required/>
</label>
<button
type="submit">Subscribe</button>
</button>
`;

  form.addEventListener("submit", function (clicksubmit) {
    //wenn submit ausgeführt wird, wird eine Funktion ausgeführt, sprich ein Callback.
    // Callback ist die Funktion (clicksubmit) in der Funktion addEventListener!!!!

    clicksubmit.preventDefault(); // verhindert neuladen der Seite, wenn submit gedrückt wird
    const formData = new FormData(clicksubmit.target); // erschafft Object mit key und value, clicksubmit.target === form
    // FormData greift quasi die Daten, welche in event_.target (sprich durch submit klicken) eingelagert werden
    // new FormData() erstellt ein neues FormData Object (welches keys und values enthält?!)

    const email = formData.get("email"); //gibt Value zurück, der in das Formfeld eingetragen wurde, also die E-Mail-Adresse
    window.localStorage.setItem("emailadress", email); // emailadress = Key und email = value, bzw. die Daten, die
    // in das Form-Feld eingetragen werden!
    // Jetzt wurde das ausgeführt bzw. submit gedrückt und darauf folgt der Sprachausgang "danke fürs subscriben"
    root.innerHTML = /*html*/ `             
    <div class="subscribed"> Thank you for subscribing :)</div>
    
    `; //root wird quasi überschrieben
  }); //PART 1 ist jetzt abschgelossen
}
