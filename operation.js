const textField=document.querySelector("input");
const btnlogin=document.querySelector("#btn1");
const btnlogout=document.querySelector("#btn2");
const h1tag=document.querySelector("h1");
console.log(textField.value)
if (localStorage.getItem("id")) {
    h1tag.innerHTML="Already logged:"+localStorage.getItem("id");
}
btnlogin.onclick=()=>{
    if (textField.value) {
        const x=textField.value;
        localStorage.setItem("id",x);
        h1tag.innerHTML="Already logged:"+localStorage.getItem("id");
    }
}
btnlogout.onclick=()=>{
    localStorage.clear();
    location.reload();
}