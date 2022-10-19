//Zadanie 1//
function z1() {
    var output = "";

    for (var i = 1; i <= 100; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            output = output + "FizBuz ";
        }
        else if (i % 2 == 0) {
            output = output + "Fiz ";
        }
        else if (i % 3 == 0) {
            output = output + "Buz ";
        }
        else {
            output = output + i + " ";
        }
    }
    console.log(output);
    document.getElementById("z1").innerHTML = output;
}

//Zadanie 2//
function z2() {
    let radius = "";
    radius = prompt("Input radius: ");

    if (radius == "") {
        alert("Value is empty");
        document.getElementById("z2").innerHTML = "Value is empty";
    }
    else if (isNaN(radius)) {
        alert("Value is not a number");
        document.getElementById("z2").innerHTML = "Value is not a number";
    }

    else {
        let circumference = radius * Math.PI * 2;
        let area = radius * Math.PI * Math.PI;
        document.getElementById("z2").innerHTML = "Radius: " + radius + " Circumference: " + circumference.toFixed(2) + " Area: " + area.toFixed(2);
    }

}

//Zadanie 3//
var array = [];
var sum = 0;

//Zadanie 3.1//
function z3_1() {

    while (sum != 200) {
        let number = Math.floor(Math.random() * (10) + 1);
        sum = sum + number;
        if (sum > 200)
            sum = sum - number;

        else if (sum < 200)
            array.push(number);

        else if (sum == 200)
            break;

    }
    document.getElementById("z3_1").innerHTML = "Array: " + array;
}

//Zadanie 3.2//
function z3_2() {
    var minimum = Math.min(...array);
    var localsum = sum - minimum;
    var index = array.indexOf(minimum);
    array.splice(index, 1);
    document.getElementById("z3_2").innerHTML = "Minimum: " + minimum + " Array: " + array;
}

//Zadanie 3.3//
function z3_3() {
    var maximum = Math.max(...array);
    var index = array.lastIndexOf(maximum);
    array.splice(index, 1);
    document.getElementById("z3_3").innerHTML = "Minimum: " + maximum + " Array: " + array;
}

//Zadanie 3.4//
function z3_4() {
    const numberarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
    const temparray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (var i = 0; i < array.length; i++) {
        numberarray[array[i] - 1]++;
    }
    document.getElementById("z3_4").innerHTML = "Numbers : " + temparray;
    document.getElementById("z3_4_2").innerHTML = "Occurences : " + numberarray;
}

//Zadanie 3.5//
function z3_5() {
    document.getElementById("z3_5").innerHTML = "Array before shift : " + array;
    for (var i = 0; i < 8; i++) {
        array.push(array.shift());
    }
    document.getElementById("z3_5_2").innerHTML = "Array after shift : " + array;
}

//Zadanie 4//
function z4() {
    var names = ["Johannes", "Marsaglia", "John", "Bob", "Jacob"];
    document.getElementById("z4").innerHTML = "Uncoded Names: " + names;

    let codedname = [];
    function code(name, index) {
        var tempname = name;
        tempname = tempname.replaceAll('a', '4');
        tempname = tempname.replaceAll('A', '4');
        tempname = tempname.replaceAll('e', '3');
        tempname = tempname.replaceAll('E', '3');
        
        if(tempname.length >= 6){
            codedname[index] = "";
            codedname[index] = codedname[index] + tempname.substring(0,3);
            codedname[index] = codedname[index] + "...";
            codedname[index] = codedname[index] + tempname.substring((tempname.length - 3) , tempname.length);
        }
        else codedname[index] = tempname;
    }

    names.forEach(code);
    document.getElementById("z4_2").innerHTML = "Coded Names: " + codedname;
}

//Zadanie 5//
function z5() {
    var string = "Flour,Eggs,Milk,Butter";
    //document.getElementById("z5").innerHTML = "Products: " + products;
    const productsarray = string.split(',');
    //document.getElementById("z5").innerHTML = "Products: " + productsarray;
    var obj = new Object();
    

}