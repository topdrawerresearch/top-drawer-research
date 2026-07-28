const button = document.getElementbyId(".puzzle1btn");

button.addEventListener("click", () => {
    console.log("Clicked");
});

puz1btn.addEventListener("click", (event) => {
    console.log(event.target);
});