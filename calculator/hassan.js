function getValue(a){
    var t = document.getElementById('Inp')
    t.value += a 
}

function clr(){
    var t = document.getElementById('Inp')
    t.value = "";
}
function del(){
    var t = document.getElementById('Inp')
    t.value = t.value.slice(0,-1);
}
function result(){
    var t = document.getElementById('Inp')
    try{
        t.value = eval(t.value)
    }
    catch{
        t.value = "Syntax Error"
    }
}
