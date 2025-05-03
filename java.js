function getHistory() {
    return document.getElementById("history_value").innerText;
}
function getOutput() {
    return document.getElementById("output_value").innerText;
}
function PrintHistory(num) {
    document.getElementById("history_value").innertext=num;
}
function PrintOutput(num) {
    if (num===""){
        document.getElementById("output-value").innerHTML=num;
    }
    else {
        document.getElementById("output-value").innerHTML=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g), '');
}
var operator = document.getElementsByClassName(operation);

for(var i=0; i<operator.length;i++){
    operator[i].addEventListener('click', function(){
        if(this.id=="clear"){
            PrintHistory("");
            PrintOutput("");
        }
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output= output.substring(0,output.length-1);
                PrintOutput(output);
            }
        }
        else{
            var output=getOutput();
            var History=getHistory();
            if(output=" " && history!=" "){
                if(isNaN(history[history.length-1])){
                    history= history.substring(0,history.length-1)
                }
            }
            if (output!= "" || history!="")
        }
    })
}