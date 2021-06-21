"use strict"

let first = document.querySelector(".first")
let second = document.querySelector(".second")
function get() {
    console.log(first.value, second.value)
    let sum = (+first.value) + (+second.value)
    console.log(sum);
    console.log(typeof (sum))
    let heading = document.querySelector("h3");
    heading.innerHTML = sum;
    heading.setAttribute("class","heelo")
    document.querySelector("div").getAttribute("data-widget-name")

}
