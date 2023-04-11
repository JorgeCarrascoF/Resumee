const phone = document.getElementById("phone");
const email = document.getElementById("email");

phone.addEventListener('click', ()=>{copy(phone)});
email.addEventListener('click', ()=>{copy(email)});


function copy(item) {
    // console.log('Copiando ' + item.innerText);
    navigator.clipboard.writeText(item.innerText);
    console.log("Copiado al portapapeles: " + item.innerText);
}

document.querySelectorAll('.has-hidden-item').forEach(item => {
    item.addEventListener('mouseover',  ()=>{showHidden(item.lastElementChild)});
    item.addEventListener('mouseout',  ()=>{hide(item.lastElementChild)});
})

function showHidden(element) {
   element.setAttribute("style", "display:block;")
}

function hide(element) {
    element.setAttribute("style", "display:none;")
}
