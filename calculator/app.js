function clearresults() {
    var results = document.getElementById("results");
    results.value =""
}
function getnumber(num) {
    var results = document.getElementById("results");
    results.value+=num;
}
function square() {
    var results = document.getElementById("results");
    results.value = Math.pow(results.value,2);
}
function cube() {
    var results = document.getElementById("results");
    results.value = Math.pow(results.value,3);
}
function root() {
    var results = document.getElementById("results");
    results.value = Math.pow(results.value,1/2);
}
function getresult() {
    var results = document.getElementById("results");
    results.value = eval(results.value);
}
