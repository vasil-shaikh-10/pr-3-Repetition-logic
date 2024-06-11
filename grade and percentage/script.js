function graderes(){
    let name = document.getElementById('name').value;
    let standard = document.getElementById('std').value;
    let sub_1 = parseFloat(document.getElementById('ss').value);
    let sub_2 = parseFloat(document.getElementById('eng').value);
    let sub_3 = parseFloat(document.getElementById('guj').value);
    let sub_4 = parseFloat(document.getElementById('math').value);
    let sub_5 = parseFloat(document.getElementById('sci').value);

    let totalmarks = sub_1 + sub_2 + sub_3 + sub_4 + sub_5;
    let percentage = (totalmarks / 500)*100;

    let grade;
    if(percentage >= 90) {
        grade = 'A+';
    }
    else if (percentage >= 80) {
        grade = 'A';
    }
    else if (percentage >= 70) {
        grade = 'B';
    }
    else if (percentage >= 60) {
        grade = 'C';
    }
    else if (percentage >= 50) {
        grade = 'D';
    }
    else {
        grade = 'FAIL';
    }

    let table = "<table border='3'>";
    table += "<tr><td>Name:</td><td>" + name + "</td></tr>";
    table += "<tr><td>Standard:</td><td>" + standard + "</td></tr>";
    table += "<tr><td>Total Marks:</td><td>" + totalmarks + "</td></tr>";
    table += "<tr><td>Percentage:</td><td>" + percentage+ "%</td></tr>";
    table += "<tr><td>Grade:</td><td>" + grade + "</td></tr>";
    table += "</table>";

    
    document.getElementById("dis").innerHTML = table;
}