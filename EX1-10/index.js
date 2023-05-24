var intArray=[];
function addArray(){
    var n = document.querySelector("#inputArray").value*1;
    intArray.push(n);
    document.querySelector("#result").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Your Array: ${intArray}</p>`;
    document.querySelector("#inputArray").value = "";
}

//Sec1
function sumOfArray(){
    var sum=0;
    for (let i = 0; i < intArray.length; i++) {
        if(intArray[i]>0){
            sum+=intArray[i];        
        }
    }
    document.querySelector("#result1").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Tổng số dương: ${sum}</p>`;
}

//Sec2 : Count
function count(){
    var count=0;
    for (let i = 0; i < intArray.length; i++) {
        if(intArray[i]>0){
            count++;
        }
    }
    document.querySelector("#result2").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Số lượng số dương: ${count}</p>`;
}

//Sec3: Min
function findMin(){
    var min=intArray[0];
    for (let i = 0; i < intArray.length; i++) {
        if(min > intArray[i]){
            min=intArray[i];
        }
    }
    document.querySelector("#result3").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Số nhỏ nhất: ${min}</p>`;
}

//Sec4: Min
function findMinPositive(){
    var min=intArray[0];
    //tim Max => tim Min de han che trường hợp so am nhap vao arr[0]
    for (let i = 0; i < intArray.length; i++) {
        if(min<intArray[i]){
            min=intArray[i];
        }
    }
    // tim Min 
    for (let i = 0; i < intArray.length; i++) {
        if(min > intArray[i] && intArray[i] > 0){
            min=intArray[i];
        }
    }
    document.querySelector("#result4").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Số dương nhỏ nhất: ${min}</p>`;
}

//Sec5:Odd
function findOdd(){
    var odd=15426325435;
    for (let i = 0; i < intArray.length; i++) {
        if(intArray[i] %2 ==0){
            odd=intArray[i];
        }
    }
    if(odd==15426325435){
        document.querySelector("#result5").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Không có số chẵn</p>`;
    }else{
        document.querySelector("#result5").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Số chẵn cuối cùng: ${odd}</p>`;
    }
}

///Sec6:change index
function changeIndex(){
    var index1=document.querySelector("#num1_index").value*1;
    var index2=document.querySelector("#num2_index").value*1;
    var biếnPointer=intArray[index1];
    intArray[index1]=intArray[index2];
    intArray[index2]=biếnPointer;
    document.querySelector("#result6").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Mảng sau khi đổi: ${intArray}</p>`;
}

//Sec7:Ascending
function ascending(){
    for (let i = 0; i < intArray.length; i++) {
        for (let j = i+1; j < intArray.length; j++) {
            if(intArray[i]>intArray[j]){
                var pointer = intArray[i];
                intArray[i] = intArray[j];
                intArray[j] = pointer;
            }            
        }
    }
    document.querySelector("#result7").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Mảng sau khi sắp xếp: ${intArray}</p>`;
}

//Sec8:Prime
function findPrime(){
    var firstPrime;
    for (let i = 0; i < intArray.length; i++) {
        var count=0;
        for (let j = 2; j < (intArray[i] / 2); j++) {
            if (intArray[i]%j ==0){
                count++;
            }
        }
        if(count==0 && intArray[i] > 1){
            firstPrime=intArray[i];
            break;
        }
    }
    document.querySelector("#result8").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Số nguyên tố đầu tiên: ${firstPrime}</p>`;
}

//sec9: Count int
var mixArray=[];
function addArray9(){
    var n = document.querySelector("#inputArray9").value*1;
    mixArray.push(n);
    document.querySelector("#result9a").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">${mixArray}</p>`;
}
function countInt(){
    var count=0;
    for (let i = 0; i < mixArray.length; i++) {
        if(Number.isInteger(mixArray[i]) == true ){
            count++
        }
    }
    document.querySelector("#result9b").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Số lượng số nguyên:${count}</p>`;
}

// sec10 : compared positive & neg
function cpPosAndNeg(){
    var pos=0;
    var neg=0;
    for (let i = 0; i < intArray.length; i++) {
        if (intArray[i] <0) {
            neg++;
        }else if(intArray[i] >0){
            pos++;
        }
    }
    if(pos > neg){
        document.querySelector("#result10").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Số dương > Số âm</p>`;
    }else if(pos < neg){
        document.querySelector("#result10").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Số dương < Số âm</p>`;
    }else{
        document.querySelector("#result10").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Số dương = Số âm</p>`;
    }
}