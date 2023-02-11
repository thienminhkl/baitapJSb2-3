// Bài tập 1: Tính tiền lương nhân viên

function salarySum() {
    var dayWork = document.getElementById("workDays").value;

    var sumSal = 0;

   
    if(dayWork <= 0){
        sumSal = 0;
        alert("Ngày làm không thể bé hơn 0");
    } else{
        sumSal = dayWork * 100000
    }

    document.getElementById("txtSalary1").innerHTML = "Tiền lương nhân viên: " + sumSal.toLocaleString() + "đ";

};


document.getElementById("salary1").onclick = salarySum;

// Bài tập 2: TÍnh giá trị trung bình


function averageNum() {
    var numb1 = Number(document.getElementById("num1").value);
    var numb2 = Number(document.getElementById("num2").value);
    var numb3 = Number(document.getElementById("num3").value);
    var numb4 = Number(document.getElementById("num4").value);
    var numb5 = Number(document.getElementById("num5").value);

    var average = (numb1 + numb2 + numb3 + numb4 + numb5) / 5;

    document.getElementById("txtAverage2").innerHTML = "Trung bình cộng 5 số thực đã nhập là: " + average;
};


document.getElementById("average2").onclick = averageNum;

// Bài tập 3: Tính tiền lương nhân viên

function exchangeMoney() {
    var moneyVal = document.getElementById("money").value;

    var exchanged = 0;

   
    if(moneyVal <= 0){
        exchanged = 0;
        alert("Số tiền nhập vào phải nhiều hơn 0");
    } else{
        exchanged = moneyVal * 23500
    }

    document.getElementById("txtExchange1").innerHTML = "Số tiền sau quy đổi: " + exchanged.toLocaleString() + "VND";

};


document.getElementById("exchange1").onclick = exchangeMoney;

// Bài tập 4:  Tính diện tích và chu vi hình chữ nhật

function caclRectangle() {
    var lengthRec = Number(document.getElementById("length").value);
    var widthRec = Number(document.getElementById("width").value);

    var areaRec = 0;
    var circRec = 0;
   
    if(lengthRec <= 0 || widthRec <= 0 ){
        areaRec = 0;
        circRec = 0;
        alert("Chiều dài và chiều rộng phải lớn hơn 0");
    } else{
        areaRec = lengthRec * widthRec;
        circRec = (lengthRec + widthRec) * 2;
    }

    document.getElementById("txtArea").innerHTML = "Diện tích hình chữ nhật: " + areaRec;
    document.getElementById("txtCircumference").innerHTML = "Chu vi hình chữ nhật: " + circRec;

};


document.getElementById("calc4").onclick = caclRectangle;



// Bài tập 5: Tính tổng 2 ký số

function sum2Num() {
    var number = Number(document.getElementById("5number").value);
    var sum = 0;

   
    if( number <= 99 && number >= 10 ){
        var hangChuc = Math.floor(number/10);
        var hangDv = number % 10;

        sum = hangChuc + hangDv;
    } else if(number <= -10 && number >= -99 ){
        number = number * (-1);
        console.log(number)
        var hangChuc = Math.floor(number/10);
        var hangDv = number % 10;

        sum = hangChuc + hangDv;
    } else {
        sum = 0;
        alert("Nhập số có 2 chữ số");
    }

    document.getElementById("txtSum").innerHTML = "Tổng 2 ký số là: " + sum;

};


document.getElementById("calc5").onclick = sum2Num;