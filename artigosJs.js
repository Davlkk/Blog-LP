
document.addEventListener("DOMContentLoaded", function (){
    const btnEnviar = document.querySelector(".btn-success");

    btnEnviar.addEventListener("click", function(){
        const comentario = document.querySelector(".text-area-comment").value
        const nome = document.querySelector(".name-comment").value
        const email = document.querySelector(".email-comment").value

        alert(`Comentário adicionado! Veja o que escreveu: \n comentário: ${comentario} \n nome: ${nome} \n e-mail: ${email}`)
    })
})
