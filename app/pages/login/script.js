document.querySelector("button").addEventListener("click", function() {
    let valueInputEmail = document.querySelector("#email").value;
    let valueInputPassword = document.querySelector("#password").value;

    if (valueInputEmail === "") {
        alert("Favor informar o email")
        return
    }
    if (valueInputPassword === "") {
        alert("favor informar a senha")
        return
    }

    navigate('../option');
})
