
document.getElementById('add').addEventListener('click', function(){
    var number1=parseInt( document.getElementById("number1").value);
    var number2=parseInt (document.getElementById("number2").value);
    var sum=number1+number2;
    var result= document.getElementById("result").innerHTML= `${sum}`;
})

