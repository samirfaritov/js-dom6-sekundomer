let box = document.querySelector('.box')
let minute = document.querySelector('.minute')
let box2 = document.querySelector('.box2')
let box1 = document.querySelector('.box1')
let secound = document.querySelector('.secound')
let box4 = document.querySelector('.box4')
let box3 = document.querySelector('.box3')
let millisecound = document.querySelector('.millisecound')
let box5 = document.querySelector('.box5')
let item = document.querySelector('.item')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')

let interval;

let s = 0
let m = 0
let mm = 0
let b = 0


item.addEventListener('click', () => {
    interval = setInterval(() => {
        mm++
        if (mm <= 9) {
            millisecound.innerHTML = `0${mm}`
        } else {
            millisecound.innerHTML = mm
        }
        if (mm <= 9) {
            millisecound.innerHTML = `0${mm}`
        } else {
            millisecound.innerHTML = mm
        }
        
        if (mm == 100) {
            s++
            secound.innerHTML = s
            mm = 0
            millisecound.innerHTML = mm
        }
        
        if (s <= 9) {
            secound.innerHTML = `0${s}`
        } else {
            secound.innerHTML = s
        }
        if (m <= 9) {
            minute.innerHTML = `0${m}`
        } else {
            minute.innerHTML = m
        }
        
        if (s == 60) {
            m++
            minute.innerHTML = m
            s = 0
            secound.innerHTML = s
        }
    }, 10)
})

item2.addEventListener('click', () => {
    clearInterval(interval)
})

item3.addEventListener('click', () => {
    clearInterval(interval)
    mm = 0
    s = 0
    m = 0
    
    minute.innerHTML = '00'
    secound.innerHTML = '00'
    millisecound.innerHTML = '00'
    
})

box.addEventListener('click', () => {
    setInterval(interval)
    b++ 
    if (b <= 10) {
            minute.innerHTML = `0${m}`
        } else {
            minute.innerHTML = m
    }
})