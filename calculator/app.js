var display = document.getElementById("display")

function getvalue (num){
    display.value += num;

}

function calculatevalue (){
    var ans = eval(display.value)
    display.value = ans;
}

function clearAll(){
    display.value = ""
}