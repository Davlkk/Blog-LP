
document.addEventListener("DOMContentLoaded", function (){
    const btnEnviar = document.querySelector(".btn-success");

    btnEnviar.addEventListener("click", function(){
        const comentario = document.querySelector("#text-area-comment").value
        const nome = document.querySelector("#name-comment").value
        const email = document.querySelector("#email-comment").value

        alert(`comentario: ${comentario} \n nome: ${nome} \n email: ${email} \n`)
    })
})

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}