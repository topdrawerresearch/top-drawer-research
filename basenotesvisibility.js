document.addEventListener("click", toggle);

function toggle(event){

    if(event.target.classList.contains("hideable")){
        event.target.classList.toggle("hidden");
    }

}