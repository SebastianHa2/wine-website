let counter1 = 0
let counter2 = 1

window.addEventListener("wheel", scroll)

function scroll(e){
    const deltaY = (e.deltaY > 0)
    if(deltaY){
        if(counter2 < 5){
            counter1++
            counter2++
        }

    }
    else{
        if( counter2 > 1){
            counter1--
            counter2--
        }
    }

    progressCounter()


    document.querySelector(`.section-${deltaY ? counter1 : counter2}`).style.left= `${deltaY ? "-100vw" : "0"}`

}

const btnRight = document.querySelector(".right")
const btnLeft = document.querySelector(".left")

btnRight.addEventListener("click", swipeRight)
btnLeft.addEventListener("click", swipeLeft)

function swipeRight(e){
    if(counter2 < 5){
        counter1++
        counter2++
        console.log(counter2)
        document.querySelector(`.section-${counter1}`).style.left = "-100vw"
    }

    if(counter2 === 5){
        btnRight.style.visibility = "hidden"
    }

    btnLeft.style.visibility = "visible"

    progressCounter()
}

function swipeLeft(e){
    if(counter2 > 1){
        counter1--
        counter2--
        document.querySelector(`.section-${counter2}`).style.left = "0"
    }

    if(counter2 ===1){
        btnLeft.style.visibility = "hidden"
    }

    btnRight.style.visibility = "visible"

    progressCounter()
}


const circles = document.querySelectorAll(".circle")
const progress = document.querySelector(".progress h2");

function progressCounter(){
    progress.textContent = `${counter2}/5`

    circles.forEach(circle => {
        if(circle.classList.contains(`circle-${counter2}`)){
            circle.style.background = "#d50000"
        }
        else{
            circle.style.background = "transparent"
        }
    });
}

document.querySelector(".grapes").addEventListener("mouseover", function(){
    document.querySelector(".section-3-wrapper").style.opacity = "0.5"
})
document.querySelector(".grapes").addEventListener("mouseout", function(){
    document.querySelector(".section-3-wrapper").style.opacity = "1"
})

const menu = document.querySelector(".menu")

menu.addEventListener("click", () => {
    document.querySelector(".nav-bar").classList.toggle("change")
})


document.querySelector(".nav-list").addEventListener("click", skipTo)

function skipTo(e){
    let target = e.target
    let sections = document.querySelectorAll("section")
    if(target.classList.contains("home-menu")){
        sections.forEach(section => {
            section.style.left = "0"
        })

        counter1 = 0
        counter2 = 1
        progressCounter()
    }

    if(target.classList.contains("vine-menu")){
        sections.forEach(section => {
            if (section.classList.contains("section-1")){
                section.style.left = "-100vw"
            }
            else{
                section.style.left = "0"
            }
        })
        counter1 = 1
        counter2 = 2
        progressCounter()
    }

    if(target.classList.contains("grapes-menu")){
        sections.forEach(section => {
            if (section.classList.contains("section-1") || section.classList.contains("section-2") ){
                section.style.left = "-100vw"
            }
            else{
                section.style.left = "0"
            }
        })
        counter1 = 2
        counter2 = 3
        progressCounter()
    }

    if(target.classList.contains("wine-menu")){
        sections.forEach(section => {
            if (section.classList.contains("section-1") || section.classList.contains("section-2") || section.classList.contains("section-3") ){
                section.style.left = "-100vw"
            }
            else{
                section.style.left = "0"
            }
        })
        counter1 = 3
        counter2 = 4
        progressCounter()
    }

    if(target.classList.contains("contact-menu")){
        sections.forEach(section => {
            if (section.classList.contains("section-1") || section.classList.contains("section-2") || section.classList.contains("section-3") 
            || section.classList.contains("section-4")){
                section.style.left = "-100vw"
            }
            else{
                section.style.left = "0"
            }
        })
        counter1 = 4
        counter2 = 5
        progressCounter()
    }


}