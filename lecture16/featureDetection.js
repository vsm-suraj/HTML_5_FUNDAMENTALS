if( !'placeholder' in document.createElement('input')){
    // a polyfill   
}

function testSupport(type){
    var i = document.createElement('input');

    i.setAttribute('type',type);

    return i.type === type;
}

if( !testSupport('email')){
    //provide fallback
}

//for canvas type
var i = document.createElement('canvas');
if(!!i.getContext()){
    //browser support canvas;
}

//for local storage test
function supportStorage(){
    try{
        return 'localStorage' in window && window.localStorage != null;
    }
    catch(e){
        return false;        
    }
}