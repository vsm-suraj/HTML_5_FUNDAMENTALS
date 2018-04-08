var prog = document.querySelector("#progressBar");
var mtr = document.querySelector("#meter");
interval = setInterval(function(){
    prog.value += 1;
    mtr.value += 1;
    if(prog.value == 100)
    {
        clearInterval(interval);
    }
},500);