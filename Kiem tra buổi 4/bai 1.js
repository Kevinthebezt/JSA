form.addEventListener("submit", (event) => {
    event.preventDefault();
    var n = document.getElementById("so_nhap").value;
    var ketqua = 1;

    for (var i = 1; i <= n; i++) {
        var ketqua = i * ketqua;
    };
    alert(ketqua);
});
