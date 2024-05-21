
const radioButtons = document.querySelectorAll('.radio-container input[type="radio"]');

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function(event) {
        const parentLabel = event.target.parentElement;

        document.querySelectorAll('.radio-container').forEach(label => {
            label.classList.remove('checked');
        });

        parentLabel.classList.add('checked');
    });
});

let close=document.querySelector(".close");
close.addEventListener("click", () => {
    document.querySelector(".second").classList.add("transition-element");
    document.querySelector(".second").style.opacity = "0";
    document.querySelector(".second").style.visibility = "hidden";
    document.querySelector(".first").classList.add("transition-element");
    document.querySelector(".first").style.opacity = "1";
    document.querySelector(".first").style.visibility = "visible";
});
let divs = document.querySelectorAll(".right");
let second = document.querySelector(".second");
let first = document.querySelector(".first");
let toBeFilled = document.querySelectorAll(".toBeFilled");


divs.forEach((div, index) => {
    div.addEventListener("click", () => {
        second.classList.add("transition-element");
        second.style.display = "block";
        second.style.opacity = "1";
        second.style.visibility = "visible";

        first.classList.add("transition-element");
        first.style.opacity = "0";
        first.style.visibility = "hidden";

       
        let cardContent = document.querySelectorAll(".card")[index].innerHTML;


        toBeFilled.forEach(element => {
            element.innerHTML = cardContent;
        });
    });

});

let back = document.querySelector(".back");

back.addEventListener("click", () => {
    first.classList.add("transition-element");
    first.style.opacity = "1";
    first.style.visibility = "visible";

    second.classList.add("transition-element");
    second.style.opacity = "0";
    second.style.visibility = "hidden";
});



const radioContainers = document.querySelectorAll('.radio-container');
const inBold = document.querySelectorAll('.inBold');
const normal = document.querySelectorAll('.normal');


let bold = ['3 ay', '6 ay', '9 ay', '12 ay'];

radioContainers.forEach((container, index) => {
    let inBold = container.querySelector('.inBold');

   
    if (inBold) {
        inBold.innerHTML = bold[index] ; 
    }
});

let norm=[' / ayda 300 azn', ' / ayda 230 azn', ' / ayda 205 azn', ' /  ayda 186 azn'];
radioContainers.forEach((cont, index) => {
    let normal = cont.querySelector('.normal');

   
    if (normal) {
        normal.innerHTML = norm[index] ; 
    }
});
let labels = document.querySelectorAll('.radio-container');


labels.forEach(label => {
    label.addEventListener('click', function() {
        labels.forEach(label => {
            let inBold = label.querySelector('.inBold');
            inBold.classList.remove('checked');
            let normal = label.querySelector('.normal');
            normal.classList.remove('checked');
        });

        let inBold = label.querySelector('.inBold');
        inBold.classList.add('checked');
        let normal = label.querySelector('.normal');
        normal.classList.add('checked');
    });
});

