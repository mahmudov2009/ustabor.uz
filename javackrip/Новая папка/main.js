function kamay(){
    var h2 =document.getElementById('h2');
    var value = h2.innerText*1;
    console.log(value)
    h2.innerText = --value;
}
function kupay(){
    var h2 =document.getElementById('h2');
    var value = h2.innerText*1;
    h2.innerText = ++value;
}
function qayt(){
    var h2 =document.getElementById('h2');
    h2.innerText ="0";

}