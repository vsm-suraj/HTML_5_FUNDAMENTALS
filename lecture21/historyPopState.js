history.pushState(
    //data,
    //title,
    //url
    "google",
    'google logo',
    'url to google'
)

window.addEventListener('popstate',function(e){
    this.console.log(e);
})