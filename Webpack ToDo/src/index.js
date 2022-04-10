import "./index.css";
import "./01_Evernote_logo.jpg"

const root = document.querySelector("#root");
const inputcontainer = document.createElement("div");

var image=document.createElement("img")
image.src="01_Evernote_logo.jpg"

const note = document.createElement("h3");

const inputfield = document.createElement("textarea");
inputfield.setAttribute("class", "mynote");
const btn = document.createElement("button");
btn.innerText = "Add Note";
btn.setAttribute("class", "mybutton");

btn.addEventListener("click", myfunction);

inputcontainer.append(inputfield, btn);
const container = document.createElement("div");

root.append(image,inputcontainer, container);

function myfunction() {
  var data = inputfield.value;
  savedata(data);
}

function savedata(data) {
  let dataarr = JSON.parse(localStorage.getItem("localdata")) || [];
  dataarr.push(data);
  localStorage.setItem("localdata", JSON.stringify(dataarr));
  displaydata(dataarr);
}

function displaydata(dataarr) {
    container.innerHTML="";
  dataarr.forEach((el) => {
      let notediv=document.createElement("div");
    notediv.innerHTML = el;
    container.append(notediv);
  });
}
