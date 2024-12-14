const  p = document.getElementById("timer")
setInterval(timer, 1000)

function timer(){
    let  num = parseInt(p.textContent)  
    if(num> 0){
        num--
        p.textContent = String(num)
    }
    else {
            window.alert("Вы победили в конкурсе")
            num = 60
            p.textContent = String(num)
    }
}


