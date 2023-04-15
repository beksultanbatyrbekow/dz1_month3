///1
const input = document.querySelector('#inp')
const check = document.querySelector('.btn')
const text = document.querySelector('.text')

const regExp = /^0\d{13}$/

check.onclick = () => {
    if (regExp.test(input.value)){
        text.innerText = 'ok'
        text.style.color = 'green'
    }else {
        text.innerText = 'not ok'
        text.style.color = 'red'
    }
}

///2
const son = document.querySelector('.son')
let position = 0
function ball(){
    if (position <= 449){
        position++
        son.style.left = `${position}px`
        setTimeout(ball, 10)
    }
}

ball()