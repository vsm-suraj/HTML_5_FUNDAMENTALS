heading = document.querySelector('h1');


document.body.addEventListener('change',function(){
    r = document.getElementById('red').value;
    g = document.getElementById('green').value;
    b = document.getElementById('blue').value;
    
    heading.style.color = 'rgb('+r+','+g+','+b+')';
})