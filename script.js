document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const pass = document.getElementById("pass").value;

    const formData = new FormData();
    formData.append("usuario", usuario);
    formData.append("pass", pass);

    fetch("./back.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        console.log("Respuesta del servidor:", result);
        if (result.trim() === "ok") {
            alert("Credenciales válidas");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    })
    .catch(error => {
        console.error("Error en el fetch:", error);
    });
});
