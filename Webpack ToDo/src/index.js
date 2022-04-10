
const root=document.querySelector("#root")

const inputfield=document.createElement("textarea");
const btn =document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("class","mybutton");
btn.addEventListener("click",myfunction)

root.append(inputfield,btn);
function myfunction()
{
    const data=inputfield.value;
    console.log(data);
}