function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
        // msg de Bom dia
        img.src = 'M.png'
        document.body.style.background = '#FEC960'
    } else if (hora >= 12 && hora <= 18) {
        // msg de Boa tarde
        img.src = 'T.png'
        document.body.style.background = '#4F2A13'
    } else {
        // msg de Boa noite
        img.src = 'N.png'
        document.body.style.background = '#12161F'
    }
}
