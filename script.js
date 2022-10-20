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
        console.log("Circumference: " + circumference);
        console.log("Area: " + area);
        document.getElementById("z2").innerHTML = "Radius: " + radius + " Circumference: " + circumference.toFixed(2) + " Area: " + area.toFixed(2);
    }

}

//Zadanie 3//
var array = [];
var sum = 0;

//Zadanie 3.1//
function z3_1() {
    array = [];
    sum = 0;
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
    console.log("3.1.Array: " + array);
    document.getElementById("z3_1").innerHTML = "Array: " + array;
}

//Zadanie 3.2//
function z3_2() {
    if (array.length == 0) {
        document.getElementById("z3_2").innerHTML = "Array is empty";
        console.log("3.2 Array is empty");
    }
    else {
        var minimum = Math.min(...array);
        var index = array.indexOf(minimum);
        array.splice(index, 1);
        console.log("Minimum: " + minimum + " Array: " + array);
        document.getElementById("z3_2").innerHTML = "Minimum: " + minimum + " Array: " + array;
    }
}

//Zadanie 3.3//
function z3_3() {
    if (array.length == 0) {
        document.getElementById("z3_3").innerHTML = "Array is empty";
        console.log("3.3 Array is empty");
    }
    else {
        var maximum = Math.max(...array);
        var index = array.lastIndexOf(maximum);
        array.splice(index, 1);
        console.log("Maximum: " + maximum + " Array: " + array);
        document.getElementById("z3_3").innerHTML = "Maximum: " + maximum + " Array: " + array;
    }
}

//Zadanie 3.4//
function z3_4() {
    if (array.length == 0) {
        document.getElementById("z3_4").innerHTML = "Array is empty";
        console.log("3.4 Array is empty");
    }
    else {
        const numberarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
        const temparray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (var i = 0; i < array.length; i++) {
            numberarray[array[i] - 1]++;
        }
        console.log("Numbers : " + temparray);
        console.log("Occurences : " + numberarray);
        document.getElementById("z3_4").innerHTML = "Numbers : " + temparray;
        document.getElementById("z3_4_2").innerHTML = "Occurences : " + numberarray;
    }
}

//Zadanie 3.5//
function z3_5() {
    if (array.length == 0) {
        document.getElementById("z3_5").innerHTML = "Array is empty";
        console.log("3.5 Array is empty");
    }
    else {
        console.log("Array before shift : " + array);
        document.getElementById("z3_5").innerHTML = "Array before shift : " + array;
        for (var i = 0; i < 8; i++) {
            array.push(array.shift());
        }
        console.log("Array after shift : " + array);
        document.getElementById("z3_5_2").innerHTML = "Array after shift : " + array;
    }
}

//Zadanie 4//
function z4() {
    var names = ["Johannes", "Marsaglia", "John", "Bob", "Jacob"];
    document.getElementById("z4").innerHTML = "Uncoded Names: " + names;
    console.log("Uncoded Names: " + names);
    let codedname = [];
    function code(name, index) {
        var tempname = name;
        tempname = tempname.replaceAll('a', '4');
        tempname = tempname.replaceAll('A', '4');
        tempname = tempname.replaceAll('e', '3');
        tempname = tempname.replaceAll('E', '3');

        if (tempname.length >= 6) {
            codedname[index] = "";
            codedname[index] = codedname[index] + tempname.substring(0, 3);
            codedname[index] = codedname[index] + "...";
            codedname[index] = codedname[index] + tempname.substring((tempname.length - 3), tempname.length);
        }
        else codedname[index] = tempname;
    }

    names.forEach(code);
    console.log("Coded Names: " + codedname);
    document.getElementById("z4_2").innerHTML = "Coded Names: " + codedname;
}

//Zadanie 5//
function z5() {
    var x = document.getElementById("z5_clear").children;
    for (var i = 1; i < x.length; i++) {
        x[i].innerHTML = "";
    }

    var string = "Flour,Eggs,Milk,Butter";
    //document.getElementById("z5").innerHTML = "Products: " + products;
    const stringarray = string.split(',');
    //document.getElementById("z5").innerHTML = "Products: " + stringarray;
    const finalarray = [];

    let th = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');

    console.log("Products: ")
    for (let name of stringarray) {
        let product = {
            name: name,
            price: ((Math.random() * 100) + 1).toFixed(2)
        }
        console.log(product);
        finalarray.push(product);
    }
    document.getElementById("z5_products").innerHTML = "Products list: ";
    let table = document.getElementById("table");
    th = document.createElement('th');
    th2 = document.createElement('th');
    th.textContent = "Name";
    th2.textContent = "Price";
    table.append(th, th2);
    for (let i = 0; i < finalarray.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td1.textContent = finalarray[i].name;
        td2.textContent = finalarray[i].price;
        tr.append(td1, td2);
        table.append(tr);
    }

    document.getElementById("z5_list").innerHTML = "Shopping list: ";
    const listarray = [];
    let table2 = document.getElementById("table2");
    let sum = 0;
    th = document.createElement('th');
    th2 = document.createElement('th');
    th3 = document.createElement('th');
    th.textContent = "Name";
    th2.textContent = "Price";
    th3.textContent = "Quantity";
    table2.append(th, th2, th3);

    console.log("Shopping list: ");
    for (let i = 0; i < finalarray.length / 2; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        let random = parseInt(Math.random() * finalarray.length);
        let bought = {
            name: finalarray[random].name,
            price: finalarray[random].price,
            amount: parseInt((Math.random() * 100) + 1)
        }
        console.log(bought);
        finalarray.splice(random, 1);
        td1.textContent = bought.name;
        td2.textContent = bought.price;
        td3.textContent = bought.amount;
        tr.append(td1, td2, td3);
        table2.append(tr);
        sum = sum + bought.amount * bought.price;
    }
    console.log("Sum: " + sum.toFixed(2));
    document.getElementById("z5_sum").innerHTML = "Sum of bought products: " + sum.toFixed(2);
}