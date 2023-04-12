const phone = document.getElementById("phone");
const email = document.getElementById("email");

const hover = document.getElementById("hover");
let i = 0;

const click = document.getElementById("click");

phone.addEventListener('click', ()=>{copy(phone)});
email.addEventListener('click', ()=>{copy(email)});

// TODO: add sound and mute button, change copy() funcionality, make div to
// alert that content has been copied, MAKE RESPONSIVE

function copy(item) {
    navigator.clipboard.writeText(item.innerText);
    console.log("Copiado al portapapeles: " + item.innerText);
}

document.querySelectorAll('.hidden-click-item').forEach(item => {
    item.addEventListener('click', () => (showClicked(item.lastElementChild)))
});

document.querySelectorAll('.has-hidden-item').forEach(item => {
    item.addEventListener('mouseover',  ()=>{showHidden(item.lastElementChild)});
    item.addEventListener('mouseout',  ()=>{hide(item.lastElementChild)});
})

function showClicked(element){
    console.log("se muestra el elemento")
    element.setAttribute("style", "display:block");
    click.setAttribute("style", "display:none");
    setTimeout(function () {
        element.setAttribute("style", "display:none");
        click.setAttribute("style", "display:flex");
    }, 1000);
}

function showHidden(element) {
    element.setAttribute("style", "display:block;");
    hover.setAttribute("style", "display:none;");
    
}

function hide(element) {
    element.setAttribute("style", "display:none;")
    if(i < 15) {
        hover.setAttribute("style", "display:flex;");
        i++;
    }
}
