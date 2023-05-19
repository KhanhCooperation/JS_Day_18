var intArray=[];
function addArray(){
    var n = document.querySelector("#inputArray").value*1;
    intArray.push(n);
    document.querySelector("#result").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">${intArray}</p>`;
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
        document.querySelector("#result5").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Không có số chẵn`;
    }else{
        document.querySelector("#result5").innerHTML=`<i class="fa fa-hand-point-right pl-1 text-warning"><p class="d-inline text-dark pl-1">Số chẵn cuối cùng: ${odd}</p>`;
    }
}