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
let two = document.querySelector('.two')
let four = document.querySelector('.four')



let interval;

let s = 0
let m = 0
let mm = 0
let b = 0


item.addEventListener('click', () => {


two.classList.add('active')
    four.classList.add('active')
    clearInterval(interval)

    interval = setInterval(() => {
        mm--
        millisecound.innerHTML = getZero(mm)

        if (mm < 0) {
            s--
            mm = 59
            millisecound.innerHTML = getZero(mm)
            secound.innerHTML = getZero(s)
        } else if (s < 0) {
            m--
            s = 59
            mm = 59
            minute.innerHTML = getZero(m)
            secound.innerHTML = getZero(s)
            millisecound.innerHTML = getZero(mm)
            
        } else if (m === 0 && s === 0 && mm === 0) {
            clearInterval(interval)
            var end = Date.now() + (15 * 1000);
            
            // go Buckeyes!
            var colors = ['#bb0000', '#ffffff'];
            
            (function frame() {
  confetti({
      particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
    
    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
}());
console.log("stop");
}
}, 1000)
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
    minute.innerHTML = getZero(m)

    if (m < 0) {
        m = 0
        minute.innerHTML = getZero(m)
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
        s--
    secound.innerHTML = getZero(s)
    
    if (s < 0) {
        s = 0
        secound.innerHTML = getZero(s)
    }
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
    mm--
    millisecound.innerHTML = getZero(mm)
    
    if (mm < 0) {
        mm = 0
        millisecound.innerHTML = getZero(mm)
    }
})





