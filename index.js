const color = document.querySelector(".color");
const hex = document.querySelector(".hexcolor");

const generatecolor = ()=>{
    const randomcolor = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = "#" + randomcolor;
    color.innerHTML = "#" + randomcolor;

}

hex.addEventListener("click" , generatecolor);
generatecolor();