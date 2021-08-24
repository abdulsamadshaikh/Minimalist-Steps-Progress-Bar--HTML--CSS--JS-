/*  
Project Name: Minimalist Steps Progress Bar
Description: This is the JavaScript-based minimalist Steps Progress Bar. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
*/

const progress = document.getElementById ('progress')
const prev = document.getElementById ('prev')
const next = document.getElementById ('next')
const circles = document.querySelectorAll ('.circle')

let curruntActive = 1

next.addEventListener('click', () => {
    curruntActive++

    if(curruntActive > circles.length) {
        curruntActive = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    curruntActive--

    if(curruntActive < 1) {
        curruntActive = 1
    }
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < curruntActive) {
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(curruntActive === 1) {
        prev.disabled = true
    } else if(curruntActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
update()