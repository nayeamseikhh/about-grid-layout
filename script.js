// // button create and show in browser
// let btn = document.createElement("button");
// btn.textContent = "Click JS button";
// btn.addEventListener("click", () => {
//   // h1 text create and show in browser
//   let heading = document.createElement("h1");
//   heading.textContent = "I am a Web Developer";
//   document.body.appendChild(heading);
//   // document.body.appendChild(Object.assign(document.createElement("h1"), { textContent: "Hello, DOM!" }));
// });
// // CSS apply in JS
// btn.style.backgroundColor = "green";
// btn.style.color = "white";
// btn.style.borderRadius = "5px";

// document.body.appendChild(btn);

// //innerHTML p tag/element id(paragraph) insert text using JS
// document.getElementById("paragraph").innerHTML =
//   "The getElementById Method The most common way to access an HTML element is to use the id of the element. <br> In the example above the getElementById method used id='paragraph' to find the element.";

// //innerHTML  .div (insert a full tag and text both)
// document.getElementById("content").innerHTML =
//   "<h2>Welcome to JavaScript!</h2>";

// //innerText inert just <p>text</p>
// document.getElementById("message").innerText = "Hello, JavaScript!";

// //Setting/Modifying an Attribute also update
// let image = document.getElementById("myImage");
// image.src = "new-image.jpg"; // Changes the image source
// image.alt = "New Image Description"; // Updates alt text

// //Using setAttribute() to Modify an Attribute
// let button = document.getElementById("myButton");
// button.setAttribute("disabled", "true"); // Disables the button
// button.innerText = "changed";

// //Write into the HTML output stream
// document.write("  I want to try to learning HTML DOM");

// let body = document.querySelector("body");

// // ul li create in JS
// let ul = document.createElement("ul");
// document.body.appendChild(ul);

// let li1 = document.createElement("li");
// li1.innerText = "Home";
// ul.appendChild(li1);

// let li2 = document.createElement("li");
// li2.innerText = "Product";
// ul.appendChild(li2);

// let li3 = document.createElement("li");
// li3.innerText = "Shopping";
// ul.appendChild(li3);

// let li4 = document.createElement("li");
// li4.innerText = "Blog";
// ul.appendChild(li4);

// //html input create in JS
// let search = document.createElement("input");
// search.content = "Search Box";
// document.body.appendChild(search);

// document.getElementById("Date_and_time").innerHTML = "Date : " + Date();
// let dateElement = document.getElementById("Date_and_time");
// dateElement.innerHTML = "Date: " + Date();
// dateElement.style.fontSize = "30px";
// dateElement.style.fontWeight = "bold";
// dateElement.style.textAlign = "center";
// document.body.style.textAlign = "center";

// //Event listener css
// let heading = document.getElementById("id2");
// let btn2 = document.createElement("button");
// btn2.textContent = "btn2";
// document.body.appendChild(btn2);

// btn2.addEventListener("click", () => {
//   heading.style.color = "yellow";
// });

const parentDiv = document.querySelector(".main_parent");
const innerChild = document.querySelector(".inner_child");
const button = document.querySelector(".button");

//event Propegation
// Bubling (defult), Capturing

// parentDiv.addEventListener("click", listening, { capture: true });
// innerChild.addEventListener("click", listening, { capture: true });
// button.addEventListener("click", listening, { capture: true });

parentDiv.addEventListener("click", listening);
innerChild.addEventListener("click", listening);
button.addEventListener("click", listening);

//{capture:true,} add for      parent to child
//bubbling event.currentTarget    (defult) child to parent
// function listening(event) {
//   console.log(event.currentTarget);
// }
function listening(event) {
  event.stopPropagation();
  console.log(event.currentTarget);
}
