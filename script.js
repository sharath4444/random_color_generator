const getColor = () =>{
    
    const randomNo=Math.floor(Math.random() * 1677215);
    const randomCode="#"+randomNo.toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText=randomCode;
    navigator.clipboard.writeText(randomCode);

}
document.querySelector(".btn").addEventListener("click", 
    getColor)
getColor();