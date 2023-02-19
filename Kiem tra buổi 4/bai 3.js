let info = [];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    localStorage.setItem('name',JSON.stringify(name));
    localStorage.setItem('age',JSON.stringify(age));
    localStorage.setItem('email',JSON.stringify(email));
});
