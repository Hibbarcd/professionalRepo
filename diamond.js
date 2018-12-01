$(document).ready(function() {

    $("#diamond").on("click", function(event){
        event.preventDefault();
        let number = $("#diamond").val().trim();
        console.log("triggered");
    }); 

    function printDiamond() {
        document.getElementById("result").innerHTML = "";
        var rows = document.getElementById("rows").value;

        if (rows < 2 || rows > 10) {
            alert('Please enter value between 1 and 10');
            return;
        }
        if (rows % 2 == 0) { alert('Please input odd number'); return;}
        
//Code for 1
var ast = [],
i, j = rows;
for (i = 0; i <= j; i+=2) {
ast[i] = new Array(i + 2).join([i+1]);
//  console.log(ast[i]);
document.getElementById('result').innerHTML+=ast[i] + '<br />';
}
//<!-- Code for 2 - -->

var ast = [],
i, j = rows-1;
for (i = j-2; i >=0; i-=2) {
ast[i] = new Array(i + 2).join([i+1]);
//   console.log(ast[i]);
document.getElementById('result').innerHTML+=ast[i] + '<br />';
}
}  