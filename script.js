let lft = document.getElementById('left-btn');
let rgt = document.getElementById('right-btn');
let container = document.getElementsByClassName('card-container')[0];

rgt.addEventListener('click', () => {
    container.scrollLeft += 300;
});
lft.addEventListener('click', () => {
    container.scrollLeft -= 300;
});

let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return;
    }
    alert("Form submitted successfully!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    message.value = "";
})