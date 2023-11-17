(() => {
    "use strict"
    document.querySelector("#last-li-yellow").addEventListener("click", (e) => {
        for (let ul of document.querySelectorAll("ul")) {
            ul.children[ul.children.length - 1].style.backgroundColor = "yellow"
        }
    })

    for (let h3 of document.querySelectorAll("h3")) {
        h3.addEventListener("click", (e) => {
            e.target.style.backgroundColor = "";
            e.target
                .parentElement
                .nextElementSibling
                .firstElementChild.style.fontWeight = "bold";

        })
    }
    for (let li of document.querySelectorAll("li")){
        li.addEventListener("click", (e)=>{
            e.target
                .parentElement
                .firstElementChild.style.color="blue"
        })
    }


})();
