document.querySelector('body').addEventListener('keyup',function(event){
    som(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', function(){
    let dado = document.querySelector('#input').value
        if(dado!=''){
            let arrayDado = dado.split('')
            let tempo = 0
            for(let a of arrayDado){
                setTimeout(function(){
                    som(`key${a}`)
                },tempo)
                tempo+=200
            }
        }
})


function som(sinal){
let sinalAudio = document.querySelector(`#s_${sinal}`)
let chave = document.querySelector(`div[data-key="${sinal}"]`)
    if(sinalAudio){
        sinalAudio.currentTime=0
        sinalAudio.play()
    }
    if(chave){
        chave.classList.add('active')
        setTimeout(function(){
            chave.classList.remove('active')
        },300)
    }
}