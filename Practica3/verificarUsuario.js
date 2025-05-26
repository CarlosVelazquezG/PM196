function verificarUsuario(usuario){
    return new Promise((resolve, reject) => {
        if (usuario === "admin"){
            resolve("Acceso Concedido");
        } else {
            reject("Acceso Denegado");
        }
    });
}

verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.log(err));

verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.log(err));
