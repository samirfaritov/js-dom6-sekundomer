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
        mm--
        millisecound.innerHTML = getZero(mm)

        if (mm < 0) {
            s = 59
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



function getZero(num) {
    if (num <= 9) {
        return `0${num}`
    } else {
        return num
    }
}




box.addEventListener('click', () => {
    m++
    if (m <= 59) {
        minute.innerHTML = getZero(m)
    } else{
        m = 0
        minute.innerHTML = getZero(m)
    }
})
box2.addEventListener('click', () => {
    m--
    if (m == 0) {
        
    }
})
box1.addEventListener('click', () => {
    s++
    if (s <= 59) {
        secound.innerHTML = getZero(s)
    } else{
        s = 0
        secound.innerHTML = getZero(s)
    }
})
box4.addEventListener('click', () => {
    
})
box3.addEventListener('click', () => {
    mm++
    if (mm <= 99) {
        millisecound.innerHTML = getZero(mm)
    } else{
        mm = 0
        secound.innerHTML = getZero(mm)
    }
})
box5.addEventListener('click', () => {
    
})