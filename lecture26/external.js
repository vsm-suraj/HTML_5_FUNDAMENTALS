if(Modernizr.localstorage){
    var comment = document.getElementById('comment'),

    updateInterval;

    comment.addEventListener('focus',function(){
        updateInterval = setInterval(function(){
            localStorage.comment = comment.value;
        },2000)
    },false)
    
    comment.addEventListener('blur',function(){
        clearInterval(updateInterval);
    })
}