form.addEventListener("submit", (event) => {
    event.preventDefault();
    var n = document.getElementById("so_nhap").value;

    for (var i = n; i > 0; i - 1) {
        console.log('*');
    };
});