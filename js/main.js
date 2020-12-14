'use strict'

window.onload = function () {
    document.getElementById("estimation").appendChild(createTable());
    sumMultiplesNum();
    newYearTree();
}

// 1. Write a JavaScript program which computes, the average marks of the following students Then, this average is used to determine the corresponding grade.

let tableTitle = ['Name', 'Estimation', 'Average estimate', 'ECTS'];
let nameAndPoints = [
    {
        name: 'John',
        estimation: [77, 64, 33],

    },
    {
        name: 'Bill',
        estimation: [85, 60, 55],


    },
    {
        name: 'David',
        estimation: [68, 90, 75],
    },
    {
        name: 'Ryan',
        estimation: [88, 90, 87],
    },
    {
        name: 'Nick',
        estimation: [95, 95, 97],
    }
];


function createTable() {
    let table = document.createElement('table');
    table.className = 'table table-striped';
    let thead = document.createElement('thead');
    thead.setAttribute('align', 'center');
    let tbody = document.createElement('tbody');
    let headRow = document.createElement('tr');

    for (let i = 0; i < tableTitle.length; i++) {
        let th = document.createElement('th');
        if (i === tableTitle.length - 3) {
            th.colSpan = nameAndPoints[0].estimation.length;
        }
        th.appendChild(document.createTextNode(tableTitle[i]));
        headRow.appendChild(th);
    }

    thead.appendChild(headRow);
    table.appendChild(thead);

    for (let i = 0; i < nameAndPoints.length; i++) {

        let tr = document.createElement('tr');
        tr.setAttribute('align', 'center');
        let td = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let allPoints = nameAndPoints[i].estimation;
        let sumPoints = allPoints.reduce((a, b) => a + b);
        let averagePoints = sumPoints / nameAndPoints[i].estimation.length;
        td.appendChild(document.createTextNode(nameAndPoints[i].name));
        tr.appendChild(td);

        for (let j = 0; j < nameAndPoints[i].estimation.length; j++) {
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(nameAndPoints[i].estimation[j]));
            tr.appendChild(td);
        }

        td2.appendChild(document.createTextNode(nameAndPoints[i].average = averagePoints.toFixed(0)));

        if (nameAndPoints[i].average > 90 && nameAndPoints[i].average <= 100) {
            td3.appendChild(document.createTextNode(nameAndPoints[i].ects = 'A'));
        } else if (nameAndPoints[i].average > 80 && nameAndPoints[i].average <= 90) {
            td3.appendChild(document.createTextNode(nameAndPoints[i].ects = 'B'));
        } else if (nameAndPoints[i].average > 70 && nameAndPoints[i].average <= 80) {
            td3.appendChild(document.createTextNode(nameAndPoints[i].ects = 'C'));
        } else if (nameAndPoints[i].average >= 60 && nameAndPoints[i].average <= 70) {
            td3.appendChild(document.createTextNode(nameAndPoints[i].ects = 'D'));
        } else if (nameAndPoints[i].average < 60) {
            td3.appendChild(document.createTextNode(nameAndPoints[i].ects = 'F'));
        }

        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    return table;
}

// 2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.
function sumMultiplesNum() {
    let sumMultiples = 0;
    for (let i = 1; i <= 1000; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sumMultiples += i;
        }
    }
    document.getElementById('sumMultiplesNum').innerText = `Сума кратних чисел 3 або 5 = ${sumMultiples}`;
}

// 3. Write a JavaScript program to construct the following pattern, using a nested for loop.
function newYearTree() {
    let str = '';
    let strArr = [];
    for (let i = 0; i < 5; i++) {
        str = str + '*';
        strArr.push(str,'<br>');
    }

    document.getElementById('nyTree').innerHTML = strArr.join('');
}