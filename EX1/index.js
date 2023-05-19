var intArray=[];
function addArray(){
    var n = document.querySelector("#inputArray").value*1;
    intArray.push(n);
    document.querySelector("#result").innerHTML=`${intArray}`;
}